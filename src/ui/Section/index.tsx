import { forwardRef, HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { Title, TitleProps } from "../Typography/Title";
import { BREAKPOINTS } from "@/constants";

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

export const SectionTitle = ({
  children,
  color = "accent",
  mb = 20,
  ...otherProps
}: SectionTitleProps) => {
  return (
    <Title as="h3" color={color} mb={mb} {...otherProps}>
      {children}
    </Title>
  );
};

const StyledSection = styled.section`
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 14rem 24px 0;

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    padding: 10rem 24px 0;
  }

  @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
    padding: 6rem 24px 0;
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    padding: 6rem 12px 0;
  }
`;
