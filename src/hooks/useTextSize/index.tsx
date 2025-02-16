import { BREAKPOINTS } from "@/constants";
import { useMediaQuery } from "../useMediaQuery";

const getTextSize = (breakpoint: keyof typeof BREAKPOINTS) => {
  switch (breakpoint) {
    case "xxs":
      return "xs";
    case "mobile":
      return "s";
    case "xs":
      return "m";
    case "sm":
      return "m";
    case "tablet":
      return "m";
    case "tabletUp":
      return "l";
    case "laptopLow":
      return "l";
    case "laptop":
      return "xl";
    case "desktopLow":
      return "xl";
    default:
      return "xl";
  }
};

export const useTextSize = () => {
  const breakpoint = useMediaQuery();

  return getTextSize(breakpoint);
};
