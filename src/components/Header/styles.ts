import styled from "styled-components";

export const StyledHeader = styled.header`
  height: var(--header-height);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;

  padding: 0 40px;
  z-index: var(--header-z-index);

  background-color: var(--back-color);

  transition: transform 0.3s ease-in-out;

  .content {
    display: flex;
    align-items: center;

    max-width: 1920px;
    margin: 0 auto;
  }

  .header__right-content {
    margin-left: auto;
  }

  .header__right-content_type_desktop {
    display: flex;
    align-items: center;
  }

  .header__right-content_type_desktop .header__logo {
    margin-right: auto;
  }

  .header__right-content_type_desktop .navbar {
    margin-left: auto;
    margin-right: 32px;
  }

  .header__right-content_type_mobile {
    display: none;
  }

  .header__menu-burger {
    .logo {
      align-self: flex-start;
    }
  }

  .navbar {
  }

  .navbar__list {
    list-style-type: none;
    display: flex;
    gap: 32px;
  }

  .navbar__list-item {
    position: relative;

    display: grid;
    place-items: center;

    padding: 8px;

    font-size: 24px;
    font-weight: 400;
    line-height: 28px;

    color: var(--text-color);

    user-select: none;

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

    cursor: pointer;

    &.mems {
      font-family: "MV-Crooker";
      line-height: 34px;
    }
  }
`;
