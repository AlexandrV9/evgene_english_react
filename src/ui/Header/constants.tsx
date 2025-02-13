import { generateUUID } from "@/utils";
import { INavItem } from "../NavBar/types";
import { Text } from "@/ui";

export const HEADER_NAV_LIST: INavItem[] = [
  {
    id: generateUUID(),
    text: "преподаватели",
    dataTarget: "#teachers",
  },
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
    text: (
      <Text fontFamily="MVCrooker" custFontSize={24} fontWeight="medium">
        memes
      </Text>
    ),
    dataTarget: "#memes",
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
