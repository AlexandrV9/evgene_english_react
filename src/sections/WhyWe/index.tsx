import { Button, Flex, Section, Title } from "@/ui";
import styled from "styled-components";
import { AdvantagesList } from "./AdvantagesList";

export interface WhyWeProps {
  className?: string;
}

export const WhyWe = ({ className }: WhyWeProps) => {
  return (
    <StyledWhyWe id="why-we" className={className}>
      <div className="why-we__wrapper">
        <Title color="accent" as="h3" mb="3.2rem">
          почему мы?
        </Title>

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

export const StyledWhyWe = styled(Section)``;
