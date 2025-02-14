import ArrowUpIcon from "@/assets/icons/arrow_up.svg";
import { Icon } from "@/ui/Icon";
import { Text } from "../../Typography/Text";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { HEADER_HEIGHT } from "@/constants";

export const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > HEADER_HEIGHT);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledScrollTopButton onClick={handleClick} $isVisible={isVisible}>
      <Icon size={30} svg={ArrowUpIcon} />
      <Text>наверх</Text>
    </StyledScrollTopButton>
  );
};

const StyledScrollTopButton = styled.button<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 3rem;
  right: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  transition: all 0.2s;

  opacity: ${(props) => (props.$isVisible ? "1" : "0")};

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  color: var(---accent-color);
  width: 8rem;
  height: 8rem;
`;
