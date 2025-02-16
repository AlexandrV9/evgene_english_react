import { BREAKPOINTS } from "@/constants";
import { useEffect, useState } from "react";

type BreakpointKey = keyof typeof BREAKPOINTS;

export const useMediaQuery = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<BreakpointKey>("desktop");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.screen.width;
      let bestMatch: BreakpointKey = "desktop";

      for (const key in BREAKPOINTS) {
        const bp = key as BreakpointKey;

        if (width >= BREAKPOINTS[bp]) {
          bestMatch = bp;
        }
      }

      setCurrentBreakpoint(bestMatch);
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return currentBreakpoint;
};
