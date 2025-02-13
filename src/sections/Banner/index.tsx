import styled from "styled-components";
import { BannerItem } from "./BannerItem";
import { BookingButton, Flex, Icon, Text, Title } from "@/ui";
import { Section } from "../../ui/Section";

interface BannerProps {
  className?: string;
}

import USAIcon from "@/assets/icons/USA.svg";
import { useIntersectionObserver } from "@/hooks";
import { useEffect } from "react";

export const Banner = ({ className }: BannerProps) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    isOnce: true,
    options: { threshold: 0 },
  });

  useEffect(() => {
    if (isIntersecting) {
      const container = document.querySelector("#banner");

      container?.classList?.add("animate");
    }
  }, [isIntersecting]);

  return (
    <StyledBanner id="banner" className={className}>
      <Title as="h1" align="center" color="accent" ref={targetRef}>
        Eugene English
      </Title>

      <Icon svg={USAIcon} className="icon" />

      <Flex vertical align="center">
        <Text custFontSize="7rem" custLineHeight="9.8rem" fontWeight="medium" color="secondary">
          школа английского языка
        </Text>
        <Text fontSize="xl" color="accent" mb={57}>
          твой первый{" "}
          <Text as="span" fontSize="xl" fontFamily="MVCrooker">
            step
          </Text>{" "}
          к улучшению английского
        </Text>

        <ul className="cards_list">
          <BannerItem
            title="300+"
            emoji="🎓"
            description="студентов по всему миру обучались в нашей школе"
          />
          <BannerItem title="7+ лет" emoji="🧑🏻‍🏫" description="опыта преподавания" />
          <BannerItem
            title="сертификат TESOL"
            emoji="⭐️"
            description="у всех преподавателей"
            style={{ gridColumn: "3 / 5" }}
          />
        </ul>

        <BookingButton />
      </Flex>
    </StyledBanner>
  );
};

export const StyledBanner = styled(Section)`
  position: relative;
  overflow: hidden;

  transform: translateY(-20%);
  opacity: 0;
  transition: all 0.5s ease-in-out;

  &.animate {
    transform: translateY(0);
    opacity: 1;
  }

  .icon {
    position: absolute;
    width: 600px;
    top: 80px;
    right: 143px;
  }

  .cards_list {
    display: grid;
    grid-template-columns: repeat(4, 287px);
    grid-template-rows: 283px;
    gap: 24px;
    margin-bottom: 88px;
  }
`;
