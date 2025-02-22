import { Icon, Text } from "@/ui";
import { LINKS_LIST } from "./constants";
import styled from "styled-components";
import { BREAKPOINTS } from "@/constants";

export const LinksList = () => {
  return (
    <StyledListLinks>
      {LINKS_LIST.map(({ href, id, NetworkIcon, networkName }) => (
        <li key={id}>
          <a href={href} target="_blank">
            <Icon svg={NetworkIcon} className="networkIcon" />
            <Text fontSize="l" color="secondary" className="networkName">
              {networkName}
            </Text>
          </a>
        </li>
      ))}
    </StyledListLinks>
  );
};

export const StyledListLinks = styled.ul`
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
    }

    a {
      padding: 1.8rem 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      text-decoration: none;
      cursor: pointer;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptop}px) {
    gap: 20px;
    grid-template-columns: repeat(3, 220px);

    .networkName {
      font-size: 2rem;
      line-height: 2.8rem;
    }

    .networkIcon {
      width: 3.2rem;
      height: 3.2rem;
    }

    li a {
      padding: 1.2rem 2rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tabletUp}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;

    li a {
      padding: 0.9rem 2rem;
    }
  }
`;
