import { forwardRef, HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { Title, TitleProps } from "../Typography/Title";
import { BREAKPOINTS } from "@/constants";
import clsx from "clsx";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  as?: JSX.ElementType;
  sectionContentClassName?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, sectionContentClassName, ...otherProps }, ref) => {
    return (
      <StyledSection {...otherProps} ref={ref}>
        <div className={clsx("sectionContent", sectionContentClassName)}>{children}</div>
      </StyledSection>
    );
  }
);

interface SectionTitleProps extends Omit<TitleProps, "children" | "as"> {
  children: string;
}

export const SectionTitle = ({
  children,
  color = "accent",
  mb = 28,
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

  position: relative;

  .sectionContent {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }

  @media screen and (max-width: ${BREAKPOINTS.laptop}px) {
    padding: 0 96px;
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    padding: 0 48px;
  }

  @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
    padding: 0 24px;
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    padding: 0 16px;
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    margin-top: 10rem;
    padding: 0 12px;
  }
`;
