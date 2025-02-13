import { Button, Flex, Section, SectionTitle } from "@/ui";
import styled from "styled-components";
import { AdvantagesList } from "./AdvantagesList";
import { useEffect } from "react";
import { useIntersectionObserver } from "@/hooks";

export interface WhyWeProps {
  className?: string;
}

export const WhyWe = ({ className }: WhyWeProps) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    isOnce: true,
    options: { threshold: 0.2 },
  });

  useEffect(() => {
    if (isIntersecting) {
      const container = document.querySelector("#why-we");

      container?.classList?.add("animate");
    }
  }, [isIntersecting]);

  return (
    <StyledWhyWe id="why-we" className={className}>
      <div className="why-we__wrapper" ref={targetRef}>
        <SectionTitle color="accent">почему мы?</SectionTitle>

        <Flex>
          <Flex vertical gap="7rem" align="start">
            <AdvantagesList />
            <Button>
              <span>записаться на занятие</span>
              <img src="../src/assets/icons/telegram.svg" />
            </Button>
          </Flex>

          <img src="../src/assets/icons/note.svg" className="why-we__img-notice" />
        </Flex>
      </div>
    </StyledWhyWe>
  );
};

export const StyledWhyWe = styled(Section)`
  transform: translateX(100%);
  opacity: 0;
  transition: all 0.5s ease-in-out;

  &.animate {
    transform: translateX(0);
    opacity: 1;
  }
`;
