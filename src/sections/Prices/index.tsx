import styled from "styled-components";
import { PriceList } from "./PriceList";
import { Title, Section } from "@/ui";

interface PricesProps {
  className?: string;
}

export const Prices = ({ className }: PricesProps) => {
  return (
    <StyledPrices id="prices" className={className}>
      <Title color="accent" as="h3" align="start" className="title" mb={40}>
        стоимость занятий
      </Title>
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
