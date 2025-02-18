import { BREAKPOINTS, SECTION_IDS } from "@/constants";
import { useAnimationBlock } from "@/hooks";
import { BookingButton, Flex, Icon, Section, SectionTitle } from "@/ui";
import styled from "styled-components";
import { AdvantagesList } from "./AdvantagesList";

import pathNote from "@/assets/images/note.png";

export interface WhyWeProps {
  className?: string;
}

export const WhyWe = ({ className }: WhyWeProps) => {
  const { targetRef } = useAnimationBlock(SECTION_IDS.WHY_WE);

  return (
    <StyledWhyWe id={SECTION_IDS.WHY_WE} className={className}>
      <div ref={targetRef}>
        <div className="wrapper">
          <SectionTitle color="accent">почему мы?</SectionTitle>

          <div className="wrapper_1">
            <Flex vertical align="start" className="wrapper_2">
              <AdvantagesList />
              <BookingButton className="btn" />
            </Flex>

            <img src={pathNote} className="why_we__img" />
          </div>
        </div>
      </div>
    </StyledWhyWe>
  );
};

export const StyledWhyWe = styled(Section)`
  overflow: hidden;

  .why_we__img {
    flex-shrink: 0;
    position: relative;
    top: -40px;
  }

  .wrapper {
    transform: translateX(100%);
    opacity: 0;
    transition: all 0.5s ease-in-out;
    padding: 0 4rem;
  }

  .wrapper_2 {
    gap: 3rem;
  }

  .wrapper_1 {
    display: flex;
  }

  &.animate {
    .wrapper {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.desktop}px) {
    .wrapper_2 {
      gap: 2rem;
    }

    .why_we__img {
      flex-shrink: 0;
      width: clamp(500px, 40vw, 1200px);
      height: clamp(300px, 30vw, 900px);
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    .why_we__img {
      width: 60vw;
      height: auto;
      position: static;
    }

    .wrapper_1 {
      flex-direction: column-reverse;
      align-items: center;
    }

    .btn {
      align-self: center;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
    .why_we__img {
      width: 80vw;
      height: auto;
      position: static;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.xs}px) {
    .wrapper {
      padding: 0 1rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    .wrapper {
      padding: 0 1rem;
    }
  }
`;
