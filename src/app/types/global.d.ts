declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  import { FC, SVGProps } from "react";

  const SVG: FC<SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.css";
declare module "*.scss";