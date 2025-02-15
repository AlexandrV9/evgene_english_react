import clsx from "clsx";
import styled from "styled-components";
import { MESSAGES_LIST } from "./constants";
import { forwardRef, useEffect } from "react";
import { BREAKPOINTS } from "@/constants";

export const MessagesList = forwardRef<any, { isIntersecting: boolean }>(
  ({ isIntersecting }, ref) => {
    useEffect(() => {
      if (isIntersecting) {
        const leftBoxes = document.querySelectorAll(".type_white");
        const rightBoxes = document.querySelectorAll(".type_dark");

        leftBoxes.forEach((box) => box.classList.add("animate"));
        rightBoxes.forEach((box) => box.classList.add("animate"));
      }
    }, [isIntersecting]);

    return (
      <StyledMessagesList ref={ref}>
        {MESSAGES_LIST.map((item) => (
          <li
            key={item.id}
            className={clsx("messages__message", {
              type_white: item.position === "left",
              type_dark: item.position === "right",
            })}
          >
            {item.text}
          </li>
        ))}
      </StyledMessagesList>
    );
  }
);

export const StyledMessagesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-bottom: 116px;

  .messages__message {
    padding: 16px;

    font-size: 36px;
    font-weight: 500;
    line-height: 42px;

    border-radius: 16px;
    position: relative;
    opacity: 0;
    transition: all 0.5s ease-in-out;

    &:nth-of-type(1) {
      max-width: 709px;
    }

    &:nth-of-type(2) {
      max-width: 638px;
    }

    &:nth-of-type(5) {
      max-width: 481px;
    }

    &:nth-of-type(6) {
      max-width: 575px;
    }

    &.animate {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .type_white {
    background-color: var(--insted-white-color);
    color: var(--text-color);
    align-self: start;
    transform: translateX(-100%);
    text-align: left;

    &::after {
      content: "";
      position: absolute;
      left: -6px;
      bottom: -24px;
      border: 14px solid transparent;
      border-top: 25px solid #f7f2ef;
      transform: rotate(27deg);
    }
  }

  .type_dark {
    background-color: var(--text-color);
    color: var(--white-color);
    align-self: end;
    transform: translateX(100%);
    text-align: left;

    &::after {
      content: "";
      position: absolute;
      right: -6px;
      bottom: -24px;
      border: 14px solid transparent;
      border-top: 25px solid var(--text-color);
      transform: rotate(-27deg);
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptop}px) {
    gap: 1.2rem;
    margin-bottom: 40px;

    .messages__message {
      font-size: 24px;
      line-height: 32px;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    .messages__message {
      &:nth-of-type(1) {
        max-width: 70vw;
      }
      &:nth-of-type(2) {
        max-width: 70vw;
      }
      &:nth-of-type(4) {
        max-width: 70vw;
      }
      &:nth-of-type(5) {
        max-width: 70vw;
      }
      &:nth-of-type(6) {
        max-width: 70vw;
      }
      &:nth-of-type(8) {
        max-width: 70vw;
      }
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
    .messages__message {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;
