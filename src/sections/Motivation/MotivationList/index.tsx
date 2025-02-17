import { VideoBlock } from "@/ui/VideoBlock";
import { MOTIVATION_LIST } from "./constants";
import styled from "styled-components";
import { SwiperContainer } from "@/ui";
import { BREAKPOINTS } from "@/constants";

export const MotivationList = () => {
  return (
    <StyledMotivationList>
      <SwiperContainer
        list={MOTIVATION_LIST}
        renderItem={(item) => <VideoBlock {...item} className="videoBlock" />}
      />
    </StyledMotivationList>
  );
};

const StyledMotivationList = styled.div`
  display: flex;
  gap: 2.4rem;
  max-width: 100%;

  .swiperWrapper {
    margin: 0 auto;
  }

  li {
    height: 80rem;
    border: 10px solid var(--insted-white-color);
    border-radius: 2.4rem;
  }

  .videoBlock {
    width: 100%;
    border-radius: 12px;
    height: 80rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.desktopLow}px) {
    .videoBlock {
      height: clamp(60rem, 50vw, 80rem);
    }
  }
`;
