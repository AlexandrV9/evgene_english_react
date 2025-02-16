import { MemsList } from "./MemsList";
import styled from "styled-components";
import { Section, SectionTitle } from "../../ui/Section";
import { BREAKPOINTS } from "@/constants";

interface MemesProps {
  className?: string;
}

export const Memes = ({ className = "" }: MemesProps) => {
  return (
    <StyledMemes id="memes" className={className}>
      <SectionTitle color="accent" className="title">
        мемы, которые ты начнешь понимать после занятий
      </SectionTitle>
      <MemsList />
    </StyledMemes>
  );
};

export const StyledMemes = styled(Section)`
  .title {
    margin-bottom: 5rem !important;
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    .title {
      margin-bottom: 2rem !important;
    }
  }
`;
