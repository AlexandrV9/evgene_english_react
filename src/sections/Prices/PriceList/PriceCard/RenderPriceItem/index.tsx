import { Icon, Text } from "@/ui";
import { PriceItem } from "../../types";

import LineIcon from "@/assets/icons/dash_1.svg";
import RedLineIcon from "@/assets/icons/red_line_1.svg";
import GreenCircleIcon from "@/assets/icons/circle_1.svg";
import styled from "styled-components";
import { BREAKPOINTS } from "@/constants";

export const RenderPriceItem = ({
  quantityHours,
  currentPrice,
  oldPrice,
  newPrice,
}: PriceItem["items"][0]) => {
  switch (quantityHours) {
    case "one": {
      return (
        <StyleItem>
          <Text fontSize="l" color="accent" fontWeight="bold" className="desc_2">
            1 час в неделю
          </Text>
          <Icon svg={LineIcon} className="lineIcon" />
          <Text fontSize="l" fontWeight="semiBold" className="currentPrice">
            $ {currentPrice}/час
          </Text>
        </StyleItem>
      );
    }
    case "two": {
      return (
        <StyleItem className="two">
          <Text fontSize="l" color="accent" fontWeight="bold" className="desc_2">
            2+ часа в неделю
          </Text>
          <Icon svg={LineIcon} className="lineIcon" />
          <div className="wrapper">
            <div className="old_price">
              <Text fontSize="m" fontWeight="medium">
                $ {oldPrice}/час
              </Text>
              <Icon svg={RedLineIcon} className="red_line" />
            </div>
            <div className="new_price">
              <div className="inner_wrapper">
                <Text fontSize="l" fontWeight="medium">
                  $ {newPrice}/час
                </Text>
                <Icon svg={GreenCircleIcon} className="circle" />
              </div>
            </div>
          </div>
        </StyleItem>
      );
    }
    case "half_an_hour": {
      return (
        <StyleItem>
          <Text fontSize="l" color="accent" fontWeight="bold" className="desc_2">
            30 мин
          </Text>
          <Icon svg={LineIcon} className="lineIcon" />
          <Text fontSize="l" fontWeight="semiBold" className="currentPrice">
            $ {currentPrice}
          </Text>
        </StyleItem>
      );
    }
  }
};

const StyleItem = styled("li")`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  .wrapper {
    position: relative;
  }

  .old_price {
    position: relative;
    bottom: -10px;

    .red_line {
      position: absolute;
      top: -4px;
      width: 8rem;
    }
  }

  .new_price {
    position: absolute;
    top: -13px;
    right: -70px;
    transform: rotate(6deg);

    p {
      font-size: 2.2rem;
      line-height: 3.2rem;
    }

    .inner_wrapper {
      position: relative;
    }

    .circle {
      width: 12rem;
      top: -18px;
      right: -19px;
      position: absolute;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tabletUp}px) {
    .desc_2 {
      font-size: 2.2rem;
      line-height: 3rem;
    }

    .currentPrice {
      font-size: 2.2rem;
      line-height: 3.2rem;
    }

    .new_price {
      top: -10px;
      right: -90px;

      p {
        font-size: 2.2rem;
        line-height: 3.2rem;
      }

      .inner_wrapper {
        position: relative;
      }

      .circle {
        width: 12rem;
        top: -18px;
        right: -19px;
        position: absolute;
      }
    }

    .lineIcon {
      width: 2.4rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
    &.two {
    }

    .new_price {
      /* top: -30px;
      right: -20px;
      transform: rotate(2deg); */

      .inner_wrapper {
        position: relative;
        width: 100px;
      }

      .circle {
        width: 12rem;
        top: -18px;
        right: -5px;
      }
    }
  }

  /* TODO: постараться убрать */
  @media screen and (max-width: 650px) {
    .desc_2 {
      font-size: 1.8rem;
      line-height: 2.3rem;
    }

    .currentPrice {
      font-size: 1.8rem;
      line-height: 2.3rem;
    }

    .old_price {
      position: relative;
      bottom: -10px;

      p {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      .red_line {
        position: absolute;
        top: -6px;
        width: 6rem;
      }
    }

    .new_price {
      top: -5px;
      right: -90px;

      p {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      .inner_wrapper {
        position: relative;
        width: 9rem;
      }

      .circle {
        width: 9rem;
        top: -2rem;
        right: 12px;
      }
    }
  }

  @media screen and (max-width: 470px) {
    /* display: grid; */
    /* grid-template-columns: 1fr 20px max-content; */

    &.two {
      /* margin-top: 3rem !important; */
    }

    .lineIcon {
      width: 2rem;
    }

    .desc_2 {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    .currentPrice {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    .old_price {
      position: relative;
      bottom: -10px;

      p {
        font-size: 1.3rem;
        line-height: 2.1rem;
      }

      .red_line {
        position: absolute;
        top: -7px;
        width: 5rem;
      }
    }

    .new_price {
      top: 0;
      right: -90px;

      p {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      .inner_wrapper {
        position: relative;
        width: 9rem;
      }

      .circle {
        width: 8.6rem;
        top: -2.1rem;
        right: 15px;
      }
    }
  }

  @media screen and (max-width: 440px) {
    /* display: grid; */
    /* grid-template-columns: 1fr 20px max-content; */

    &.two {
      /* margin-top: 3rem !important; */
    }

    .lineIcon {
      width: 2rem;
    }

    .desc_2 {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }

    .currentPrice {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }

    .old_price {
      position: relative;
      bottom: -10px;

      p {
        font-size: 1.4rem;
        line-height: 2.2rem;
      }

      .red_line {
        position: absolute;
        top: -7px;
        width: 5rem;
      }
    }

    .new_price {
      top: 0;
      right: -90px;

      p {
        font-size: 1.4rem;
        line-height: 2.2rem;
      }

      .inner_wrapper {
        position: relative;
        width: 9rem;
      }

      .circle {
        width: 7.5rem;
        top: -2.2rem;
        right: 25px;
      }
    }
  }
`;
