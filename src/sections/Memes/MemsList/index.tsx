import styled from "styled-components";
import { MEMS_LIST } from "./constants";

export const MemsList = () => {
  return (
    <StyledMemsList>
      {MEMS_LIST.map((item) => (
        <li key={item.id} className="mems_list_item">
          <img src={item.srcImage} />
        </li>
      ))}
    </StyledMemsList>
  );
};

export const StyledMemsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  align-content: center;

  .mems_list_item {
    width: 37rem;

    img {
      width: 100%;
    }

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      align-self: end;
    }

    &:nth-child(3), 
    &:nth-child(7) {
      position: relative;
      top: -50px;
    }

  }
`;
