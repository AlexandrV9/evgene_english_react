import ArrowPrevIcon from "@/assets/icons/arrow_slider_prev.svg";
import ArrowNextIcon from "@/assets/icons/arrow_slider-next.svg";
import { Icon } from "@/ui/Icon";
import styled, { css } from "styled-components";

interface SwiperButtonProps {
  type?: "prev" | "next";
}

export const SwiperButton = ({ type = "prev" }: SwiperButtonProps) => {
  return (
    <StyledSwiperButton type={type}>
      <Icon svg={type === "prev" ? ArrowPrevIcon : ArrowNextIcon} />
    </StyledSwiperButton>
  );
};

const StyledSwiperButton = styled.button<SwiperButtonProps>`
  ${(props) => {
    switch (props.type) {
      case "next":
        return css`
          transition: all 0.2s;
          position: absolute;

          top: 50%;
          right: -50px;

          transform: translateY(-50%);

          &:hover {
            cursor: pointer;
            opacity: 0.6;
          }
        `;
      default:
        return css`
          transition: all 0.2s;
          position: absolute;

          left: -50px;

          top: 50%;
          transform: translateY(-50%);

          &:hover {
            cursor: pointer;
            opacity: 0.6;
          }
        `;
    }
  }}
`;
