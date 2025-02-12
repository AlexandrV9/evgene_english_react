import video_1 from "@/assets/videos/andrew.mp4";
import video_2 from "@/assets/videos/diana.mp4";
import video_3 from "@/assets/videos/alexander.mp4";
import video_4 from "@/assets/videos/natalia.mp4";
import video_5 from "@/assets/videos/metey.mp4";
import { generateUUID } from "@/utils";

export const VIDEO_REVIEWS_LIST = [
  {
    id: generateUUID(),
    userName: "Андерей",
    userNickname: "@andre_lifehack",
    video: video_1,
  },
  {
    id: generateUUID(),
    userName: "Диана",
    userNickname: "@diaaanochkaa____",
    video: video_2,
  },
  {
    id: generateUUID(),
    userName: "Александр",
    userNickname: "@a_tsykunov",
    video: video_3,
  },
  {
    id: generateUUID(),
    userName: "Наталья",
    userNickname: "@nataliia.wv",
    video: video_4,
  },
  {
    id: generateUUID(),
    userName: "Метей",
    userNickname: "@meteysh",
    video: video_5,
  },
];
