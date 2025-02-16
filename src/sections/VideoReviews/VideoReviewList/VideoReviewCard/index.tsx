import { Icon, Text } from "@/ui";
import { VideoBlock } from "@/ui/VideoBlock";
import { ReactNode } from "react";
import styled from "styled-components";

import InstagramIcon from "@/assets/icons/instagram.svg";
import { BREAKPOINTS } from "@/constants";

interface VideoReviewCardProps {
  id: string;
  icon?: ReactNode;
  userName?: string;
  userNickname?: string;
  video: string;
}

export const VideoReviewCard = ({ userName, userNickname, video, id }: VideoReviewCardProps) => {
  return (
    <StyledVideoReviewCard>
      <div className="header">
        <Icon size={48} svg={InstagramIcon} />
        <Text className="user_nickname" fontWeight="medium">
          {userNickname}
        </Text>
        <Text fontWeight="medium" className="user_name">
          {userName}
        </Text>
      </div>
      <VideoBlock video={video} id={id} className="video_block" />
    </StyledVideoReviewCard>
  );
};

export const StyledVideoReviewCard = styled.div`
  padding: 2.7rem;
  border-radius: 2rem;
  background-color: var(--insted-white-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: repeat(2, min-content);
    gap: 0.7rem;
    margin-bottom: 2.7rem;
    align-items: center;
  }

  .user_nickname {
    font-size: 2.6rem;
  }

  .user_name {
    font-size: 2rem;
    grid-column: 2 / 3;
  }

  .video_block {
    border: 0.5rem solid white;
    overflow: hidden;
  }

  @media screen and (max-width: ${BREAKPOINTS.desktop}px) {
    .video_block {
      max-width: 400px;
      max-height: 400px;
    }
  }

  @media screen and (max-width: 1500px) {
    .video_block {
      max-width: 350px;
      max-height: 350px;
    }
  }

  @media screen and (max-width: 1300px) {
    .video_block {
      max-width: 300px;
      max-height: 300px;
    }
  }

  @media screen and (max-width: 1200px) {
    .video_block {
      max-width: 280px;
      max-height: 280px;
    }
  }

  @media screen and (max-width: 1100px) {
    .video_block {
      max-width: 400px;
      max-height: 400px;
    }
  }

  /* @media screen and (max-width: 665px) {
    .video_block {
      max-width: 100%;
      max-height: 100%;
    }
  } */
`;
