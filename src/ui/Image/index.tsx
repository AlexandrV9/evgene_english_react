import { ImgHTMLAttributes } from "react";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Image = ({ ...otherProps }: ImageProps) => {
  return <img {...otherProps} />;
};
