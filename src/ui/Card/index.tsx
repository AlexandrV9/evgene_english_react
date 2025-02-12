import { ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  className?: string;
  children?: ReactNode;
}

export const Card = ({ className = "", children }: CardProps) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

const StyledCard = styled.div`
  padding: 2.7rem;
  border-radius: 2rem;
  background-color: var(--insted-white-color);
`;
