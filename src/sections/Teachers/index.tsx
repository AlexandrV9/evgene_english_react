import { Section, SectionTitle, Title } from "@/ui";
import styled from "styled-components";
import { TeachersList } from "./TeachersList";
import { BREAKPOINTS } from "@/constants";

export interface TeachersProps {
  className?: string;
}

export const Teachers = ({ className }: TeachersProps) => {
  return (
    <StyledTeachers id="teachers" className={className}>
      <div className="title_wrapper">
        <Title as="h4" align="end" fontFamily="MVCrooker" color="secondary">
          Without further ado
        </Title>
        <SectionTitle color="accent" align="end">
          наши крутые преподаватели
        </SectionTitle>
      </div>

      <TeachersList />
    </StyledTeachers>
  );
};

export const StyledTeachers = styled(Section)`
  position: relative;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    .title_wrapper {
      margin-right: 50px;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    .title_wrapper {
      margin-right: 0;
    }
  }
`;
