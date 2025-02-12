import { CSSProperties, FC, ReactNode } from "react";
import clsx from "clsx";

import cls from "./Title.module.scss";
import { fontFamilyMap } from "../constants";

/**
 * Цвет текста
 * primary
 * secondary
 * accent
 */
type ITextColor = "primary" | "secondary" | "accent";

/**
 * Доступные тэги
 */
type ITitleAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  className?: string;
  as?: ITitleAs;
  children?: ReactNode;
  color?: ITextColor;
  fontFamily?: "MVCrooker" | "RobotoFlex";
  style?: CSSProperties;
  align?: CSSProperties["textAlign"];
  mb?: CSSProperties["marginBottom"];
  custLineHeight?: CSSProperties["lineHeight"];
}

export const Title: FC<TitleProps> = ({
  className,
  as: Tag = "h3",
  color = "primary",
  children,
  mb = 0,
  align = "initial",
  style,
  custLineHeight,
  fontFamily = "RobotoFlex",
}) => {
  const localStyle = {
    ...style,
    textAlign: align,
    marginBottom: mb,
    fontFamily: fontFamilyMap[fontFamily],
    lineHeight: custLineHeight,
  };

  return (
    <Tag
      className={clsx(
        cls.title,
        {
          [cls[`color_${color}`]]: true,
        },
        className
      )}
      style={localStyle}
    >
      {children}
    </Tag>
  );
};
