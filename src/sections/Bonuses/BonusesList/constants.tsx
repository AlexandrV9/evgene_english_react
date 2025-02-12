import { Text } from "@/ui";

import icon_1 from "@/assets/icons/user-lock.svg";
import icon_2 from "@/assets/icons/features.svg";
import icon_3 from "@/assets/icons/comments-question.svg";
import icon_4 from "@/assets/icons/high-five-celebration-yes.svg";
import { generateUUID } from "@/utils";

export const BONUSES_LIST = [
  {
    id: generateUUID(),
    icon: icon_1,
    className: "block_1",
    text: (
      <Text color="primary" fontSize="xl" fontWeight="semiBold">
        доступ в{" "}
        <Text as="span" custFontSize="inherit" fontWeight="semiBold">
          ЧАСТНЫЙ КАНАЛ
        </Text>{" "}
        c актуальными идиомами из фильмов/сериалов 🍿🎬
      </Text>
    ),
  },
  {
    id: generateUUID(),
    icon: icon_2,
    className: "block_2",
    text: (
      <Text color="primary" fontSize="xl" fontWeight="semiBold">
        постоянная обратная связь от преподавателя
      </Text>
    ),
  },
  {
    id: generateUUID(),
    icon: icon_3,
    className: "block_3",
    text: (
      <Text color="secondary" fontSize="xl" fontWeight="semiBold">
        любая непонятная тема становится понятной
      </Text>
    ),
  },
  {
    id: generateUUID(),
    icon: icon_4,
    className: "block_4",
    text: (
      <Text color="secondary" fontSize="xl" fontWeight="semiBold">
        <Text color="accent" as="span" custFontSize="inherit" fontWeight="semiBold">
          неформальный психолог
        </Text>
        , который c радостью поможет вам разобраться в ваших проблемах + мотивировать вас на
        изучение английского😄
      </Text>
    ),
  },
];
