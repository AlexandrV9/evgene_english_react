import { Icon } from "@/ui";
import styled from "styled-components";
import { Section, SectionTitle } from "../../ui/Section";
import { BonusesList } from "./BonusesList";

import StartsIcon from "@/assets/icons/stars.svg";
import { SECTION_IDS } from "@/constants";
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
            <SectionTitle align="end" className="title">
              бонусы
            </SectionTitle>
            <Icon svg={StartsIcon} className="icon" />
          </div>

          <BonusesList />
        </div>
      </div>
    </StyledBonuses>
  );
};

export const StyledBonuses = styled(Section)`
  .wrapper {
    transform: translateX(-100%);
    opacity: 0;
    transition: all 0.5s ease-in-out;
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
  }

  .icon {
    top: -9rem;
    right: 0;
    position: absolute;
    z-index: 1;
  }
`;
