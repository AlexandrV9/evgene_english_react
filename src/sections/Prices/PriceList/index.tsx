import styled from "styled-components";
import { PRICES_LIST } from "./constants";
import { PriceCard } from "./PriceCard";

export const PriceList = () => {
  return (
    <StyledPriceList>
      {PRICES_LIST.map((item) => (
        <PriceCard key={item.id} {...item} />
      ))}
    </StyledPriceList>
  );
};

const StyledPriceList = styled.div`
  display: flex;
  gap: 2rem;
`;
