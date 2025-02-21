import styled from "styled-components";
import { MessagesList } from "./MessagesList";
import { BookingButton, Flex, Text } from "@/ui";
import { Section } from "../../ui/Section";
import { useIntersectionObserver, useTextSize } from "@/hooks";
import { BREAKPOINTS } from "@/constants";

export interface MessagesProps {
  className?: string;
}

export const Messages = ({ className }: MessagesProps) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    isOnce: true,
    options: { threshold: 0.2 },
  });

  const fontSize = useTextSize();

  return (
    <StyledMessages id="messages" className={className}>
      <div ref={targetRef}>
        <MessagesList isIntersecting={isIntersecting} />
        <Flex className="messages__box" vertical align="center">
          <Text align="center" fontSize={fontSize} mb={24} className={"text_1"}>
            Английский вписывается в{" "}
            <Text as="span" fontSize={fontSize} fontWeight="bold" color="accent">
              любой график.
            </Text>
          </Text>
          <Text align="center" className="subtitle_2" fontSize={fontSize}>
            Забронируй урок в любое удобное для тебя <br />
            время и убедись в этом.
          </Text>
          <BookingButton />
        </Flex>
      </div>
    </StyledMessages>
  );
};

export const StyledMessages = styled(Section)`
  position: relative;
  width: calc(100vw - 50rem);
  overflow: hidden;

  .subtitle_2 {
    margin-bottom: 4rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.desktopLow}px) {
    width: 998px;

    .subtitle_2 {
      margin-bottom: 4rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    width: 824px;

    .subtitle_2 {
      margin-bottom: 4rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tabletUp}px) {
    width: calc(100vw - 24px);

    .subtitle_2 {
      margin-bottom: 4rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.xs}px) {
    .text_1 {
      margin-bottom: 1rem !important;
    }

    .subtitle_2 {
      margin-bottom: 1rem;
    }
  }

  /*  */

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
