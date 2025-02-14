import { useEffect } from "react";
import { useIntersectionObserver } from "../useIntersectionObserver";

export const useAnimationBlock = (
  sectionSelector: string,
  options = {
    isOnce: true,
    options: { threshold: 0.2 },
  }
) => {
  const { targetRef, isIntersecting } = useIntersectionObserver(options);

  useEffect(() => {
    if (isIntersecting) {
      const container = document.querySelector(`#${sectionSelector}`);

      container?.classList?.add("animate");
    }
  }, [isIntersecting, sectionSelector]);

  return {
    targetRef,
  };
};
