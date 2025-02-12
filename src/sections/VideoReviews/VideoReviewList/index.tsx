import styled from "styled-components";
import { VIDEO_REVIEWS_LIST } from "./constants";
import { VideoReviewCard } from "./VideoReviewCard";

export const VideoReviewList = () => {
  return (
    <StyledVideoReviewList>
      {VIDEO_REVIEWS_LIST.map((item) => (
        <VideoReviewCard  key={item.id} {...item} />
      ))}
    </StyledVideoReviewList>
  );
};

export const StyledVideoReviewList = styled.div`
  display: flex;
  gap: 2rem;
`;
