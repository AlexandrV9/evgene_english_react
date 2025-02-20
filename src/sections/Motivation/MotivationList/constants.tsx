import { generateUUID } from "@/utils";

import video_1 from "@/assets/videos/motivation_1.mp4";
import video_2 from "@/assets/videos/motivation_2.mp4";
import video_3 from "@/assets/videos/motivation_3.mp4";
import video_4 from "@/assets/videos/motivation_4.mp4";

export const MOTIVATION_LIST = [
  {
    id: generateUUID(),
    video: video_1,
    videoClassName: "video_motivation_1",
  },
  {
    id: generateUUID(),
    video: video_2,
    videoClassName: "video_motivation_2",
  },
  {
    id: generateUUID(),
    video: video_3,
    videoClassName: "video_motivation_3",
  },
  {
    id: generateUUID(),
    video: video_4,
    videoClassName: "video_motivation_4",
  },
];
