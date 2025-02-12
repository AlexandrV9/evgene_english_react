import { Section, Title } from "@/ui";
import styled from "styled-components";
import { TeachersList } from "./TeachersList";

export interface TeachersProps {
  className?: string;
}

export const Teachers = ({ className }: TeachersProps) => {
  return (
    <StyledTeachers id="teachers" className={className}>
      <Title as="h4" align="end" fontFamily="MVCrooker" color="secondary">
        Without further ado
      </Title>
      <Title color="accent" as="h3" align="end" mb="3.2rem">
        наши крутые преподаватели
      </Title>

      <TeachersList />
    </StyledTeachers>
  );
};

export const StyledTeachers = styled(Section)`
  position: relative;
`;
