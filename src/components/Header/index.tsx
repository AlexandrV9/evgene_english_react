import { BookingButton, Icon } from "@/ui";
import { StyledHeader } from "./styles";

import LogoIcon from "@/assets/icons/logo.svg";
import { NavBar } from "@/ui";
import { HEADER_NAV_LIST } from "./constants";

export const Header = () => {
  return (
    <StyledHeader id="header">
      <div className="content">
        <Icon svg={LogoIcon} size={150} />

        <div className="header__right-content header__right-content_type_desktop">
          <nav className="navbar header__navbar">
            <NavBar list={HEADER_NAV_LIST} />
          </nav>
          <BookingButton />
        </div>
        <div className="header__right-content header__right-content_type_mobile">
          <button className="btn-open-mobile-menu">
            <img src="../src/assets/icons/menu.svg" />
          </button>
        </div>
      </div>
    </StyledHeader>
  );
};
