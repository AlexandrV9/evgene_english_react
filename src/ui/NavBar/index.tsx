import styled from "styled-components";
import { INavItem } from "./types";
import { NavItem } from "./NavItem";

export interface NavBarProps {
  className?: string;
  list: INavItem[];
}

export const NavBar = ({ className, list }: NavBarProps) => {
  const handleClick = (selector: string) => {
    const section = document.querySelector(selector);

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
    gap: 32px;
  }
`;
