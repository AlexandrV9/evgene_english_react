import styled from "styled-components";
import { PriceList } from "./PriceList";
import { Section, SectionTitle } from "@/ui";

interface PricesProps {
  className?: string;
}

export const Prices = ({ className }: PricesProps) => {
  return (
    <StyledPrices id="prices" className={className}>
      <SectionTitle>стоимость занятий</SectionTitle>
      <div className="section__content">
        <PriceList />
      </div>
    </StyledPrices>
  );
};

export const StyledPrices = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
