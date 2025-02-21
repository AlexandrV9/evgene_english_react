import { BookingButton, Flex, Icon, Text, Title } from "@/ui";
import styled from "styled-components";
import { Section } from "../../ui/Section";

interface BannerProps {
  className?: string;
}

import USAIcon from "@/assets/icons/USA.svg";
import { BREAKPOINTS, SECTION_IDS } from "@/constants";
import { useAnimationBlock, useTextSize } from "@/hooks";
import { BannerList } from "./BannerList";

export const Banner = ({ className }: BannerProps) => {
  const { targetRef } = useAnimationBlock(SECTION_IDS.BANNER);

  const fontSize = useTextSize();

  return (
    <StyledBanner id="banner" className={className} sectionContentClassName="content">
      <div ref={targetRef}>
        <Title as="h1" align="center" color="accent" ref={targetRef}>
          Eugene English
        </Title>

        <Icon svg={USAIcon} className="icon" />

        <Flex vertical align="center">
          <Text className="subtitle_1" fontWeight="medium" color="secondary" align="center">
            школа английского языка
          </Text>
          <Text fontSize={fontSize} color="accent" align="center" className="subtitle_2">
            твой первый{" "}
            <Text as="span" fontSize={fontSize} fontFamily="MVCrooker">
              step
            </Text>{" "}
            к улучшению английского
          </Text>

          <BannerList />
          <BookingButton />
        </Flex>
      </div>
    </StyledBanner>
  );
};

export const StyledBanner = styled(Section)`
  position: relative;
  overflow: hidden;

  transform: translateY(-20%);
  opacity: 0;
  transition: all 0.5s ease-in-out;

  margin: 0 !important;

  .content {
    position: relative;
  }


  &.animate {
    transform: translateY(0);
    opacity: 1;
  }

  .icon {
    position: absolute;
    width: 600px;
    top: -15px;
    right: 143px;
  }

  .subtitle_1 {
    font-size: 6rem;
    line-height: 6.8rem;
    margin-bottom: 2rem;
  }

  .subtitle_2 {
    margin-bottom: 5.7rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.laptop}px) {
    .subtitle_2 {
      margin-bottom: 3rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    .subtitle_1 {
      font-size: 4rem;
      line-height: 4.8rem;
    }

    .icon {
      width: 600px;
      top: -10px;
      right: 50%;
      transform: translateX(50%);
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    padding-top: 0;

    .icon {
      width: 400px;
      top: -60px;
      right: 50%;
      transform: translateX(50%);
    }

    .subtitle_1 {
      font-size: 3rem;
      line-height: 3.8rem;
      margin-bottom: 0.8rem;
    }

    .subtitle_2 {
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.xs}px) {
    padding-top: 0;

    .icon {
      width: 400px;
      top: -60px;
      right: 50%;
      transform: translateX(50%);
    }

    .subtitle_1 {
      font-size: 2.4rem;
      line-height: 2.8rem;
      margin-bottom: 0.8rem;
    }

    .subtitle_2 {
      margin-bottom: 1rem;
    }
  }
`;
