import { VideoBlock } from "@/ui/VideoBlock";
import { MOTIVATION_LIST } from "./constants";
import styled from "styled-components";
import { SwiperContainer } from "@/ui";

export const MotivationList = () => {
  return (
    <StyledMotivationList>
      <SwiperContainer
        list={MOTIVATION_LIST}
        renderItem={(item) => <VideoBlock {...item} className="video_block" />}
      />
    </StyledMotivationList>
  );
};

const StyledMotivationList = styled.ul`
  display: flex;
  gap: 2.4rem;
  max-width: 100%;

  li {
    height: 80rem;
    border: 10px solid var(--insted-white-color);
    border-radius: 2.4rem;
  }

  .video_block {
    border-radius: 12px;
    height: 70rem;
  }
`;
