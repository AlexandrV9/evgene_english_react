import styled from "styled-components";
import { TEACHERS_LIST } from "./constants";
import { TeacherCard } from "./TeacherCard";

export const TeachersList = () => {
  return (
    <StyledTeachersList>
      {TEACHERS_LIST.map((item) => (
        <TeacherCard key={item.id} {...item} />
      ))}
    </StyledTeachersList>
  );
};

export const StyledTeachersList = styled.ul`
  display: flex;
  gap: 2rem;
`;
