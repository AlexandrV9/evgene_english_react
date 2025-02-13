import { Button } from "..";

interface BookingButtonProps {
  theme?: "primary" | "secondary";
  style?: CSSProperties;
}

import TelagramWhiteIcon from "@/assets/icons/telegram_white.svg";
import TelagramBlackIcon from "@/assets/icons/telegram.svg";
import { Icon } from "@/ui/Icon";
import { CSSProperties } from "react";

export const BookingButton = ({ theme = "primary", style }: BookingButtonProps) => {
  return (
    <Button
      type={theme}
      endIcon={<Icon svg={theme === "primary" ? TelagramBlackIcon : TelagramWhiteIcon} />}
      style={style}
    >
      записаться на занятие
    </Button>
  );
};
