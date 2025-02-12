import { generateUUID } from "@/utils";
import { INavItem } from "../../ui/NavBar/types";

export const FOOTER_NAV_LIST: INavItem[] = [
  {
    id: generateUUID(),
    text: "цены",
    dataTarget: "#prices",
  },
  {
    id: generateUUID(),
    text: "мотивация",
    dataTarget: "#motivation",
  },
  {
    id: generateUUID(),
    text: "отзывы",
    dataTarget: "#reviews",
  },
  {
    id: generateUUID(),
    text: "контакты",
    dataTarget: "#contacts",
  },
];
