import { useCallback, useEffect, useRef, useState } from "react";

interface UseIntersectionObserverProps {
  isOnce?: boolean;
  options?: IntersectionObserverInit;
  cb?: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;
}

export const useIntersectionObserver = ({ cb, isOnce, options }: UseIntersectionObserverProps) => {
  const targetRef = useRef(null);

  const [isIntersecting, setIsIntersecting] = useState(false);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const [entry] = entries;

      setIsIntersecting(entry.isIntersecting);
      
      if (entry.isIntersecting && targetRef.current && isOnce) {
        observer.unobserve(targetRef.current);
      }

      cb?.(entries, observer);
    },
    [cb, isOnce]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [callback, options]);

  return {
    targetRef,
    isIntersecting,
  };
};
