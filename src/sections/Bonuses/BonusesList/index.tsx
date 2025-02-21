import styled from "styled-components";
import { BONUSES_LIST } from "./constants";
import { Icon } from "@/ui";
import clsx from "clsx";
import { BREAKPOINTS } from "@/constants";

export const BonusesList = () => {
  return (
    <StyledBonusesList>
      {BONUSES_LIST.map((item) => (
        <li key={item.id} className={clsx("item", item.className)}>
          <div>
            <Icon svg={item.icon} size={60} className="item_icon" />
            {item.text}
          </div>
          {item.rightContent}
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

  .image{
    height: 20rem;
  }

  .item {
    padding: 2.7rem;
    border-radius: 2rem;
    display: flex;
    gap: 1.3rem;

    p {
      font-size: 3.2rem;
      line-height: 4rem;
    }
  }

  .block_1 {
    background-color: #031a2c;
    width: 80rem;
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

  @media screen and (max-width: ${BREAKPOINTS.desktopLow}px) {
    .item {
      p {
        font-size: 2.8rem;
        line-height: 3.6rem;
      }
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptop}px) {
    .block_2 {
      width: 28rem;
    }

    .block_3 {
      width: 28rem;
    }

    .block_4 {
      width: 54rem;
    }

    .item {
      p {
        font-size: 2.4rem;
        line-height: 3.2rem;
      }
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    .item {
      p {
        font-size: 2.4rem;
        line-height: 3.2rem;
      }
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tabletUp + 60}px) {
    justify-content: start;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, min-content);

    .block_1,
    .block_2,
    .block_3,
    .block_4 {
      width: auto;
    }

    .block_1 {
      grid-row: 1 / 2;
      grid-column: 1 / 3;
    }

    .block_4 {
      grid-row: 3 / 4;
      grid-column: 1 / 3;
    }

    .item {
      padding: 2rem;

      p {
        font-size: 2rem;
        line-height: 2.8rem;
      }
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    .image {
      height: 15rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.xs}px) {
    .item_icon {
      width: 4rem !important;
      height: 4rem !important;
    }

    .item {
      padding: 1.2rem;

      p {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    .item_icon {
      width: 3rem !important;
      height: 3rem !important;
    }

    .item {
      padding: 1.2rem;

      p {
        font-size: 1.4rem;
        line-height: 2rem;
      }
    }
  }
`;
