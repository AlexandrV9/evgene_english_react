declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

type SvgComponent = FC<React.SVGProps<SVGElement>>;

declare module "*.css";
