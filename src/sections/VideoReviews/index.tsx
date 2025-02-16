import { Button, Icon, Section, SectionTitle } from "@/ui";
import styled from "styled-components";
import { VideoReviewList } from "./VideoReviewList";

import HeartIcon from "@/assets/icons/heart.svg";
import { TextReviewList } from "./TextReviewList";

interface VideoReviewsProps {
  className?: string;
}

export const VideoReviews = ({ className }: VideoReviewsProps) => {
  return (
    <StyledVideoReviews id="reviews" className={className}>
      <div className="title_wrapper">
        <SectionTitle>отзывы</SectionTitle>
        <Icon svg={HeartIcon} className="icon" />
      </div>

      <div className="container">
        <VideoReviewList />
      </div>

      <div className="container">
        <TextReviewList />
      </div>
``
      <Button>
        <span>записаться на занятие</span>
        <img src="../src/assets/icons/telegram.svg" />
      </Button>
    </StyledVideoReviews>
  );
};

export const StyledVideoReviews = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title_wrapper {
    display: flex;
    justify-content: center;
    top: 0;
    right: 0;
    margin-bottom: 3.2rem;
    position: relative;
  }

  .container {
    max-width: 100%;
    margin-bottom: 6rem;
  }

  .title {
    position: relative;
  }

  .icon {
    position: absolute;
    top: -1rem;
    right: -5rem;
  }

  .swiper-wrapper {
    max-width: 1420px;
  }
`;
