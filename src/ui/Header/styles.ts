import { HEADER_HEIGHT } from "@/constants";
import styled from "styled-components";

export const StyledHeader = styled.header<{ $isHidden: boolean }>`
  height: ${HEADER_HEIGHT}px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 0 40px;
  z-index: var(--header-z-index);

  background-color: var(--back-color);
  transition: transform 0.3s ease-in-out;

  transform: ${({ $isHidden }) => ($isHidden ? "translateY(-100%)" : "translateY(0)")};

  .iconLogo {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 768px) {
    height: 10rem;

    .iconLogo {
      width: 100px;
      height: 100px;
    }
  }

  @media screen and (max-width: 576px) {
    height: 8rem;

    .iconLogo {
      width: 80px;
      height: 80px;
    }
  }
`;
