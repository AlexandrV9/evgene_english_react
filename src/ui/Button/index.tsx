/* eslint-disable react-refresh/only-export-components */
import { ButtonHTMLAttributes, CSSProperties, FC, MouseEvent, ReactNode, memo } from "react";

import clsx from "clsx";

import cls from "./Button.module.scss";

/**
 * Размер кнопки
 * s: { padding: 8px 12px }
 * base: { padding: 10px 14px }
 * m: { padding: 12px 16px }
 */
type IButtonSize = "small" | "big";

/**
 * Вариант стилизации кнопки
 */
type IButtonType = "primary" | "secondary" | "clear";

/**
 * Форма кнопки
 */

type IButtonShape = "default" | "circle" | "square";

interface ButtonProps {
  id?: string;
  icon?: ReactNode;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  children?: ReactNode;
  type?: IButtonType;
  shape?: IButtonShape;
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  size?: IButtonSize;
  fullWidth?: boolean;
  style?: CSSProperties;
  m?: CSSProperties["margin"];
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({
  id,
  className,
  children,
  startIcon,
  endIcon,
  shape = "default",
  type = "primary",
  loading = false,
  disabled = false,
  size = "big",
  htmlType = "button",
  fullWidth = false,
  m,
  style,
  onClick,
}) => {
  return (
    <button
      id={id}
      type={htmlType}
      className={clsx(
        cls.button,
        {
          [cls.fullWidth]: fullWidth,
          [cls[`size_${size}`]]: true,
          [cls[`type_${type}`]]: true,
          [cls[`shape_${shape}`]]: true,
        },
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
      style={{
        ...style,
        margin: m,
      }}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};

export const MemoButton = memo(Button);

export * from "./BookingButton";
