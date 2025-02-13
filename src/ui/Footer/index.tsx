import styled from "styled-components";
import { NavBar } from "../NavBar";
import { FOOTER_NAV_LIST } from "./constants";
import { Text } from "..";

export const Footer = () => {
  return (
    <StyledeFooter id="footer">
      <div className="footer__content">
        <div className="footer__left-container">
          <img src="../src/assets/icons/logo.svg" className="footer__logo logo" />
          <Text fontSize="l" color="accent">
            © All Rights Reserved
          </Text>
        </div>
        <NavBar list={FOOTER_NAV_LIST} />
      </div>
    </StyledeFooter>
  );
};

const StyledeFooter = styled.footer`
  height: var(---footer-height);

  background-color: var(--insted-white-color);
  padding: 48px;

  .footer__content {
    margin: 0 auto;
    max-width: 1530px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer__left-container {
    display: flex;
    align-items: center;
  }

  .footer__logo {
    margin-right: 24px;
    &:hover {
      cursor: pointer;
    }
  }

  .footer__text {
    margin-right: auto;

    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    color: var(--accent-color);
  }
`;
