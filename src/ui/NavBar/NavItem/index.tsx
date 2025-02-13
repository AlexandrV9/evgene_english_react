import { ReactNode } from "react";
import styled from "styled-components";

interface NavItemProps {
  dataTarget: string;
  text: ReactNode;
  onClick?: (selector: string) => void;
}

export const NavItem = ({ dataTarget, text, onClick }: NavItemProps) => {
  return (
    <StyledNavItem data-target={dataTarget} onClick={() => onClick?.(dataTarget)}>
      {text}
    </StyledNavItem>
  );
};

const StyledNavItem = styled.li`
  position: relative;

  display: grid;
  place-items: center;

  padding: 8px;

  font-size: 24px;
  font-weight: 400;
  line-height: 28px;

  color: var(--text-color);

  user-select: none;

  cursor: pointer;

  &:after {
    position: absolute;
    content: "";
    width: 0;
    left: 0;
    bottom: 5px;
    height: 3px;
    background-color: var(--accent-color);
    transition: width 0.2s;
  }

  &:hover {
    color: var(--accent-color);
    &:after {
      width: 100%;
    }
  }

  &:active {
    color: var(--text-color);
  }
`;
