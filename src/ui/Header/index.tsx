import { BookingButton, Flex, Icon } from "@/ui";
import { StyledHeader } from "./styles";

import LogoIcon from "@/assets/icons/logo.svg";
import { NavBar } from "@/ui";
import { HEADER_NAV_LIST } from "./constants";

export const Header = () => {
  return (
    <StyledHeader id="header">
      <Icon svg={LogoIcon} size={150} />

      <Flex gap={10} align="center">
        <NavBar list={HEADER_NAV_LIST} />
        <BookingButton />
      </Flex>
    </StyledHeader>
  );
};
