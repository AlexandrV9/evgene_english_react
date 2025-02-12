import { Title } from "@/ui";
import styled from "styled-components";
import { Section, SectionTitle } from "../../ui/Section";
import { MotivationList } from "./MotivationList";

interface MotivationProps {
  className?: string;
}

export const Motivation = ({ className }: MotivationProps) => {
  return (
    <StyledMotivation id="motivation" className={className}>
      <SectionTitle align="start">Вот тебе немного мотивации</SectionTitle>
      <MotivationList />
    </StyledMotivation>
  );
};

const StyledMotivation = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
