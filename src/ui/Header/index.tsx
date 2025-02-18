import { BookingButton, Icon, Section } from "@/ui";
import { StyledHeaderContent } from "./styles";

import LogoIcon from "@/assets/icons/logo.svg";
import { useScrollDirection } from "@/hooks";
import { NavBar } from "@/ui";
import { BurgerMenu } from "../BurgerMenu";
import { HEADER_NAV_LIST } from "./constants";

import clsx from "clsx";
import cls from "./styles.module.scss";
import useWindowSize from "@/hooks/useWindowSize";

export const Header = () => {
  const scrollDirection = useScrollDirection();

  const { w } = useWindowSize();

  return (
    <Section as="header" className={clsx(cls.header, { [cls.hide]: scrollDirection === "down" })}>
      <StyledHeaderContent>
        <Icon svg={LogoIcon} className="iconLogo" />

        <NavBar list={HEADER_NAV_LIST} className="header_navbar" />
        {w >= 1360 && <BookingButton />}
        {w <= 1360 && <BurgerMenu />}
      </StyledHeaderContent>
    </Section>
  );
};
