import { Button, Text } from "@/ui";

import teacherAvatar_1 from "@/assets/images/avatar-eugene.png";
import teacherAvatar_2 from "@/assets/images/avatar-alex.png";
import teacherAvatar_3 from "@/assets/images/avatar-user.png";
import { generateUUID } from "@/utils";

export const TEACHERS_LIST = [
  {
    id: generateUUID(),
    name: "EUGENE",
    listAchievements: [
      "TESOL certified преподавател",
      "более 7 лет опыта обучения",
      "подтвержденный уровень C1",
    ],
    avatar: teacherAvatar_1,
    otherInfo: (
      <Text fontSize="l">
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
    avatar: teacherAvatar_2,
    otherInfo: (
      <Text fontSize="l">
        Работал в Китае, а так же в различных школах онлайн, но Eugene English сделал ему
        предложение{" "}
        <Text as="span" fontSize="l" fontFamily="MVCrooker" fontWeight="bold">
          {" "}
          he couldn’t refuse
        </Text>{" "}
        и теперь этот крутой преподаватель с нами. 
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
    avatar: teacherAvatar_3,
    otherInfo: (
      <Text fontSize="l">
        Если все это про тебя, присоединяйся к нашей команде преподавателей ⬇️
      </Text>
    ),
    addonAfter: (
      <Button type="secondary" m="4rem 0 0">
        стать преподавателем
      </Button>
    ),
  },
];
