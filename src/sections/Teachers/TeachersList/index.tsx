import styled from "styled-components";
import { TEACHERS_LIST } from "./constants";
import { TeacherCard } from "./TeacherCard";
import { SwiperContainer } from "@/ui";
import { BREAKPOINTS } from "@/constants";

export const TeachersList = () => {
  return (
    <StyledTeachersList>
      <SwiperContainer
        list={TEACHERS_LIST}
        renderItem={(item) => <TeacherCard key={item.id} {...item} />}
      />
    </StyledTeachersList>
  );
};

export const StyledTeachersList = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${BREAKPOINTS.desktopLow}px) {
    margin: 0 auto;
  }

  .swiper_btn_next {
    display: none;
  }

  .swiper_btn_prev {
    display: none;
  }
`;
