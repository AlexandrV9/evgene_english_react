import { Section, SectionTitle, Title } from "@/ui";
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
      <SectionTitle color="accent" align="end">
        наши крутые преподаватели
      </SectionTitle>

      <TeachersList />
    </StyledTeachers>
  );
};

export const StyledTeachers = styled(Section)`
  position: relative;
`;
