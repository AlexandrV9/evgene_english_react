import styled from "styled-components";
import { TEXT_REVIEWS_LIST } from "./constants";
import { TextReviewCard } from "./TextReviewCard";
import { SwiperContainer } from "@/ui";

export const TextReviewList = () => {
  return (
    <StyledTextReviewList>
      <SwiperContainer
        list={TEXT_REVIEWS_LIST}
        renderItem={(item) => <TextReviewCard {...item} />}
      />
    </StyledTextReviewList>
  );
};

export const StyledTextReviewList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`;
