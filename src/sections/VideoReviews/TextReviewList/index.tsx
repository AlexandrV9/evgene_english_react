import styled from "styled-components";
import { TEXT_REVIEWS_LIST } from "./constants";
import { TextReviewCard } from "./TextReviewCard";

export const TextReviewList = () => {
  return (
    <StyledTextReviewList>
      {TEXT_REVIEWS_LIST.map((item) => (
        <TextReviewCard key={item.id} {...item} />
      ))}
    </StyledTextReviewList>
  );
};

export const StyledTextReviewList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`;
