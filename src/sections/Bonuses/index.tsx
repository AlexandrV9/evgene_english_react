import { Icon } from "@/ui";
import styled from "styled-components";
import { Section, SectionTitle } from "../../ui/Section";
import { BonusesList } from "./BonusesList";

import StartsIcon from "@/assets/icons/stars.svg";
import { BREAKPOINTS, SECTION_IDS } from "@/constants";
import { useAnimationBlock } from "@/hooks";

interface BonusesProps {
  className?: string;
}

export const Bonuses = ({ className }: BonusesProps) => {
  const { targetRef } = useAnimationBlock(SECTION_IDS.BONUSES);

  return (
    <StyledBonuses id={SECTION_IDS.BONUSES} className={className}>
      <div ref={targetRef}>
        <div className="wrapper">
          <div className="title_wrapper">
            <SectionTitle className="title">бонусы</SectionTitle>
            <Icon svg={StartsIcon} className="icon" />
          </div>

          <BonusesList />
        </div>
      </div>
    </StyledBonuses>
  );
};

export const StyledBonuses = styled(Section)`
  margin-top: 100px;

  .wrapper {
    transform: translateX(-100%);
    opacity: 0;
    transition: all 0.5s ease-in-out;
    margin: 0 100px;
  }

  &.animate {
    .wrapper {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .title_wrapper {
    position: relative;
  }

  .title {
    position: relative;
    z-index: 2;
    margin-bottom: 2rem !important;
    text-align: end !important;
  }

  .icon {
    top: -9rem;
    right: 0;
    position: absolute;
    z-index: 1;
  }

  @media screen and (max-width: ${BREAKPOINTS.desktopLow}px) {
    .icon {
      width: 20rem;
      top: -14rem;
      right: 0;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
    .wrapper {
      margin: 0;
    }

    .title {
      position: relative;
      z-index: 2;
      margin-bottom: 4rem !important;
      text-align: start !important;
    }

    .icon {
      top: -15rem;
      left: 0;
      position: absolute;
      z-index: 1;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    .icon {
      width: 17rem;
      top: -14rem;
      left: 0;
      position: absolute;
      z-index: 1;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.xs}px) {
    .icon {
      width: 14rem;
      top: -14rem;
      left: 0;
      position: absolute;
      z-index: 1;
    }
  }
`;
