import { CSSProperties, FC, ReactNode } from "react";

import clsx from "clsx";

import cls from "./Text.module.scss";
import { fontFamilyMap } from "../constants";

/**
 * Размер шрифта
 * xs - 10px
 * s - 12px
 * m - 14px
 * base - 16px
 * l - 28px
 * xl - 32px
 */
type IFontSize = "xs" | "s" | "base" | "m" | "l" | "xl";

/**
 * Начертание шрифта
 * regular - 400
 * medium - 500
 * bold - 700
 */
type IFontWeight = "light" | "regular" | "medium" | "semiBold" | "bold" | "extraBold" | "black";

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
type ITextAs = "p" | "span" | "li";

interface TextProps {
  className?: string;
  as?: ITextAs;
  children?: ReactNode;
  fontSize?: IFontSize;
  fontFamily?: "MVCrooker" | "RobotoFlex";
  fontWeight?: IFontWeight;
  color?: ITextColor;
  style?: CSSProperties;
  custFontSize?: CSSProperties["fontSize"];
  custLineHeight?: CSSProperties["lineHeight"];
  align?: CSSProperties["textAlign"];
  mt?: CSSProperties["marginBottom"];
  mb?: CSSProperties["marginBottom"];
}

export const Text: FC<TextProps> = ({
  as: Tag = "p",
  fontSize = "base",
  fontWeight = "regular",
  fontFamily = "RobotoFlex",
  color = "inherit",
  children,
  mt = 0,
  mb = 0,
  align = "initial",
  style,
  custFontSize,
  custLineHeight,
  className,
}) => {
  const localStyle: CSSProperties = {
    ...style,
    textAlign: align,
    marginTop: mt,
    marginBottom: mb,
    fontFamily: fontFamilyMap[fontFamily],
    fontSize: custFontSize,
    lineHeight: custLineHeight,
  };

  return (
    <Tag
      className={clsx(
        cls.text,
        {
          [cls[`fontSize_${fontSize}`]]: true,
          [cls[`fontWeight_${fontWeight}`]]: true,
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
