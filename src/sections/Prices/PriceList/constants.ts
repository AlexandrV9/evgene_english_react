import video_1 from "@/assets/videos/eugene.mp4";
import video_2 from "@/assets/videos/alex.mp4";
import { generateUUID } from "@/utils";
import { PriceItemList } from "./types";

export const PRICES_LIST: PriceItemList[] = [
  {
    id: generateUUID(),
    video: video_1,
    userName: "EUGENE",
    list: [
      {
        id: generateUUID(),
        title: "индивидуальные занятия",
        items: [
          { id: generateUUID(), quantityHours: "one", currentPrice: "55" },
          { id: generateUUID(), quantityHours: "two", oldPrice: "55", newPrice: "45" },
        ],
      },
    ],
  },
  {
    id: generateUUID(),
    video: video_2,
    userName: "ALEX",
    list: [
      {
        id: generateUUID(),
        title: "индивидуальные занятия",
        items: [
          { id: generateUUID(), quantityHours: "one", currentPrice: "30" },
          { id: generateUUID(), quantityHours: "two", oldPrice: "30", newPrice: "25" },
        ],
      },
      {
        id: generateUUID(),
        title: "групповые занятия",
        subtitle: "(2 человека в  группе)",
        items: [
          { id: generateUUID(), quantityHours: "one", currentPrice: "19" },
          { id: generateUUID(), quantityHours: "two", oldPrice: "19", newPrice: "15" },
        ],
      },
    ],
  },
];
