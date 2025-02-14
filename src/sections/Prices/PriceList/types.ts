import { ReactNode } from "react";

export interface PriceItem {
  id: string;
  title: ReactNode;
  subtitle?: string;
  items: {
    id: string;
    quantityHours: "one" | "two" | "half_an_hour";
    currentPrice?: string;
    oldPrice?: string;
    newPrice?: string;
  }[];
}

export interface PriceItemList {
  id: string;
  userName: string;
  video: string;
  list: PriceItem[];
}
