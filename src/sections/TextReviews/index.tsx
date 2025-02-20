import { BookingButton, Icon, Section, SectionTitle } from "@/ui";
import styled from "styled-components";

import HeartIcon from "@/assets/icons/heart.svg";
import { TextReviewList } from "./TextReviewList";
import { BREAKPOINTS } from "@/constants";

interface TextReviewsProps {
  className?: string;
}

export const TextReviews = ({ className }: TextReviewsProps) => {
  return (
    <StyledTextReviews id="reviews" className={className}>
      <div className="titleWrapper">
        <SectionTitle>Видео отзывы</SectionTitle>
        <Icon svg={HeartIcon} className="icon" />
      </div>

      <TextReviewList />

      <BookingButton className="btn" />
    </StyledTextReviews>
  );
};

export const StyledTextReviews = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 0 !important;
  }

  .divider {
    max-width: 50vw;
  }

  .sectionContent {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .titleWrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 3.2rem;
    position: relative;
  }

  .title {
    position: relative;
  }

  .icon {
    position: absolute;
    top: -1rem;
    right: -5rem;
  }

  .btn {
    margin-top: 3rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    .icon {
      width: 3rem;
      height: 3rem;
      position: absolute;
      top: -1rem;
      right: -3rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.xs}px) {
    .titleWrapper {
      margin-bottom: 1.6rem;
    }

    .icon {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      top: -1rem;
      right: -2rem;
    }

    .divider {
      max-width: 60vw;
      margin: 2rem 0;
    }
  }
`;
