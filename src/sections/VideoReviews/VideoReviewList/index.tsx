import styled from "styled-components";
import { VIDEO_REVIEWS_LIST } from "./constants";
import { VideoReviewCard } from "./VideoReviewCard";

import { SwiperContainer } from "@/ui";

export const VideoReviewList = () => {
  return (
    <StyledVideoReviewList>
      <SwiperContainer
        list={VIDEO_REVIEWS_LIST}
        renderItem={(item) => <VideoReviewCard {...item} />}
      />
    </StyledVideoReviewList>
  );
};

export const StyledVideoReviewList = styled.div`
  display: flex;
  gap: 2rem;

`;
