import styled from "styled-components";
import { Section, SectionTitle } from "../../ui/Section";
import { MotivationList } from "./MotivationList";
import { BREAKPOINTS } from "@/constants";

interface MotivationProps {
  className?: string;
}

export const Motivation = ({ className }: MotivationProps) => {
  return (
    <StyledMotivation id="motivation" className={className}>
      <SectionTitle align="start" className="title">
        Вот тебе немного мотивации
      </SectionTitle>
      <MotivationList />
    </StyledMotivation>
  );
};

const StyledMotivation = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${BREAKPOINTS.desktopLow + 96}px) {
    .title {
      margin-left: 9.6rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptop}px) {
    .title {
      margin-left: 0;
    }
  }
`;
