import { ReactNode } from "react";

export interface INavItem {
  id: string;
  text: ReactNode;
  dataTarget: string;
}
