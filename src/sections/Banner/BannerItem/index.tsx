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
        <Text custFontSize={56} custLineHeight={"6.2rem"} color="primary" fontWeight="bold">
          {title}
        </Text>
        <Text custFontSize={56} custLineHeight={"6.2rem"} as="span">
          {emoji}
        </Text>
      </Flex>

      <Text custFontSize={30} custLineHeight="3.6rem" color="primary" mt="auto">
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
`;
