import styled from "styled-components";
import { VIDEO_REVIEWS_LIST } from "./constants.tsx";
import { VideoReviewCard } from "./VideoReviewCard";

import { BREAKPOINTS } from "@/constants";
import { useMediaQuery } from "@/hooks/index.ts";
import { SwiperContainer } from "@/ui";
import { useMemo } from "react";

export const VideoReviewList = () => {
  const breakpoint = useMediaQuery();

  const list = useMemo(() => {
    if (BREAKPOINTS[breakpoint] <= 1100) {
      const current = VIDEO_REVIEWS_LIST;
      [current[0], current[1]] = [current[1], current[0]];
      return current;
    } else {
      return VIDEO_REVIEWS_LIST;
    }
  }, [breakpoint]);

  return (
    <StyledVideoReviewList>
      <SwiperContainer list={list} renderItem={(item) => <VideoReviewCard {...item} />} />
    </StyledVideoReviewList>
  );
};

export const StyledVideoReviewList = styled.div`
  display: flex;
  gap: 2rem;
`;
