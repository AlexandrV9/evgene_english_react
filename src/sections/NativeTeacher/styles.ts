import { Card } from "@/ui";
import styled from "styled-components";
import { Section } from "../../ui/Section";

export const StyledNativeTeacher = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0;
  max-width: none;

  background-color: var(--accent-color);

  .content {
    max-width: 1480px;
  }

  .content_wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 42rem;
    gap: 2rem;
  }

  .video_block {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
  }
`;

export const StyledTeacherCard = styled(Card)`
  .avatar {
  }

  .list_prices {
    display: flex;
    flex-direction: column;
    gap: 2.9rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }

  .wrapper {
    position: relative;
  }

  .old_price {
    position: relative;
    bottom: -10px;
    right: -10px;

    .red_line {
      position: absolute;
      top: 2px;
      left: -9px;
    }
  }

  .new_price {
    position: absolute;
    top: 1px;
    right: -79px;
    transform: rotate(10deg);

    .inner_wrapper {
      position: relative;
    }

    .circle {
      top: -16px;
      right: -28px;
      position: absolute;
    }
  }

  .right_content {
    width: 320px;
  }
`;
