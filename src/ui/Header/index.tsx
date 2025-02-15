import { BookingButton, Flex, Icon } from "@/ui";
import { StyledHeader } from "./styles";

import LogoIcon from "@/assets/icons/logo.svg";
import { NavBar } from "@/ui";
import { HEADER_NAV_LIST } from "./constants";
import { useMediaQuery, useScrollDirection } from "@/hooks";
import { BurgerMenu } from "../BurgerMenu";

export const Header = () => {
  const scrollDirection = useScrollDirection();
  const breakpoint = useMediaQuery();

  return (
    <StyledHeader $isHidden={scrollDirection === "down"}>
      <Icon svg={LogoIcon} className="iconLogo" />

      <Flex gap={40} align="center">
        {["desktop", "desktopLow"].includes(breakpoint) && <NavBar list={HEADER_NAV_LIST} />}
        {["desktop", "desktopLow", "laptop", "laptopLow"].includes(breakpoint) && <BookingButton />}
        {!["desktop", "desktopLow"].includes(breakpoint) && <BurgerMenu />}
      </Flex>
    </StyledHeader>
  );
};
