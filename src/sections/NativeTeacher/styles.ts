import styled from "styled-components";
import { Section } from "../../ui/Section";
import { BREAKPOINTS } from "@/constants";

export const StyledNativeTeacher = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0;

  background-color: var(--accent-color);

  .contenWrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 42rem;
    gap: 2rem;
  }

  .videoBlock {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
  }

  @media screen and (max-width: 1536px) {
    .content {
      padding: 0 48px;
    }
  }

  /* TODO: избавиться от этого */
  @media screen and (max-width: 1376px) {
    .contenWrapper {
      grid-template-rows: 34rem;
      gap: 2rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    padding-top: 5rem;

    .contenWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .videoBlock {
      max-width: 80rem;
      max-height: clamp(36rem, 40vw, 50rem);
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tabletUp}px) {
    .contenWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .videoBlock {
      max-width: auto;
      max-height: 36rem;
    }

    .desc {
      font-size: 2.4rem !important;
      line-height: 3.2rem !important;
      margin-top: 2rem !important;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
    .content {
      padding: 0 24px;
    }

    .contenWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .videoBlock {
      max-height: clamp(30rem, 45vw, 36rem);
    }

    .desc {
      font-size: 2rem !important;
      line-height: 2.8rem !important;
      margin-top: 1.6rem !important;
      margin-bottom: 1.6rem !important;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    padding-top: 3rem;

    .content {
      padding: 0 16px;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    .content {
      padding: 0 12px;
    }

    .videoBlock {
      max-height: 240px;
    }
  }
`;
