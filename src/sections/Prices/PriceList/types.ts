export interface PriceItem {
  id: string;
  title: string;
  subtitle?: string;
  items: {
    id: string;
    quantityHours: "one" | "two";
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
