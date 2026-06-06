import clsx from "clsx";
import styled from "styled-components";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
  type TouchEvent,
} from "react";

import { Loader } from "../Loader";
import { Icon } from "../Icon";
import PlayIcon from "@/assets/icons/play.svg";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useVideoStore } from "@/stores/useVideoStore";

interface VideoBlockProps {
  id?: string;
  video?: string;
  poster?: string;
  className?: string;
}

const observerOptions: IntersectionObserverInit = {
  threshold: 0.2,
  rootMargin: "300px 0px",
};

const getIsSocialWebView = () => {
  if (typeof navigator === "undefined") return false;

  const ua = navigator.userAgent.toLowerCase();

  return /instagram|fbav|fban|tiktok|telegram|twitter/i.test(ua);
};

export const VideoBlock = ({
  video: pathToVideo = "",
  poster = "",
  className,
  id = "",
}: VideoBlockProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sourceRef = useRef<HTMLSourceElement>(null);
  const playRequestRef = useRef(0);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [isUserStarted, setIsUserStarted] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [hasUserStartedOnce, setHasUserStartedOnce] = useState(false);

  const isWebView = useMemo(getIsSocialWebView, []);

  const { activeVideoId, setActiveVideo } = useVideoStore();
  const isActive = activeVideoId === id;

  const { targetRef, isIntersecting } = useIntersectionObserver({
    options: observerOptions,
  });

  const safePlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return false;

    const requestId = ++playRequestRef.current;

    try {
      await video.play();
      return requestId === playRequestRef.current;
    } catch {
      return false;
    }
  }, []);

  const loadVideo = useCallback(() => {
    const video = videoRef.current;
    const source = sourceRef.current;

    if (!video || !source || !pathToVideo) return;
    if (isLoaded) return;

    source.src = pathToVideo;
    video.load();

    setIsLoaded(true);
    setIsLoading(true);
    setIsError(false);
  }, [isLoaded, pathToVideo]);

  const playMutedBackground = useCallback(async () => {
    const video = videoRef.current;
    if (!video || isError) return;
    if (video.readyState < 2) return;

    video.muted = true;

    if (!video.paused) return;

    await safePlay();
  }, [isError, safePlay]);

  const startWithSound = useCallback(
    async (fromStart: boolean) => {
      const video = videoRef.current;
      if (!video || isError) return;
      if (video.readyState < 2) return;

      setActiveVideo(id);

      // Rewind in place instead of pause()+play(). Re-initiating playback with
      // audio is what triggers the native fullscreen player in social webviews
      // (TikTok/Instagram/Telegram). The video is already playing inline (muted),
      // so we just seek and unmute it within the same user gesture.
      if (fromStart) {
        video.currentTime = 0;
      }

      video.muted = false;

      if (video.paused) {
        const didPlay = await safePlay();
        if (!didPlay) return;
      }

      setIsUserStarted(true);
      setIsManuallyPaused(false);
      setHasUserStartedOnce(true);
    },
    [id, isError, safePlay, setActiveVideo],
  );

  const pauseWithOverlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    setIsUserStarted(false);
    setIsManuallyPaused(true);
  }, []);

  const returnToBackground = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // When another video becomes active, this one keeps playing muted in the
    // background (the "cover" effect), like Instagram. We only mute it and drop
    // the user-started flags so the background-autoplay effect keeps it alive.
    video.muted = true;

    setIsUserStarted(false);
    setIsManuallyPaused(false);
  }, []);
 
  const handleOverlayClick = useCallback(async () => {
    const video = videoRef.current;
    if (!video || isError) return;
    if (video.readyState < 2) return;

    if (isUserStarted && !video.paused) {
      pauseWithOverlay();
      return;
    }

    await startWithSound(!hasUserStartedOnce);  
  }, [
    hasUserStartedOnce,
    isError,
    isUserStarted,
    pauseWithOverlay,
    startWithSound,
  ]);

  const handlePlayButtonPointerDown = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent) => {
      event.stopPropagation();
    },
    [],
  );

  useEffect(() => {
    if (!isIntersecting) return;
    loadVideo();
  }, [isIntersecting, loadVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => {
      setIsLoading(true);
      setIsError(false);
    };

    const handleCanPlay = () => {
      setIsReady(true);
      setIsLoading(false);
    };

    const handleWaiting = () => {
      setIsLoading(true);
    };

    const handlePlaying = () => {
      setIsPlaying(true);
      setIsLoading(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setIsUserStarted(false);
      setIsManuallyPaused(false);
      setHasUserStartedOnce(false);
    };

    const handleError = () => {
      setIsError(true);
      setIsLoading(false);
      setIsPlaying(false);
      setIsReady(false);
      setIsUserStarted(false);
      setIsManuallyPaused(false);
      setHasUserStartedOnce(false);
    };

    video.addEventListener("loadstart", handleLoadStart);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("loadstart", handleLoadStart);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("error", handleError);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x5-playsinline", "true");
    video.setAttribute("x5-video-player-type", "h5");
    video.playsInline = true;

    if (!isWebView) return;

    const blockNativeFullscreen = (event: Event) => {
      event.preventDefault();
    };

    video.addEventListener("webkitbeginfullscreen", blockNativeFullscreen);

    return () => {
      video.removeEventListener("webkitbeginfullscreen", blockNativeFullscreen);
    };
  }, [isWebView]);

  useEffect(() => {
    if (!isLoaded || !isReady || isError) return;
    if (isUserStarted) return;
    if (isManuallyPaused) return;

    void playMutedBackground();
  }, [
    isLoaded,
    isReady,
    isError,
    isUserStarted,
    isManuallyPaused,
    playMutedBackground,
  ]);

  useEffect(() => {
    if (!id) return;
    if (isActive) return;
    if (!isUserStarted) return;

    returnToBackground();
  }, [id, isActive, isUserStarted, returnToBackground]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isIntersecting) return;
    if (video.paused) return;
    if (isManuallyPaused) return;

    video.muted = true;
    setIsUserStarted(false);
  }, [isIntersecting, isManuallyPaused]);

  const isInteractivePlayback = isUserStarted && isPlaying;
  const showPlayButton = !isInteractivePlayback;

  return (
    <StyledVideoBlock
      ref={targetRef}
      className={clsx(
        {
          loading: isLoading,
          error: isError,
          playing: isPlaying,
          "user-started": isUserStarted,
          paused: isManuallyPaused,
          webview: isWebView,
          interactive: isInteractivePlayback,
        },
        className,
      )}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster={poster || undefined}
        controls={false}
        preload={isWebView ? "metadata" : "none"}
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload noplaybackrate nofullscreen"
      >
        <source ref={sourceRef} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      {isLoading && !isError && (
        <div className="loaderWrapper">
          <Loader size={14} />
        </div>
      )}

      {isError && (
        <div className="wrapper">
          <p className="error">Ошибка загрузки видео</p>
        </div>
      )}

      <div
        className={clsx("overlay", {
          active: isInteractivePlayback,
        })}
        onClick={() => {
          void handleOverlayClick();
        }}
      >
        <button
          type="button"
          className={clsx("playButton", {
            hidden: !showPlayButton,
          })}
          aria-label={
            isUserStarted && isPlaying
              ? "Поставить видео на паузу"
              : "Включить видео"
          }
          onPointerDown={handlePlayButtonPointerDown}
          onClick={(event) => {
            event.stopPropagation();
            void handleOverlayClick();
          }}
        >
          <Icon svg={PlayIcon} size={80} />
        </button>
      </div>
    </StyledVideoBlock>
  );
};

export const StyledVideoBlock = styled.div`
  width: 40rem;
  height: 40rem;
  overflow: hidden;
  border-radius: 50%;
  flex-shrink: 0;
  z-index: 55;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    backface-visibility: hidden;
    will-change: transform;
  }

  &.webview video {
    pointer-events: none;
  }

  .wrapper,
  .loaderWrapper {
    display: none;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: #6c6c6c;
    place-items: center;
    z-index: 4;
  }

  .overlay {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.45);
    transition:
      opacity 0.3s ease,
      visibility 0.3s ease,
      background-color 0.3s ease;
    user-select: none;
    backface-visibility: hidden;
    will-change: opacity, visibility;
    cursor: pointer;

    &.active {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .playButton {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 20px;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    opacity: 0.85;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease,
      visibility 0.3s ease;

    &.hidden {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    &:hover {
      opacity: 1;
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  &:hover {
    .overlay .playButton:not(.hidden) {
      opacity: 1;
    }
  }

  &.error {
    .overlay {
      display: none;
    }

    .wrapper {
      display: grid;
    }
  }

  &.loading {
    .loaderWrapper {
      display: grid;
    }
  }
`;
