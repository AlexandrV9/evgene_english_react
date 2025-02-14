import { BookingButton, Flex, Icon, Text } from "@/ui";
import styled from "styled-components";
import { Section, SectionTitle } from "../../ui/Section";
import { LINKS_LIST } from "./constants";

export const Contacts = () => {
  return (
    <StyledContacts id="contacts">
      <SectionTitle className="title" color="accent">
        контакты
      </SectionTitle>

      <div className="section__content">
        <Flex className="wrapper_btns_1">
          <BookingButton theme="secondary" />
          <BookingButton />
        </Flex>
        <Text align="center" fontSize="l" mb={24} color="accent">
          или познакомьтесь c нами в соц.сетях
        </Text>
        <ul className="list_links">
          {LINKS_LIST.map(({ href, id, NetworkIcon, networkName }) => (
            <li key={id}>
              <a href={href} target="_blank">
                <Icon svg={NetworkIcon} />
                <Text fontSize="xl" color="secondary">
                  {networkName}
                </Text>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </StyledContacts>
  );
};
const StyledContacts = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    align-self: flex-start;
  }

  .wrapper_btns_1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;
    margin-bottom: 6rem;
  }

  .list_links {
    display: grid;
    grid-template-columns: repeat(3, 287px);
    gap: 24px;

    li {
      background-color: var(--secondary-color);
      border-radius: 16px;
      transition: all 0.2s;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
        transform: scale(1.05);
      }

      a {
        padding: 27px 52px;
        display: flex;
        align-items: center;
        gap: 12px;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
`;
