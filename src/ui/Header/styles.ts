import { HEADER_HEIGHT } from "@/constants";
import styled from "styled-components";

export const StyledHeader = styled.header`
  height: ${HEADER_HEIGHT}px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 0 40px;
  z-index: var(--header-z-index);

  background-color: var(--back-color);
`;
