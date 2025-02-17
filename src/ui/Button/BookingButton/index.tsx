import { Button } from "..";

interface BookingButtonProps {
  theme?: "primary" | "secondary";
  style?: CSSProperties;
  className?: string;
}

import TelagramWhiteIcon from "@/assets/icons/telegram_white.svg";
import TelagramBlackIcon from "@/assets/icons/telegram.svg";
import { Icon } from "@/ui/Icon";
import { CSSProperties } from "react";

export const BookingButton = ({ theme = "primary", style, className }: BookingButtonProps) => {
  return (
    <Button
      type={theme}
      endIcon={<Icon size={30} svg={theme === "primary" ? TelagramBlackIcon : TelagramWhiteIcon} />}
      style={style}
      className={className}
    >
      записаться на занятие
    </Button>
  );
};
