import { Title } from "@/ui";
import styled from "styled-components";
import { Section } from "../../ui/Section";
import { MotivationList } from "./MotivationList";

interface MotivationProps {
  className?: string;
}

export const Motivation = ({ className }: MotivationProps) => {
  return (
    <StyledMotivation id="motivation" className={className}>
      <Title color="accent" as="h3" align="start" className="title" mb={40}>
        Вот тебе немного мотивации
      </Title>
      <MotivationList />
    </StyledMotivation>
  );
};

const StyledMotivation = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
