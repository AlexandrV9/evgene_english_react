import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { SwiperButton } from "../Button";
import { ReactNode, useRef } from "react";
import styled from "styled-components";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "swiper/css";
import { BREAKPOINTS } from "@/constants";

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
    <StyledSwiperContainer className="swiper_wrapper">
      <SwiperButton type="prev" onClick={() => swiperRef.current?.slidePrev()} />
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          [BREAKPOINTS.desktop]: {
            spaceBetween: 20,
            slidesPerView: 3,
          },
          [BREAKPOINTS.desktopLow]: {
            spaceBetween: 20,
            slidesPerView: 3,
          },
          [BREAKPOINTS.laptop]: {
            spaceBetween: 20,
            slidesPerView: 3,
          },
          [BREAKPOINTS.laptopLow]: {
            spaceBetween: 20,
            slidesPerView: 3,
          },
          [BREAKPOINTS.laptopLow - 1]: {
            spaceBetween: 16,
            slidesPerView: 3,
          },
          [BREAKPOINTS.tablet]: {
            spaceBetween: 16,
            slidesPerView: 1.09,
          },
          [BREAKPOINTS.xs]: {
            spaceBetween: 12,
            slidesPerView: 1.1,
          },
          [BREAKPOINTS.xxs]: {
            spaceBetween: 12,
            slidesPerView: 1.15,
          },
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
  max-width: 1500px;
  position: relative;

  @media screen and (max-width: ${BREAKPOINTS.desktopLow}px) {
    max-width: calc(100vw - 250px);
  }

  @media screen and (max-width: ${BREAKPOINTS.desktopLow}px) {
    max-width: calc(100vw - 150px);
  }

  @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
    .swiper_btn_prev,
    .swiper_btn_next {
      display: none;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    max-width: calc(100vw - 30px);
  }
`;
