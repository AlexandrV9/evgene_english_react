import { Title } from "@/ui";
import { MemsList } from "./MemsList";
import styled from "styled-components";
import { Section } from "../../ui/Section";

interface MemesProps {
  className?: string;
}

export const Memes = ({ className = "" }: MemesProps) => {
  return (
    <StyledMemes id="memes" className={className}>
      <Title color="accent" as="h3" mb="3.2rem">
        мемы, которые ты начнешь понимать после занятий
      </Title>
      <MemsList />
    </StyledMemes>
  );
};

export const StyledMemes = styled(Section)``;
