import styled from "styled-components";
import { BONUSES_LIST } from "./constants";
import { Icon } from "@/ui";
import clsx from "clsx";

export const BonusesList = () => {
  return (
    <StyledBonusesList>
      {BONUSES_LIST.map((item) => (
        <li key={item.id} className={clsx("item", item.className)}>
          <Icon svg={item.icon} size={60} />
          {item.text}
        </li>
      ))}
    </StyledBonusesList>
  );
};

export const StyledBonusesList = styled.ul`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  gap: 2rem;
  margin-right: 10rem;

  .item {
    padding: 2.7rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
  }

  .block_1 {
    background-color: #031a2c;
    width: 50rem;
  }

  .block_2 {
    background-color: #547793;
    width: 37rem;
  }

  .block_3 {
    background-color: #c0cacc;
    width: 37rem;
  }

  .block_4 {
    background-color: #f7f2ef;
    width: 66rem;
  }
`;
