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
      <div className="section_content">{children}</div>
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
  margin: 0 auto;
  margin-top: 14rem;

  .section_content {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
  }

  @media screen and (max-width: ${BREAKPOINTS.laptop + 96 * 2}px) {
    padding: 0 96px;
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow + 48 * 2}px) {
    padding: 0 48px;
  }

  @media screen and (max-width: ${BREAKPOINTS.tablet + 24 * 2}px) {
    padding: 0 24px;
  }

  @media screen and (max-width: ${BREAKPOINTS.sm + 16 * 2}px) {
    padding: 0 16px;
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile + 12 * 2}px) {
    padding: 0 12px;
  }
`;
