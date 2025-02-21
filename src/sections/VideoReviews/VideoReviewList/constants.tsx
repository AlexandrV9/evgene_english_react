import video_1 from "@/assets/videos/andrew.mp4";
import video_2 from "@/assets/videos/diana.mp4";
import video_3 from "@/assets/videos/alexander.mp4";
import video_4 from "@/assets/videos/natalia.mp4";
import video_5 from "@/assets/videos/compressed/metey-2.mp4";
import videoLika from "@/assets/videos/lika.mp4";
import { generateUUID } from "@/utils";
import { Text } from "@/ui";

export const VIDEO_REVIEWS_LIST = [
  {
    id: generateUUID(),
    userName: "Андрей",
    userNickname: "@andre_lifehack",
    video: video_1,
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
    userName: "Александр",
    userNickname: "@a_tsykunov",
    video: video_3,
  },
  {
    id: generateUUID(),
    userName: "Метей",
    userNickname: "@meteysh",
    video: video_5,
  },
  {
    id: generateUUID(),
    userName: "Наталья",
    userNickname: "@nataliia.wv",
    video: video_4,
  },
  {
    id: generateUUID(),
    userName: "Диана",
    userNickname: "@diaaanochkaa____",
    video: video_2,
  },
];
