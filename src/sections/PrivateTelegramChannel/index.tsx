import { Flex, Section, SectionTitle } from "@/ui";
import styled from "styled-components";

export interface PrivateTelegramChannelProps {
  className?: string;
}

import pathTelegramChannel from "@/assets/images/telegram-channel.png";
import { BREAKPOINTS } from "@/constants";

export const PrivateTelegramChannel = ({ className }: PrivateTelegramChannelProps) => {
  return (
    <StyledPrivateTelegramChannel id="teachers" className={className}>
      <div className="content">
        <SectionTitle align="center" className="title">
          Вступай к нам в приватный телеграм канал
        </SectionTitle>
        <Flex justify="center">
          <div className="imgWrapper">
            <img src={pathTelegramChannel} />
          </div>
        </Flex>
      </div>
    </StyledPrivateTelegramChannel>
  );
};

export const StyledPrivateTelegramChannel = styled(Section)`
  position: relative;
  padding-left: 16px;
  padding-right: 16px;

  .imgWrapper {
    overflow: hidden;
    border-radius: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    .content {
      padding: 0 96px;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tabletUp}px) {
    .content {
      padding: 0 48px;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
    .content {
      padding: 0;
    }
  }
`;
