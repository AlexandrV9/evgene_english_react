import clsx from "clsx";
import styled from "styled-components";
import { MESSAGES_LIST } from "./constants";

export const MessagesList = () => {
  return (
    <StyledMessagesList>
      {MESSAGES_LIST.map((item) => (
        <li
          key={item.id}
          className={clsx("messages__message", {
            messages__message_type_white: item.position === "left",
            messages__message_type_dark: item.position === "right",
          })}
        >
          {item.text}
        </li>
      ))}

    </StyledMessagesList>
  );
};

export const StyledMessagesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-bottom: 116px;

  .messages__message {
    padding: 16px;
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    border-radius: 16px;
    position: relative;
    /* opacity: 0; */
    /* transition: all 0.5s ease-in-out; */

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
      /* transform: translateX(0); */
    }
  }

  .messages__message_type_white {
    background-color: var(--insted-white-color);
    color: var(--text-color);
    align-self: start;
    /* transform: translateX(-100%); */
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

  .messages__message_type_dark {
    background-color: var(--text-color);
    color: var(--white-color);
    align-self: end;
    /* transform: translateX(100%); */
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

  .messages__box {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 32px;
      font-weight: 400;
      line-height: 40px;
      color: var(--text-color);

      span {
        color: var(--accent-color);
        font-weight: 800;
      }

      &:first-of-type {
        margin-bottom: 24px;
      }

      &:last-of-type {
        text-align: center;
        margin-bottom: 88px;
        max-width: 614px;
      }
    }
  }
`;
