import { SECTION_IDS } from "@/constants";
import { useAnimationBlock } from "@/hooks";
import { Button, Flex, Section, SectionTitle } from "@/ui";
import styled from "styled-components";
import { AdvantagesList } from "./AdvantagesList";

export interface WhyWeProps {
  className?: string;
}

export const WhyWe = ({ className }: WhyWeProps) => {
  const { targetRef } = useAnimationBlock(SECTION_IDS.WHY_WE);

  return (
    <StyledWhyWe id={SECTION_IDS.WHY_WE} className={className}>
      <div ref={targetRef}>
        <div className="wrapper">
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
      </div>
    </StyledWhyWe>
  );
};

export const StyledWhyWe = styled(Section)`
  overflow: hidden;

  .wrapper {
    transform: translateX(100%);
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  &.animate {
    .wrapper {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
