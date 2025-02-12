import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Section = ({ children, ...otherProps }: SectionProps) => {
  return <StyledSection {...otherProps}>{children}</StyledSection>;
};

const StyledSection = styled.section`
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 20rem 0;
`;
