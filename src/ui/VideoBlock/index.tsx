import clsx from "clsx";
import styled from "styled-components";
import { useEffect, useRef, useState, useCallback } from "react";

import { Loader } from "../Loader";
import { Icon } from "../Icon";
import PlayIcon from "@/assets/icons/play.svg";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useVideoStore } from "@/stores/useVideoStore";

interface VideoBlockProps {
  id?: string;
  video?: string;
  className?: string;
}

const observerOptions: IntersectionObserverInit = {
  threshold: 0.2,
};

export const VideoBlock = ({
  video: pathToVideo = "",
  className,
  id = "",
}: VideoBlockProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sourceRef = useRef<HTMLSourceElement>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isWebView, setIsWebView] = useState(false);

  const { activeVideoId, setActiveVideo } = useVideoStore();
  const isActive = activeVideoId === id;

  const { targetRef, isIntersecting } = useIntersectionObserver({
    options: observerOptions,
  });

  /* ---------------------------------- */
  /* Detect Twitter / social WebView    */
  /* ---------------------------------- */
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isSocialWebView = /twitter|instagram|fbav|fban|tiktok|telegram/i.test(
      ua,
    );

    setIsWebView(isSocialWebView);
  }, []);

  /* ---------------------------------- */
  /* Load video only when visible       */
  /* ---------------------------------- */
  useEffect(() => {
    if (!isIntersecting || !videoRef.current || !sourceRef.current) return;
    if (videoRef.current.readyState > 0) return;

    sourceRef.current.src = pathToVideo;
    videoRef.current.load();
  }, [isIntersecting, pathToVideo]);

  /* ---------------------------------- */
  /* Stop video when leaving viewport   */
  /* ---------------------------------- */
  useEffect(() => {
    if (!isIntersecting && videoRef.current) {
      const video = videoRef.current;

      video.pause();
      video.currentTime = 0; // ⬅️ чтобы при возврате старт был чистый
      video.muted = true;

      setIsLoading(false);
      setIsStarted(false);
    }
  }, [isIntersecting]);

  /* ---------------------------------- */
  /* Stop if another video becomes active */
  /* ---------------------------------- */
  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
      setIsStarted(false);
    }
  }, [isActive]);

  /* ---------------------------------- */
  /* Video events                       */
  /* ---------------------------------- */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setIsLoading(false);
    const handleError = () => {
      setIsError(true);
      setIsLoading(false);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, []);

  /* ---------------------------------- */
  /* Play / Pause toggle                */
  /* ---------------------------------- */
  const togglePlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.readyState === 0) return;

    setActiveVideo(id);

    if (!isStarted) {
      try {
        video.pause(); // ⛔ сбрасываем состояние
        video.currentTime = 0; // ⬅️ ВСЕГДА С НУЛЯ
        video.muted = false;

        await video.play();
        setIsLoading(false);
        setIsStarted(true);
      } catch {
        return;
      }
    } else {
      video.pause();
      video.muted = true;
      setIsStarted(false);
    }
  }, [id, isStarted, setActiveVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // ❌ WebView — без автоплея
    if (isWebView) return;

    if (isIntersecting && !isStarted) {
      video.pause(); // на всякий случай
      video.currentTime = 0; // ⬅️ ВСЕГДА С НУЛЯ
      video.muted = true;

      video.play().catch(() => {
        // autoplay может быть заблокирован
      });
    }
  }, [isIntersecting, isWebView, isStarted]);

  return (
    <StyledVideoBlock
      ref={targetRef}
      className={clsx(
        {
          loading: isLoading,
          error: isError,
          started: isStarted,
          webview: isWebView,
        },
        className,
      )}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload={isWebView ? "metadata" : "auto"}
        disablePictureInPicture
        disableRemotePlayback
      >
        <source ref={sourceRef} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      {isLoading && (
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
          hidden: isStarted,
          "force-show": isWebView && !isStarted,
        })}
      >
        <button className="playButton" onClick={togglePlay}>
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
  cursor: pointer;
  z-index: 55;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Оптимизация для мобильных устройств */
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    backface-visibility: hidden;
    will-change: transform;
  }

  .wrapper,
  .loaderWrapper {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #6c6c6c;
    place-items: center;
    z-index: 3;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition:
      opacity 0.3s,
      visibility 0.3s;
    cursor: pointer;
    user-select: none;
    backface-visibility: hidden;
    will-change: opacity, visibility;

    &.force-show {
      opacity: 1 !important;
      visibility: visible !important;
    }

    &.hidden {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
  }

  .playButton {
    transition: all 0.3s ease;
    opacity: 0.8;
    border-radius: 50%;
    padding: 20px;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 1;
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  @keyframes pulse {
    0% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.7;
    }
  }

  &:hover {
    .overlay:not(.hidden) {
      .playButton {
        opacity: 1;
      }
    }
  }

  &.started {
    .overlay {
      opacity: 0;
      visibility: hidden;
    }

    .playButton {
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

  /* Для WebView всегда показываем overlay если видео не запущено */
  &.webview:not(.started) {
    .overlay {
      opacity: 1;
      visibility: visible;
    }
  }
`;
