import { CSSProperties } from "react";

interface IconProps {
  svg: SvgComponent;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  size?: CSSProperties["width"];
  className?: string;
}

export const Icon = ({ svg: SvgIcon, width, height, size, className }: IconProps) => {
  return (
    <SvgIcon
      className={className}
      style={{
        width: size ? size : width,
        height: size ? size : height,
        flexShrink: 0,
      }}
    />
  );
};
