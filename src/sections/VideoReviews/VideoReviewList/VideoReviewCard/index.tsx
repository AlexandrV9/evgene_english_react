import { Icon, Text } from "@/ui";
import { VideoBlock } from "@/ui/VideoBlock";
import { ReactNode } from "react";
import styled from "styled-components";

import InstagramIcon from "@/assets/icons/instagram.svg";

interface VideoReviewCardProps {
  id: string;
  icon?: ReactNode;
  userName?: string;
  userNickname?: string;
  video: string;
}

export const VideoReviewCard = ({
  // icon,
  userName,
  userNickname,
  video,
  id,
}: VideoReviewCardProps) => {
  return (
    <StyledVideoReviewCard>
      <div className="header">
        <Icon size={48} svg={InstagramIcon} />
        <Text fontSize="xl" fontWeight="medium">
          {userNickname}
        </Text>
        <Text custFontSize={25} fontWeight="medium" className="user_name">
          {userName}
        </Text>
      </div>
      <div className="content">
        <VideoBlock video={video} id={id} className="video_block" />
      </div>
    </StyledVideoReviewCard>
  );
};

export const StyledVideoReviewCard = styled.div`
  padding: 2.7rem;
  border-radius: 2rem;
  background-color: var(--insted-white-color);

  .header {
    padding: 0 5rem;
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: repeat(2, min-content);
    gap: 0.7rem;
    margin-bottom: 2.7rem;
    align-items: center;
  }

  .user_name {
    grid-column: 2 / 3;
  }

  .content {
    border: 0.5rem solid white;
    border-radius: 50%;
    width: 40rem;
  }

  .video_block {
    width: 40rem;
    height: 40rem;
    overflow: hidden;
  }
`;
