import styled from "styled-components";
import { MEMS_LIST } from "./constants";
import { BREAKPOINTS } from "@/constants";
import { SwiperContainer } from "@/ui";
import { useMediaQuery } from "@/hooks";

export const MemsList = () => {
  const device = useMediaQuery();
  const breakpoint = BREAKPOINTS[device];

  return (
    <StyledMemsList>
      {breakpoint < 768 ? (
        <SwiperContainer
          list={MEMS_LIST}
          renderItem={(item) => (
            <li className="mems_list_item">
              <img src={item.srcImage} />
            </li>
          )}
        />
      ) : (
        MEMS_LIST.map((item) => (
          <li key={item.id} className="mems_list_item">
            <img src={item.srcImage} />
          </li>
        ))
      )}
    </StyledMemsList>
  );
};

export const StyledMemsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  align-content: center;

  .mems_list_item {
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

  @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
    display: flex;
    justify-content: center;

    .mems_list_item {
      min-height: clamp(280px, 80vw, 590px);
    }
  }
`;
