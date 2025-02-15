import { BREAKPOINTS } from "@/constants";
import { useMediaQuery } from "../useMediaQuery";

const getTextSize = (breakpoint: keyof typeof BREAKPOINTS) => {
  switch (breakpoint) {
    case "xxs":
      return "base";
    case "mobile":
      return "base_l";
    case "xs":
      return "base_l";
    case "sm":
      return "base_l";
    case "tablet":
      return "base_l";
    case "tabletUp":
      return "base_l";
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

  console.log(breakpoint)

  return getTextSize(breakpoint);
};
