import { BookingButton, Flex, Icon, Section } from "@/ui";
import { StyledHeaderContent } from "./styles";

import LogoIcon from "@/assets/icons/logo.svg";
import { useScrollDirection } from "@/hooks";
import { NavBar } from "@/ui";
import { BurgerMenu } from "../BurgerMenu";
import { HEADER_NAV_LIST } from "./constants";

import clsx from "clsx";
import cls from "./styles.module.scss";
import useWindowSize from "@/hooks/useWindowSize";
import { useEffect, useState } from "react";
import { LinksList } from "./LinksList";

export const Header = () => {
  const scrollDirection = useScrollDirection();

  const { w } = useWindowSize();

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(scrollDirection === "up" || isTop);

  return (
    <Section
      as="header"
      className={clsx(cls.header, { [cls.show]: scrollDirection === "up" || isTop })}
    >
      <StyledHeaderContent>
        <Icon svg={LogoIcon} className="iconLogo" />

        <NavBar list={HEADER_NAV_LIST} className="header_navbar" />

        <Flex align="center" gap="1rem">
          <LinksList />
          {w > 1360 && <BookingButton />}
          {w <= 1360 && <BurgerMenu />}
        </Flex>
      </StyledHeaderContent>
    </Section>
  );
};
