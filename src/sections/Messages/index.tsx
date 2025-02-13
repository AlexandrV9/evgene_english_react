import styled from "styled-components";
import { MessagesList } from "./MessagesList";
import { BookingButton, Flex, Text } from "@/ui";
import { Section } from "../../ui/Section";

export interface MessagesProps {
  className?: string;
}

export const Messages = ({ className }: MessagesProps) => {
  return (
    <StyledMessages id="messages" className={className}>
      <MessagesList />
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
    </StyledMessages>
  );
};

export const StyledMessages = styled(Section)`
  position: relative;
  width: calc(100vw - 50rem);
`;
