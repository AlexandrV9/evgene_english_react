import styled from "styled-components";
import { INavItem } from "./types";
import { NavItem } from "./NavItem";

export interface NavBarProps {
  className?: string;
  list: INavItem[];
}

export const NavBar = ({ className, list }: NavBarProps) => {
  return (
    <StyledNavBar className={className}>
      <ul className="nav_list">
        {list.map(({ id, text, dataTarget }) => (
          <NavItem key={id} text={text} dataTarget={dataTarget} />
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
