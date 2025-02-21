import { Icon, Text } from "@/ui";
import { VideoBlock } from "@/ui/VideoBlock";
import { ReactNode } from "react";
import styled from "styled-components";

import InstagramIcon from "@/assets/icons/instagram.svg";
import { BREAKPOINTS } from "@/constants";
import clsx from "clsx";

interface VideoReviewCardProps {
  id: string;
  icon?: ReactNode;
  userName?: string;
  userNickname?: string;
  className?: string;
  video: string;
  videoClassName?: string;
  addonAfter?: ReactNode;
}

export const VideoReviewCard = ({
  userName,
  userNickname,
  video,
  className,
  id,
  videoClassName,
  addonAfter,
}: VideoReviewCardProps) => {
  return (
    <StyledVideoReviewCard className={className}>
      <div className="content">
        <div className="header">
          <Icon size={40} svg={InstagramIcon} className="netwrkIcon" />
          <Text fontSize="l" fontWeight="medium" className="userNickname">
            {userNickname}
          </Text>
          <Text fontWeight="medium" className="userName">
            {userName}
          </Text>
        </div>
        <VideoBlock video={video} id={id} className={clsx("videoReview", videoClassName)} />
        {addonAfter}
      </div>
    </StyledVideoReviewCard>
  );
};

export const StyledVideoReviewCard = styled.div`
  padding-top: 1.5rem;

  &.accent {
    .content {
      border: 4px solid #547793;
    }
  }

  .content {
    position: relative;
    border-radius: 2rem;
    background-color: var(--insted-white-color);
    padding: 2.7rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 4px solid transparent;

    gap: 1rem;
  }

  .addContent {
    top: -17px;
    left: 50%;
    position: absolute;
    background-color: #547793;
    padding: 0 10px;

    transform: translateX(-50%);
    border-radius: 12px;

    .addText {
      white-space: nowrap;
    }
  }

  .header {
    align-self: self-start;
    display: grid;
    grid-template-columns: min-content 1fr;
    gap: 0.7rem;
    align-items: center;
  }

  .userName {
    grid-column: 2 / 3;
  }

  .videoReview {
    border: 0.5rem solid white;
    overflow: hidden;

    max-width: clamp(350px, 24vw, 400px);
    max-height: clamp(350px, 24vw, 400px);
  }

  @media screen and (max-width: ${BREAKPOINTS.laptop}px) {
    .addText {
      font-size: 1.6rem;
    }

    .content {
      padding: 3rem 1.6rem 1.6rem;
    }

    .userNickname {
      font-size: 1.8rem;
      line-height: 2.6rem;
    }

    .userName {
      font-size: 2rem;
      line-height: 2.7rem;
    }

    .videoReview {
      max-width: clamp(220px, 24vw, 350px);
      max-height: clamp(220px, 24vw, 350px);
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow - 2}px) {
    .addText {
      font-size: 2rem;
    }

    .userNickname {
      font-size: 2.8rem;
      line-height: 3.6rem;
    }

    .userName {
      font-size: 2.4rem;
      line-height: 3.2rem;
    }

    .videoReview {
      max-width: clamp(450px, 20vw, 500px);
      max-height: clamp(450px, 20vw, 500px);
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
    .userNickname {
      font-size: 2rem;
      line-height: 2.8rem;
    }

    .userName {
      font-size: 2rem;
      line-height: 2.8rem;
    }

    .videoReview {
      max-width: clamp(300px, 50vw, 450px);
      max-height: clamp(300px, 50vw, 450px);
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    .netwrkIcon {
      width: 3rem !important;
      height: 3rem !important;
    }

    .videoReview {
      max-width: clamp(260px, 58vw, 450px);
      max-height: clamp(260px, 58vw, 450px);
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.xs}px) {
    .addText {
      font-size: 1.6rem;
    }

    .videoReview {
      max-width: clamp(220px, 70vw, 320px);
      max-height: clamp(220px, 70vw, 320px);
    }
  }
`;
