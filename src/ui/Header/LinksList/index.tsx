import { LINKS_LIST } from "@/sections/Contacts/LinksList/constants";
import { Icon } from "@/ui/Icon";

import cls from "./LinksList.module.scss";
import { useMediaQuery } from "@/hooks";
import { BREAKPOINTS } from "@/constants";

export const LinksList = () => {
  const breakpoint = useMediaQuery();

  return (
    <ul className={cls.LinksList}>
      {LINKS_LIST.map((item, index) => (
        <li key={index}>
          <a href={item.href} target="_blank">
            <Icon svg={item.NetworkIcon} size={BREAKPOINTS[breakpoint] < 600 ? 28 : 30} color="black" />
          </a>
        </li>
      ))}
    </ul>
  );
};
