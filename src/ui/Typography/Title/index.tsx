import { CSSProperties, forwardRef, ReactNode } from "react";
import clsx from "clsx";

import cls from "./Title.module.scss";
import { fontFamilyMap } from "../constants";

/**
 * Цвет текста
 * primary
 * secondary
 * accent
 */
type ITextColor = "primary" | "secondary" | "accent" | "neutral";

/**
 * Доступные тэги
 */
type ITitleAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleProps {
  className?: string;
  as?: ITitleAs;
  children?: ReactNode;
  color?: ITextColor;
  fontFamily?: "MVCrooker" | "RobotoFlex";
  style?: CSSProperties;
  align?: CSSProperties["textAlign"];
  mt?: CSSProperties["marginTop"];
  mb?: CSSProperties["marginBottom"];
  custLineHeight?: CSSProperties["lineHeight"];
}

export const Title = forwardRef<HTMLElement, TitleProps>(
  (
    {
      className,
      as: Tag = "h3",
      color = "primary",
      children,
      mt = 0,
      mb = 0,
      align = "initial",
      style,
      custLineHeight,
      fontFamily = "RobotoFlex",
    },
    ref
  ) => {
    const localStyle = {
      ...style,
      textAlign: align,
      marginTop: mt,
      marginBottom: mb,
      fontFamily: fontFamilyMap[fontFamily],
      lineHeight: custLineHeight,
    };

    return (
      <Tag
        ref={ref as never}
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
  }
);
