import clsx from "clsx";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Loader } from "../Loader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import PlayIcon from "@/assets/icons/play.svg";
import { Icon } from "../Icon";

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

export const VideoBlock = ({ video: pathToVideo = "", className }: VideoBlockProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoSourceRef = useRef<HTMLSourceElement | null>(null);

  const { isIntersecting, targetRef } = useIntersectionObserver({ options });

  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [isStartVideo, setIsStartVideo] = useState(false);

  const stopVideo = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.muted = true;
  };

  const startVideo = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = false;
    videoRef.current.play();
    videoRef.current.currentTime = 0;
  };

  const handleToggleIsStartVideo = () => {
    setIsStartVideo((prev) => {
      const newValue = !prev;

      if (!newValue) {
        stopVideo();
      } else {
        startVideo();
      }

      return newValue;
    });
  };

  useEffect(() => {
    if (!isIntersecting && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;

      if (videoRef.current.readyState >= 3) {
        videoRef.current.play();
      }

      setIsStartVideo(false);
    }
  }, [isIntersecting]);

  useEffect(() => {
    const onSuccessLoadVideo = () => {
      setIsLoading(false);
      setIsShow(true);

      videoRef.current?.play();
    };

    const onFailLoadVide = () => {
      setIsError(true);
      setIsLoading(false);
    };

    const setupVideoListeners = () => {
      videoRef.current?.addEventListener("error", onFailLoadVide);
      videoRef.current?.addEventListener("canplaythrough", onSuccessLoadVideo);
    };

    const removeVideoListeners = () => {
      videoRef.current?.removeEventListener("canplaythrough", onSuccessLoadVideo);
      videoRef.current?.removeEventListener("error", onFailLoadVide);
    };

    if (isIntersecting) {
      const videoSource = videoSourceRef.current as HTMLSourceElement;
      const video = videoRef.current as HTMLVideoElement;

      if (video.src !== pathToVideo) {
        setIsLoading(true);
        videoSource.setAttribute("src", pathToVideo);
        video.load();
      }

      videoSource.setAttribute("src", pathToVideo);
      video.load();

      setupVideoListeners();
    }

    return () => {
      removeVideoListeners();
    };
  }, [isIntersecting, pathToVideo]);

  return (
    <StyledVideoBlock
      ref={targetRef}
      className={clsx(
        { error: isError, success: isShow, loading: isLoading, started: isStartVideo },
        className
      )}
      onClick={handleToggleIsStartVideo}
    >
      <video muted loop autoPlay playsInline preload="auto" ref={videoRef}>
        <source type="video/mp4" ref={videoSourceRef} />
        Your browser does not support the video tag.
      </video>

      <div className="wrapper">
        <Loader size={14} />
      </div>

      <div className="wrapper">
        <p className="error">Ошибка</p>
      </div>

      <div className="overlay ">
        <Icon svg={PlayIcon} size={80} />
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

  position: relative;

  .wrapper {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #6c6c6c;
    place-items: center;
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
    justify-content: center;
    align-items: center;

    transition: opacity 0.3s;
    cursor: pointer;
    user-select: none;

    backface-visibility: hidden;
    will-change: opacity, transform;
    transform: translateZ(0);
  }

  .btn_play {
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }

  &.loading {
    .loader-wrapper {
      display: grid;
    }
  }

  &.started {
    .overlay {
      opacity: 0;
    }
  }

  &.error {
    .overlay {
      display: none;
    }
  }
`;
