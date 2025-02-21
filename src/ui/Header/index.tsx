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
import styled from "styled-components";

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

  return (
    <Section
      as="header"
      className={clsx(cls.header, { [cls.show]: scrollDirection === "up" || isTop })}
    >
      <StyledHeaderContent>
        <Icon svg={LogoIcon} className="iconLogo" />

        {w > 1420 && <NavBar list={HEADER_NAV_LIST} className="header_navbar" />}

        <Flex align="center" gap="1rem">
          <LinksList />
          {w > 1420 && <BookingButton />}
          {w <= 1420 && <BurgerMenu />}
        </Flex>
      </StyledHeaderContent>
    </Section>
  );
};
