import styled from "styled-components";
import { ADVANTAGES_LIST } from "./constants";
import { Icon } from "@/ui";
import { BREAKPOINTS } from "@/constants";

export const AdvantagesList = () => {
  return (
    <StyledAdvantagesList>
      {ADVANTAGES_LIST.map((item) => (
        <li className="item" key={item.id}>
          <div className="iconWrapper">
            <Icon svg={item.icon} width="2.4rem" />
          </div>
          {item.text}
        </li>
      ))}
    </StyledAdvantagesList>
  );
};

export const StyledAdvantagesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .iconWrapper {
    position: absolute;
    left: -3rem;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    position: relative;
    margin-left: 20px;
  }

  @media screen and (max-width: ${BREAKPOINTS.desktop}px) {
    gap: 1rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    .text {
      font-size: 2rem;
      line-height: 2.8rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    gap: 0.4rem;

    .text {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    gap: 0rem;
  }
`;
