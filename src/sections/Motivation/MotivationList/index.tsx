import { VideoBlock } from "@/ui/VideoBlock";
import { MOTIVATION_LIST } from "./constants";
import styled from "styled-components";

export const MotivationList = () => {
  return (
    <StyledMotivationList>
      {MOTIVATION_LIST.map((item) => (
        <li>
          <VideoBlock video={item.video} className="video_block" />
        </li>
      ))}
    </StyledMotivationList>
  );
};

const StyledMotivationList = styled.ul`
  display: flex;
  gap: 2.4rem;
  max-width: 100%;
  overflow: auto;

  li {
    height: 80rem;
    border: 10px solid var(--insted-white-color);
    border-radius: 2.4rem;
  }

  .video_block {
    border-radius:12px;
    height: 100%;
  }
`;
