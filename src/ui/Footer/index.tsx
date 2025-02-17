import styled from "styled-components";
import { NavBar } from "../NavBar";
import { FOOTER_NAV_LIST } from "./constants";
import { Icon, Section, Text } from "..";

import LogoIcon from "@/assets/icons/logo.svg";

import cls from "./styles.module.scss";
import { BREAKPOINTS } from "@/constants";

export const Footer = () => {
  return (
    <Section as="footer" id="footer" className={cls.footer}>
      <StyledFooterContent>
        <div className="leftContainer">
          <Icon svg={LogoIcon} size={100} className="logoIcon" />
          <Text fontSize="m" color="accent" className="text">
            © All Rights Reserved
          </Text>
        </div>
        <NavBar list={FOOTER_NAV_LIST} className="navbar" />
      </StyledFooterContent>
    </Section>
  );
};

const StyledFooterContent = styled.footer`
  margin: 0 auto;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .leftContainer {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
    .logoIcon {
      width: 8rem !important;
      height: 8rem !important;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    .text {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -4rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    flex-direction: column-reverse;
    padding-top: 1rem;

    .text {
      position: static;
      transform: none;
    }

    .navbar ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0 1rem;
      justify-content: center;
    }
  }
`;
