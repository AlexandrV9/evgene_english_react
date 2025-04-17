import videoAndrew from "@/assets/videos/andrew.mp4";
import videoDiana from "@/assets/videos/diana.mp4";
import videoAlexander from "@/assets/videos/alexander.mp4";
import videoNatalia from "@/assets/videos/natalia.mp4";
import videoMetey from "@/assets/videos/compressed/metey-2.mp4";
import videoLika from "@/assets/videos/lika.mp4";
import videoRaya from "@/assets/videos/raya.mp4";

import { generateUUID } from "@/utils";
import { Text } from "@/ui";

export const VIDEO_REVIEWS_LIST = [
  {
    id: generateUUID(),
    userName: "Андрей",
    userNickname: "@andre_lifehack",
    video: videoAndrew,
  },
  {
    id: generateUUID(),
    className: "accent",
    userName: "Лика",
    userNickname: "@ange_cope",
    video: videoLika,
    addonAfter: (
      <div className="addContent">
        <Text className="addText" color="primary">
          Результат после первого занятия!
        </Text>
      </div>
    ),
  },
  {
    id: generateUUID(),
    userName: "Raya",
    userNickname: "@raisa.popchuk",
    video: videoRaya,
  },
  {
    id: generateUUID(),
    userName: "Александр",
    userNickname: "@a_tsykunov",
    video: videoAlexander,
  },
  {
    id: generateUUID(),
    userName: "Метей",
    userNickname: "@meteysh",
    video: videoMetey,
  },
  {
    id: generateUUID(),
    userName: "Наталья",
    userNickname: "@nataliia.wv",
    video: videoNatalia,
  },
  {
    id: generateUUID(),
    userName: "Диана",
    userNickname: "@diaaanochkaa____",
    video: videoDiana,
  },
];
