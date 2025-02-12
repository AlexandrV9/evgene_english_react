import srcImage_1 from "@/assets/images/memes/meme_1.png";
import srcImage_2 from "@/assets/images/memes/meme_2.png";
import srcImage_3 from "@/assets/images/memes/meme_3.png";
import srcImage_4 from "@/assets/images/memes/meme_4.png";
import srcImage_5 from "@/assets/images/memes/meme_5.png";
import srcImage_6 from "@/assets/images/memes/meme_6.png";
import srcImage_7 from "@/assets/images/memes/meme_7.png";
import { generateUUID } from "@/utils";

export const MEMS_LIST = [
  {
    id: generateUUID(),
    srcImage: srcImage_6,
  },
  {
    id: generateUUID(),
    srcImage: srcImage_1,
  },
  {
    id: generateUUID(),
    srcImage: srcImage_5,
  },
  {
    id: generateUUID(),
    srcImage: srcImage_4,
  },
  {
    id: generateUUID(),
    srcImage: srcImage_3,
  },
  {
    id: generateUUID(),
    srcImage: srcImage_7,
  },
  {
    id: generateUUID(),
    srcImage: srcImage_2,
  },
];
