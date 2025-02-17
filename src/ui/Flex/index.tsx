import { CSSProperties, FC, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

import cls from "./Flex.module.scss";

interface FlexProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  as?: "div" | "li" | "ul";
  children?: ReactNode;
  vertical?: boolean;
  gap?: CSSProperties["gap"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  bg?: CSSProperties["backgroundColor"];
  wrap?: CSSProperties["flexWrap"];
}

export const Flex: FC<FlexProps> = ({
  children = null,
  as: Tag = "div",
  vertical = false,
  className,
  gap,
  justify,
  align,
  style,
  bg,
  wrap,
  ...otherProps
}) => {
  const mods = {
    [cls.vertical]: vertical,
  };

  const localStyle: CSSProperties = {
    ...style,
    gap: gap,
    alignItems: align,
    justifyContent: justify,
    backgroundColor: bg,
    flexWrap: wrap,
  };

  return (
    <Tag className={clsx(cls.flex, mods, className)} style={localStyle} {...otherProps}>
      {children}
    </Tag>
  );
};
