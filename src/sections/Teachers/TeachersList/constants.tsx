import { Button, Text } from "@/ui";

import teacherAvatar_1 from "@/assets/images/avatar-eugene-2.png";
import teacherAvatar_2 from "@/assets/images/avatar-alex-2.png";
import { generateUUID } from "@/utils";

const handleClick = () => {
  window.open("https://t.me/esharygine", "_blank", "noopener,noreferrer");
};

export const TEACHERS_LIST = [
  {
    id: generateUUID(),
    name: "EUGENE",
    listAchievements: [
      "TESOL certified преподаватель",
      "более 7 лет опыта обучения",
      "подтвержденный уровень C1",
    ],
    //
    avatar: <img src={teacherAvatar_1} className="avatar" />,
    otherInfo: (
      <Text className="description_text">
        Работал физически в Пекине, Китай, после этого был онлайн-преподавателем английского языка в
        одной из самых крупных школ Китая. <br />
        <br /> С 2021 работает на себя и является CEO Eugene English. <br />
        На данный момент проживает в Торонто, Канада.
      </Text>
    ),
  },
  {
    id: generateUUID(),
    name: "ALEX",
    listAchievements: [
      "TESOL/TEFL certified преподаватель",
      "более 6 лет опыта обучения",
      "подтвержденный уровень C1",
      "занимается со взрослыми и подростками",
    ],
    avatar: <img src={teacherAvatar_2} className="avatar" />,
    otherInfo: (
      <Text className="description_text">
        Работал в Китае, а так же в различных школах онлайн, но Eugene English сделал ему
        предложение he couldn’t refuse и теперь этот крутой преподаватель с нами. 
      </Text>
    ),
  },
  {
    id: generateUUID(),
    name: "YOU",
    listAchievements: [
      "TESOL certified",
      "более 3-х лет опыта обучения",
      "уровень английского C1",
      "чувство юмора",
    ],
    avatar: (
      <Text as="span" className="emoji" align="center">
        🧑‍🏫
      </Text>
    ),
    otherInfo: (
      <Text className="description_text">
        Если все это про тебя, присоединяйся к нашей команде преподавателей ⬇️
      </Text>
    ),
    addonAfter: (
      <Button type="secondary" m="4rem 0 0" onClick={handleClick}>
        стать преподавателем
      </Button>
    ),
  },
];
