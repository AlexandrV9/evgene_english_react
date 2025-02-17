import { BookingButton, Flex, Text } from "@/ui";
import styled from "styled-components";
import { Section, SectionTitle } from "../../ui/Section";
import { LinksList } from "./LinksList";
import { BREAKPOINTS } from "@/constants";

export const Contacts = () => {
  return (
    <StyledContacts id="contacts">
      <SectionTitle className="title" color="accent" align="center">
        контакты
      </SectionTitle>

      <div className="content">
        <Flex className="btnsWrapper">
          <BookingButton theme="secondary" />
          <BookingButton text="стать преподавателем" />
        </Flex>
        <Text align="center" fontSize="l" mb={24} color="accent" className="helpText">
          или познакомьтесь c нами в соц.сетях
        </Text>
        <LinksList />
      </div>
    </StyledContacts>
  );
};
const StyledContacts = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 8rem;

  .title {
    align-self: flex-start;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btnsWrapper {
    display: flex;
    justify-content: center;
    gap: 2.4rem;
    margin-bottom: 6rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.laptop}px) {
    .helpText {
      font-size: 2rem;
      line-height: 2.8rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tabletUp}px) {
    .content {
    }

    .btnsWrapper {
      flex-direction: column;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    .content {
    }

    .btnsWrapper {
      margin-bottom: 1.8rem;
    }
  }
`;
