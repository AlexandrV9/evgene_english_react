import styled from "styled-components";

export const StyledHeaderContent = styled("div")`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .iconLogo {
    width: 10rem;
    height: 10rem;
  }

  .rightContent {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 1360px) {
    .header_navbar {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    height: 10rem;

    .iconLogo {
      width: 80px;
      height: 80px;
    }
  }

  @media screen and (max-width: 576px) {
    height: 8rem;
  }
`;
