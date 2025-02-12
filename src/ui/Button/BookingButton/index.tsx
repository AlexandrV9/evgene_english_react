import { Button } from "..";

interface BookingButtonProps {
  theme?: "primary" | "secondary";
}

import TelagramWhiteIcon from "@/assets/icons/telegram_white.svg";
import TelagramBlackIcon from "@/assets/icons/telegram.svg";
import { Icon } from "@/ui/Icon";

export const BookingButton = ({ theme = "primary" }: BookingButtonProps) => {
  return (
    <Button type={theme} endIcon={<Icon svg={theme === "primary" ? TelagramBlackIcon : TelagramWhiteIcon} />}>
      записаться на занятие
    </Button>
  );
};
