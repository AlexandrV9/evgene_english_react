import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { SwiperButton } from "../Button";
import { ReactNode, useRef } from "react";
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
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <StyledSwiperContainer>
      <SwiperButton type="prev" onClick={() => swiperRef.current?.slidePrev()} />
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {list?.map((item) => (
          <SwiperSlide key={item.id} style={{ width }}>
            {renderItem?.(item)}
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperButton type="next" onClick={() => swiperRef.current?.slideNext()} />
    </StyledSwiperContainer>
  );
};

const StyledSwiperContainer = styled.div`
  max-width: 100%;
  position: relative;
`;
