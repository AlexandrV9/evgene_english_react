import { Text } from "@/ui";

import iconPlus_1 from "@/assets/icons/plus_1.svg";
import iconPlus_2 from "@/assets/icons/plus_2.svg";
import iconPlus_3 from "@/assets/icons/plus_3.svg";
import iconPlus_4 from "@/assets/icons/plus_4.svg";
import iconPlus_5 from "@/assets/icons/plus_5.svg";
import { generateUUID } from "@/utils";

export const ADVANTAGES_LIST = [
  {
    id: generateUUID(),
    icon: iconPlus_1,
    text: (
      <Text fontSize="xl" fontWeight="bold">
        крутые{" "}
        <Text as="span" fontFamily="MVCrooker" custFontSize="inherit" fontWeight="bold">
          teachers
        </Text>
      </Text>
    ),
  },
  {
    id: generateUUID(),
    icon: iconPlus_2,
    text: (
      <Text fontSize="xl" fontWeight="bold">
        <Text as="span" fontFamily="MVCrooker" custFontSize="inherit" fontWeight="bold">
          engaging
        </Text>{" "}
        материалы
      </Text>
    ),
  },
  {
    id: generateUUID(),
    icon: iconPlus_3,
    text: (
      <Text fontSize="xl" fontWeight="bold">
        обучение на мемах
      </Text>
    ),
  },
  {
    id: generateUUID(),
    icon: iconPlus_4,
    text: (
      <Text fontSize="xl" fontWeight="bold">
        наша школа пронизана{" "}
        <Text as="span" fontFamily="MVCrooker" custFontSize="inherit" fontWeight="bold">
          energy
        </Text>{" "}
        и{" "}
        <Text as="span" fontFamily="MVCrooker" custFontSize="inherit" fontWeight="bold">
          motivation
        </Text>
        , которые помогут вам не{" "}
        <Text as="span" fontFamily="MVCrooker" custFontSize="inherit" fontWeight="bold">
          give up and do it again and again
        </Text>
      </Text>
    ),
  },
  {
    id: generateUUID(),
    icon: iconPlus_5,
    text: (
      <Text fontSize="xl" fontWeight="bold">
        мы не просто учим, мы прививаем вам{" "}
        <Text as="span" fontFamily="MVCrooker" custFontSize="inherit" fontWeight="bold">
          love
        </Text>{" "}
        к английскому
      </Text>
    ),
  },
];
