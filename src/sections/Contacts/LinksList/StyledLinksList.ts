import { BREAKPOINTS } from "@/constants";
import styled from "styled-components";

export const StyledListLinks = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const ItemList = styled.li`
  background-color: var(--secondary-color);
  border-radius: 16px;
  transition: all 0.2s;
  flex-basis: 180px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  a {
    padding: 1.8rem 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    text-decoration: none;
    cursor: pointer;
  }

  @media screen and (max-width: ${BREAKPOINTS.laptop}px) {
    .networkName {
      font-size: 2rem;
      line-height: 2.8rem;
    }

    .networkIcon {
      width: 3.2rem;
      height: 3.2rem;
    }

    a {
      padding: 1.2rem 2rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.xs}px) {
    flex-basis: 260px;
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;

    a {
      padding: 0.9rem 2rem;
    }
  }
`;
