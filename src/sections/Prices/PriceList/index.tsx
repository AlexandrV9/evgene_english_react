import styled from "styled-components";
import { PRICES_LIST } from "./constants";
import { PriceCard } from "./PriceCard";
import { SwiperContainer } from "@/ui";
import useWindowSize from "@/hooks/useWindowSize";

export const PriceList = () => {
  const { w } = useWindowSize();

  if (w < 1100) {
    return (
      <StyledPriceList>
        <SwiperContainer list={PRICES_LIST} renderItem={(item) => <PriceCard {...item} />} />
      </StyledPriceList>
    );
  }

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
