import { forwardRef, HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { Title, TitleProps } from "../Typography/Title";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(({ children, ...otherProps }, ref) => {
  return (
    <StyledSection {...otherProps} ref={ref}>
      {children}
    </StyledSection>
  );
});

interface SectionTitleProps extends Omit<TitleProps, "children" | "as"> {
  children: string;
}

export const SectionTitle = ({ children, color = "accent", ...otherProps }: SectionTitleProps) => {
  return (
    <Title as="h3" color={color} mb={20} {...otherProps}>
      {children}
    </Title>
  );
};

const StyledSection = styled.section`
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 14rem 0;
`;
