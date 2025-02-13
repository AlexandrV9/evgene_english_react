import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButton } from "../Button";
import { ReactNode } from "react";
import styled from "styled-components";

import "swiper/css";

interface SwiperContainerProps<T> {
  list?: T[];
  sliderProps?: {
    width?: string | number;
  };
  renderItem?: (item: T) => ReactNode;
}

export const SwiperContainer = <T extends { id: string }>({
  sliderProps = {},
  list,
  renderItem,
}: SwiperContainerProps<T>) => {
  const { width = "460px" } = sliderProps;

  return (
    <StyledSwiperContainer>
      <SwiperButton type="prev" />
      <Swiper spaceBetween={20} slidesPerView={3}>
        {list?.map((item) => (
          <SwiperSlide key={item.id} style={{ width }}>
            {renderItem?.(item)}
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperButton type="next" />
    </StyledSwiperContainer>
  );
};

const StyledSwiperContainer = styled.div`
  max-width: 100%;
  position: relative;
`;
