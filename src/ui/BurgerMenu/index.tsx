import MenuIcon from "@/assets/icons/menu.svg";
import { Icon } from "../Icon";
import styled from "styled-components";
import { useState } from "react";

import CloseIcon from "@/assets/icons/close.svg";
import LogoIcon from "@/assets/icons/logo.svg";
import { Flex } from "../Flex";
import { NavBar } from "../NavBar";
import { HEADER_NAV_LIST } from "../Header/constants";
import { BookingButton } from "../Button";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledBurgerMenu>
      <StyledButton onClick={() => setIsOpen(true)}>
        <Icon svg={MenuIcon} />
      </StyledButton>

      <StyledContent $isOpen={isOpen}>
        <Icon svg={LogoIcon} size={100} className="logo_icon" />
        <StyledButton onClick={() => setIsOpen(false)} className="btn_close">
          <Icon svg={CloseIcon} />
        </StyledButton>
        <NavBar list={HEADER_NAV_LIST} onClick={() => setIsOpen(false)} />
        <BookingButton className="btn_booking" />
      </StyledContent>
    </StyledBurgerMenu>
  );
};

const StyledButton = styled.button`
  background-color: var(--white-color);
  border-radius: 10px;
  width: 50px;
  height: 50px;

  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const StyledBurgerMenu = styled.div``;

const StyledContent = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--back-color);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  padding: 16px;

  transition: all 0.2s;

  transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-100%)")};

  .logo_icon {
    position: absolute;
    left: 4rem;
    top: 1rem;
    z-index: 10;
  }

  .btn_close {
    position: absolute;
    right: 2rem;
    top: 3rem;
    z-index: 10;
  }

  .nav_list {
    display: flex;
    flex-direction: column;
  }

  .btn_booking {
    margin-top: 100px;
  }
`;
