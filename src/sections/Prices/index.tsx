import styled from "styled-components";
import { PriceList } from "./PriceList";
import { Section, SectionTitle } from "@/ui";
import { useIntersectionObserver } from "@/hooks";
import { useEffect } from "react";

interface PricesProps {
  className?: string;
}

export const Prices = ({ className }: PricesProps) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    isOnce: true,
    options: { threshold: 0 },
  });

  useEffect(() => {
    if (isIntersecting) {
      const container = document.querySelector("#prices");

      container?.classList?.add("animate");
    }
  }, [isIntersecting]);

  return (
    <StyledPrices id="prices" className={className}>
      <SectionTitle>стоимость занятий</SectionTitle>
      <div className="section__content" ref={targetRef}>
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
`;
