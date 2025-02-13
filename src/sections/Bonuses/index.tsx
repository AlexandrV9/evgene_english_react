import { Icon, Title } from "@/ui";
import styled from "styled-components";
import { BonusesList } from "./BonusesList";
import { Section, SectionTitle } from "../../ui/Section";

import StartsIcon from "@/assets/icons/stars.svg";
import { useIntersectionObserver } from "@/hooks";
import { useEffect } from "react";

interface BonusesProps {
  className?: string;
}

export const Bonuses = ({ className }: BonusesProps) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    isOnce: true,
    options: { threshold: 0.2 },
  });

  useEffect(() => {
    if (isIntersecting) {
      const container = document.querySelector("#bonuses");

      container?.classList?.add("animate");
    }
  }, [isIntersecting]);

  return (
    <StyledBonuses id="bonuses" className={className}>
      <span ref={targetRef} />
      <div className="wrapper">
        <div className="title_wrapper">
          <SectionTitle align="end" className="title">
            бонусы
          </SectionTitle>
          <Icon svg={StartsIcon} className="icon" />
        </div>

        <BonusesList />
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
