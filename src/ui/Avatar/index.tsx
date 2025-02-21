import { Image, ImageProps } from "../Image";

interface AvatarProps extends ImageProps {
  size?: string | number;
}

export const Avatar = ({ size, ...otherProps }: AvatarProps) => {
  return <Image width={size} height={size} {...otherProps} />;
};
