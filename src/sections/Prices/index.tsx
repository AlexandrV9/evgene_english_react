import { SECTION_IDS } from "@/constants";
import { useAnimationBlock } from "@/hooks";
import { Section, SectionTitle } from "@/ui";
import styled from "styled-components";
import { PriceList } from "./PriceList";

interface PricesProps {
  className?: string;
}

export const Prices = ({ className }: PricesProps) => {
  const { targetRef } = useAnimationBlock(SECTION_IDS.PRICES, {
    isOnce: true,
    options: {
      threshold: 0,
    },
  });

  return (
    <StyledPrices id={SECTION_IDS.PRICES} className={className}>
      <SectionTitle align="center">стоимость занятий</SectionTitle>
      <div className="content" ref={targetRef}>
        <PriceList />
      </div>
    </StyledPrices>
  );
};

export const StyledPrices = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translateY(20%);
  opacity: 0;
  transition: all 0.5s ease-in-out;

  &.animate {
    transform: translateY(0);
    opacity: 1;
  }

  .content {
    display: flex;
    justify-content: center;
  }
`;
