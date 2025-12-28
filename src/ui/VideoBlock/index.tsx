import clsx from "clsx";
import styled from "styled-components";
import { useEffect, useRef, useState, useCallback } from "react";
import { Loader } from "../Loader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import PlayIcon from "@/assets/icons/play.svg";
import { Icon } from "../Icon";
import { useVideoStore } from "@/stores/useVideoStore";

interface VideoBlockProps {
  id?: string;
  video?: string;
  className?: string;
}

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

export const VideoBlock = ({ video: pathToVideo = "", className, id = " " }: VideoBlockProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoSourceRef = useRef<HTMLSourceElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { isIntersecting, targetRef } = useIntersectionObserver({ options });

  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isFinishLoadedVideo, setIsFinishLoadedVideo] = useState(false);
  const [isStartVideo, setIsStartVideo] = useState(false);
  const [isTwitterWebView, setIsTwitterWebView] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  const { activeVideoId, setActiveVideo } = useVideoStore();

  const isActive = activeVideoId === id;

  // Определяем, открыто ли в твиттерском WebView
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isTwitter =
      userAgent.includes("twitter") ||
      /TwitterAndroid|TwitteriPhone|TwitterForiPhone/i.test(navigator.userAgent);

    setIsTwitterWebView(isTwitter);

    // Также проверяем другие социальные приложения
    const isSocialApp =
      userAgent.includes("instagram") || userAgent.includes("fban") || userAgent.includes("fbav");

    // Для всех социальных приложений нужен особый подход
    if (isTwitter || isSocialApp) {
      // console.log("Социальное приложение обнаружено, активируем специальный режим");
    }
  }, []);

  const stopVideo = useCallback(() => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.muted = true;
    // Не пытаемся запустить снова - это может вызвать проблемы в WebView
  }, []);

  const startVideo = useCallback(() => {
    if (!videoRef.current) return;

    setActiveVideo(id);
    setUserInteracted(true); // Пользователь взаимодействовал

    videoRef.current.muted = false;

    // Для твиттера используем promise с обработкой ошибок
    const playPromise = videoRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Видео успешно запущено
          console.log("Видео запущено успешно");
        })
        .catch((error) => {
          console.warn("Ошибка запуска видео в WebView:", error);
          // Для твиттера показываем кнопку play
          if (isTwitterWebView) {
            setIsStartVideo(false);
          }
        });
    }

    videoRef.current.currentTime = 0;
  }, [id, isTwitterWebView, setActiveVideo]);

  const handleToggleIsStartVideo = useCallback(() => {
    // Для твиттера всегда нужно явное взаимодействие
    if (isTwitterWebView && !userInteracted) {
      setUserInteracted(true);
    }

    setIsStartVideo((prev) => {
      const newValue = !prev;

      if (!newValue) {
        stopVideo();
      } else {
        startVideo();
      }

      return newValue;
    });
  }, [isTwitterWebView, startVideo, stopVideo, userInteracted]);

  // Добавляем обработчик глобальных взаимодействий для твиттера
  useEffect(() => {
    if (!isTwitterWebView) return;

    const handleGlobalInteraction = () => {
      setUserInteracted(true);
      // Убираем слушатели после первого взаимодействия
      document.removeEventListener("click", handleGlobalInteraction);
      document.removeEventListener("touchstart", handleGlobalInteraction);
    };

    document.addEventListener("click", handleGlobalInteraction);
    document.addEventListener("touchstart", handleGlobalInteraction);

    return () => {
      document.removeEventListener("click", handleGlobalInteraction);
      document.removeEventListener("touchstart", handleGlobalInteraction);
    };
  }, [isTwitterWebView]);

  useEffect(() => {
    if (!isIntersecting && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;

      // В твиттере не пытаемся автоматически запускать видео
      if (!isTwitterWebView && videoRef.current.readyState >= 3) {
        videoRef.current.play().catch(() => {
          // Игнорируем ошибки при уходе из viewport
        });
      }

      setIsStartVideo(false);
    }
  }, [isIntersecting, isTwitterWebView]);

  useEffect(() => {
    const onSuccessLoadVideo = () => {
      setIsLoading(false);
      setIsShow(true);

      // В твиттере не автозапускаем видео
      if (!isTwitterWebView) {
        videoRef.current?.play().catch(() => {
          // Игнорируем ошибки автоплея
        });
      }

      setIsFinishLoadedVideo(true);
    };

    const onFailLoadVideo = () => {
      setIsError(true);
      setIsLoading(false);
    };

    const setupVideoListeners = () => {
      if (videoRef.current) {
        videoRef.current.addEventListener("error", onFailLoadVideo);
        videoRef.current.addEventListener("canplaythrough", onSuccessLoadVideo);

        // Добавляем обработчик для специфичных ошибок WebView
        videoRef.current.addEventListener("play", () => {
          console.log("Видео начало воспроизведение");
        });

        videoRef.current.addEventListener("pause", () => {
          console.log("Видео приостановлено");
        });
      }
    };

    const removeVideoListeners = () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("canplaythrough", onSuccessLoadVideo);
        videoRef.current.removeEventListener("error", onFailLoadVideo);
      }
    };

    if (isIntersecting && !isFinishLoadedVideo) {
      const videoSource = videoSourceRef.current as HTMLSourceElement;
      const video = videoRef.current as HTMLVideoElement;

      if (video.src !== pathToVideo) {
        setIsLoading(true);
        videoSource.setAttribute("src", pathToVideo);

        // Для твиттера используем другие атрибуты
        if (isTwitterWebView) {
          video.setAttribute("playsinline", "");
          video.setAttribute("webkit-playsinline", "");
          video.removeAttribute("autoplay"); // Убираем автоплей для твиттера
        }

        video.load();
      }

      setupVideoListeners();
    }

    return () => {
      removeVideoListeners();
    };
  }, [isFinishLoadedVideo, isIntersecting, pathToVideo, isTwitterWebView]);

  useEffect(() => {
    if (!isActive) {
      stopVideo();
      setIsStartVideo(false);
    }
  }, [isActive, stopVideo]);

  // Объединяем refs
  const setRefs = useCallback(
    (node: HTMLDivElement) => {
      containerRef.current = node;
      if (typeof targetRef === "function") {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        targetRef(node);
      } else if (targetRef) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        targetRef.current = node;
      }
    },
    [targetRef]
  );

  return (
    <StyledVideoBlock
      ref={setRefs}
      className={clsx(
        {
          error: isError,
          success: isShow,
          started: isStartVideo,
          loading: isLoading,
          twitter: isTwitterWebView,
        },
        className
      )}
      onClick={handleToggleIsStartVideo}
      data-twitter={isTwitterWebView}
    >
      <video
        ref={videoRef}
        muted={!isStartVideo} // Размучиваем только когда видео запущено
        loop
        playsInline
        preload={isTwitterWebView ? "metadata" : "auto"} // Для твиттера меньше прелоад
        disablePictureInPicture
        disableRemotePlayback
        // Автоплей только если не твиттер и пользователь взаимодействовал
        autoPlay={!isTwitterWebView && userInteracted}
      >
        <source type="video/mp4" ref={videoSourceRef} />
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

      {/* Overlay с улучшениями для твиттера */}
      <div
        className={clsx("overlay", {
          "force-show": isTwitterWebView && !isStartVideo,
          hidden: isStartVideo,
        })}
        onClick={(e) => {
          e.stopPropagation(); // Предотвращаем всплытие
          handleToggleIsStartVideo();
        }}
      >
        <button className="playButton" aria-label={isStartVideo ? "Пауза" : "Воспроизвести"}>
          <Icon svg={PlayIcon} size={80} />
        </button>

        {/* Подсказка для твиттера */}
        {isTwitterWebView && !userInteracted && (
          <div className="twitter-hint">Нажмите для воспроизведения</div>
        )}
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
    transition: opacity 0.3s, visibility 0.3s;
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
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    padding: 20px;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 1;
      transform: scale(1.05);
      background: rgba(255, 255, 255, 0.3);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .twitter-hint {
    color: white;
    margin-top: 16px;
    font-size: 14px;
    text-align: center;
    background: rgba(0, 0, 0, 0.7);
    padding: 8px 16px;
    border-radius: 20px;
    animation: pulse 2s infinite;
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

  /* Для твиттера всегда показываем overlay если видео не запущено */
  &.twitter:not(.started) {
    .overlay {
      opacity: 1;
      visibility: visible;
    }
  }
`;
