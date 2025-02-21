import video_1 from "@/assets/videos/eugene.mp4";
import video_2 from "@/assets/videos/cropped/alex.mp4";
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
          { id: generateUUID(), quantityHours: "one", currentPrice: "45" },
          { id: generateUUID(), quantityHours: "two", oldPrice: "45", newPrice: "40" },
        ],
      },
      {
        id: generateUUID(),
        title: "Занятия для тех, кто всегда busy",
        items: [{ id: generateUUID(), quantityHours: "half_an_hour", currentPrice: "20" }],
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
