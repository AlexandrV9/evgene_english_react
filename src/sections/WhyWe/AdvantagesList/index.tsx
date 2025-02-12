import styled from "styled-components";
import { ADVANTAGES_LIST } from "./constants";
import { Icon } from "@/ui";

export const AdvantagesList = () => {
  return (
    <StyledAdvantagesList>
      {ADVANTAGES_LIST.map((item) => (
        <li className="item" key={item.id}>
          <Icon svg={item.icon} width="2.4rem" />
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

  .item {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
`;
