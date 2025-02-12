import { Icon, Title } from "@/ui";
import styled from "styled-components";
import { BonusesList } from "./BonusesList";
import { Section, SectionTitle } from "../../ui/Section";

import StartsIcon from "@/assets/icons/stars.svg";

interface BonusesProps {
  className?: string;
}

export const Bonuses = ({ className }: BonusesProps) => {
  return (
    <StyledBonuses id="bonuses" className={className}>
      <div className="title_wrapper">
        <SectionTitle align="end" className="title">бонусы</SectionTitle>
        <Icon svg={StartsIcon} className="icon" />
      </div>

      <BonusesList />
    </StyledBonuses>
  );
};

export const StyledBonuses = styled(Section)`
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
