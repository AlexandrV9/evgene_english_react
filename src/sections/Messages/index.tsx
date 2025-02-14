import styled from "styled-components";
import { MessagesList } from "./MessagesList";
import { BookingButton, Flex, Text } from "@/ui";
import { Section } from "../../ui/Section";
import { useIntersectionObserver } from "@/hooks";

export interface MessagesProps {
  className?: string;
}

export const Messages = ({ className }: MessagesProps) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    isOnce: true,
    options: { threshold: 0.2 },
  });

  return (
    <StyledMessages id="messages" className={className}>
      <div ref={targetRef}>
        <MessagesList isIntersecting={isIntersecting} />
        <Flex className="messages__box" vertical align="center">
          <Text align="center" fontSize="xl" mb={24}>
            Английский вписывается в{" "}
            <Text as="span" fontSize="xl" fontWeight="bold" color="accent">
              любой график.
            </Text>
          </Text>
          <Text align="center" mb={88} fontSize="xl">
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
`;
