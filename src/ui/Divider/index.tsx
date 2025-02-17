import { CSSProperties } from "react";
import styled from "styled-components";

interface DividerProps {
  className?: string;
  style?: CSSProperties;
}

export const Divider = ({ className, style }: DividerProps) => {
  return <StyledDivider className={className} style={style} />;
};

export const StyledDivider = styled.div`
  height: 2px;
  width: 100%;
  background-color: var(--secondary-color);
  margin: 3.2rem 0;
`;
