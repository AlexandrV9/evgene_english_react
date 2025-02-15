import { BREAKPOINTS } from "@/constants";
import { Flex, Text } from "@/ui";
import { CSSProperties } from "react";
import styled from "styled-components";

interface BannerItemProps {
  className?: string;
  title?: string;
  emoji?: string;
  description?: string;
  style?: CSSProperties;
}

export const BannerItem = ({ title, emoji, description, className, style }: BannerItemProps) => {
  return (
    <StyledBannerItem className={className} style={style}>
      <Flex gap={12}>
        <Text className="title" color="primary" fontWeight="bold">
          {title}
        </Text>
        <Text className="title" as="span">
          {emoji}
        </Text>
      </Flex>

      <Text color="primary" mt="auto" className="description">
        {description}
      </Text>
    </StyledBannerItem>
  );
};

export const StyledBannerItem = styled.li`
  padding: 2.4rem 2rem;
  background-color: #547793;
  border-radius: 24px;
  display: flex;
  flex-direction: column;

  /* min-width: 180px; */

  .description {
    font-size: 3rem;
    line-height: 3.6rem;
  }

  .title {
    font-size: 5rem;
    line-height: 5.6rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    .title {
      font-size: 5rem;
      line-height: 5.6rem;
    }

    .description {
      font-size: 2.4rem;
      line-height: 2.8rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    .title {
      font-size: 4rem;
      line-height: 4.6rem;
    }

    .description {
      font-size: 1.8rem;
      line-height: 2.4rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    padding: 1.8rem 1.8rem;

    .title {
      font-size: 3rem;
      line-height: 3.7rem;
    }
  }
`;
