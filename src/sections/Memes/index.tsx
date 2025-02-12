import { MemsList } from "./MemsList";
import styled from "styled-components";
import { Section, SectionTitle } from "../../ui/Section";

interface MemesProps {
  className?: string;
}

export const Memes = ({ className = "" }: MemesProps) => {
  return (
    <StyledMemes id="memes" className={className}>
      <SectionTitle color="accent">мемы, которые ты начнешь понимать после занятий</SectionTitle>
      <MemsList />
    </StyledMemes>
  );
};

export const StyledMemes = styled(Section)``;
