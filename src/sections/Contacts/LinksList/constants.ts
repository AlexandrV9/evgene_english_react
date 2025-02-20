import { generateUUID } from "@/utils";

import TelegramIcon from "@/assets/icons/telegram.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import TikTokIcon from "@/assets/icons/tik-tok.svg";

export const LINKS_LIST = [
  {
    id: generateUUID(),
    href: "https://t.me/ftheenglishrules",
    NetworkIcon: TelegramIcon,
    networkName: "Telegram",
  },
  {
    id: generateUUID(),
    href: "https://www.instagram.com/eugene.sharygin?igsh=aGJ2ZWNqYW9kZ29t",
    NetworkIcon: InstagramIcon,
    networkName: "Instagram",
  },
  {
    id: generateUUID(),
    href: "https://www.tiktok.com/@eugene.sharygin?_t=8mnIyS37zlp&_r=1",
    NetworkIcon: TikTokIcon,
    networkName: "TikTok",
  },
];
