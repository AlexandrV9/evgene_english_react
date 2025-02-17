import styled from "styled-components";
import { INavItem } from "./types";
import { NavItem } from "./NavItem";
import { BREAKPOINTS } from "@/constants";

export interface NavBarProps {
  className?: string;
  list: INavItem[];
  onClick?: () => void;
}

export const NavBar = ({ className, list, onClick }: NavBarProps) => {
  const handleClick = (selector: string) => {
    const section = document.querySelector(selector);

    onClick?.();

    section?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };

  return (
    <StyledNavBar className={className}>
      <ul className="nav_list">
        {list.map(({ id, text, dataTarget }) => (
          <NavItem key={id} text={text} dataTarget={dataTarget} onClick={handleClick} />
        ))}
      </ul>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  .nav_list {
    list-style-type: none;
    display: flex;
    gap: 16px;

    @media screen and (max-width: ${BREAKPOINTS.desktopLow}px) {
      gap: 20px;
    }
  }
`;
