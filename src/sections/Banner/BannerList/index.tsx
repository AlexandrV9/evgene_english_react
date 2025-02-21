import styled from "styled-components";
import { BannerItem } from "./BannerItem";
import { BREAKPOINTS } from "@/constants";

export const BannerList = () => {
  return (
    <StyledBannerList>
      <BannerItem
        title="300+"
        emoji="🎓"
        description="студентов по всему миру обучались в нашей школе"
      />
      <BannerItem title="7+ лет" emoji="🧑🏻‍🏫" description="опыта преподавания" />
      <BannerItem title="сертификат TESOL" emoji="⭐️" description="у всех преподавателей" />
    </StyledBannerList>
  );
};

const StyledBannerList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 287px);
  grid-template-rows: 283px;
  grid-auto-rows: 283px;
  gap: 24px;
  margin-bottom: 88px;

  li:last-of-type {
    grid-column: 3 / 5;
  }

  @media screen and (max-width: ${BREAKPOINTS.laptop}px) {
    grid-template-columns: repeat(2, 487px);
    grid-template-rows: 203px;
    grid-auto-rows: 203px;

    margin-bottom: 2.2rem;

    li:last-of-type {
      grid-column: 1 / 3;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    grid-template-columns: repeat(2, minmax(min-content, 40rem));
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    gap: 12px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 180px;
    grid-auto-rows: 180px;
  }

  @media screen and (max-width: ${BREAKPOINTS.xs}px) {
    gap: 8px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 160px;
    grid-auto-rows: 120px;
  }
`;
