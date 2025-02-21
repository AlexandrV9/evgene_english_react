import { Button } from "..";

interface BookingButtonProps {
  theme?: "primary" | "secondary";
  style?: CSSProperties;
  className?: string;
  text?: string;
}

import TelagramWhiteIcon from "@/assets/icons/telegram_white.svg";
import TelagramBlackIcon from "@/assets/icons/telegram.svg";
import { Icon } from "@/ui/Icon";
import { CSSProperties } from "react";

export const BookingButton = ({
  theme = "primary",
  style,
  className,
  text = "записаться на занятие",
}: BookingButtonProps) => {
  const handleClick = () => {
    window.open("https://t.me/esharygine", "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      type={theme}
      endIcon={<Icon size={30} svg={theme === "primary" ? TelagramBlackIcon : TelagramWhiteIcon} />}
      style={style}
      className={className}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};
