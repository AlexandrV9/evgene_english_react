import { Icon, Text } from "@/ui";
import { PriceItem } from "../../types";

import LineIcon from "@/assets/icons/dash_1.svg";
import RedLineIcon from "@/assets/icons/red_line_1.svg";
import GreenCircleIcon from "@/assets/icons/circle_1.svg";
import styled from "styled-components";

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
          <Text custFontSize={27} color="accent" fontWeight="bold">
            1 час в неделю
          </Text>
          <Icon svg={LineIcon} />
          <Text custFontSize={27} fontWeight="semiBold">
            $ {currentPrice}/час
          </Text>
        </StyleItem>
      );
    }
    case "two": {
      return (
        <StyleItem>
          <Text custFontSize={27} color="accent" fontWeight="bold">
            2+ часа в неделю
          </Text>
          <Icon svg={LineIcon} />
          <div className="wrapper">
            <div className="old_price">
              <Text custFontSize={25} fontWeight="medium">
                $ {oldPrice}/час
              </Text>
              <Icon svg={RedLineIcon} className="red_line" />
            </div>
            <div className="new_price">
              <div className="inner_wrapper">
                <Text custFontSize={27} fontWeight="medium">
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
          <Text custFontSize={27} color="accent" fontWeight="bold">
            30 мин
          </Text>
          <Icon svg={LineIcon} />
          <Text custFontSize={27} fontWeight="semiBold">
            $ {currentPrice}/час
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
    }
  }

  .new_price {
    position: absolute;
    top: -13px;
    right: -70px;
    transform: rotate(6deg);
    scale: 0.7;

    .inner_wrapper {
      position: relative;
    }

    .circle {
      top: -20px;
      right: -34px;
      position: absolute;
    }
  }
`;
