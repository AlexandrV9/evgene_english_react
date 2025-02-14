import { BookingButton, Flex, Icon } from "@/ui";
import { StyledHeader } from "./styles";

import LogoIcon from "@/assets/icons/logo.svg";
import { NavBar } from "@/ui";
import { HEADER_NAV_LIST } from "./constants";
import { useScrollDirection } from "@/hooks";

export const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <StyledHeader isHidden={scrollDirection === "down"}>
      <Icon svg={LogoIcon} size={150} />

      <Flex gap={40} align="center">
        <NavBar list={HEADER_NAV_LIST} />
        <BookingButton />
      </Flex>
    </StyledHeader>
  );
};
