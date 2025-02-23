import { Card, Text } from "@/ui";
import { VideoBlock } from "@/ui/VideoBlock";
import styled from "styled-components";
import { PriceItemList } from "../types";
import { RenderPriceItem } from "./RenderPriceItem";
import { Fragment } from "react/jsx-runtime";
import { BREAKPOINTS } from "@/constants";

interface PriceCardProps extends PriceItemList {}

export const PriceCard = ({ id, list, video, userName }: PriceCardProps) => {
  return (
    <StyledPriceCard>
      <VideoBlock id={id} video={video} className="video_block" />
      <Text
        fontSize="xl"
        fontFamily="MVCrooker"
        custLineHeight="4.8rem"
        fontWeight="semiBold"
        className="title"
      >
        {userName}
      </Text>
      <div className="list_1">
        {list?.map(({ id, title, subtitle, items }) => (
          <Fragment key={id}>
            <div className="wrap_7">
              <Text fontSize="l" align="center" fontWeight="medium" className="itemTitle">
                {title}
              </Text>
              {subtitle && (
                <Text fontSize="l" fontWeight="semiBold" align="center" className="itemSubtitle">
                  {subtitle}
                </Text>
              )}
            </div>
            <ul className="list_2">
              {items?.map((item) => (
                <RenderPriceItem key={item.id} {...item} />
              ))}
            </ul>
          </Fragment>
        ))}
      </div>
    </StyledPriceCard>
  );
};

export const StyledPriceCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  padding-bottom: 6rem;

  .video_block {
    margin-bottom: 2rem;
  }

  .list_1 {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
  }

  .list_2 {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    width: auto;

    .list_1 {
      align-items: center;
    }

    .list_2 {
      align-items: center;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tabletUp}px) {
    .list_1 {
      gap: 2rem;
      align-items: flex-start;
    }

    .list_2 {
      gap: 1rem;
      align-items: flex-start;
    }

    .wrap_7 {
      width: 100%;

      &:last-of-type {
        margin-top: 1rem;
      }
    }

    .title {
      margin-bottom: 1rem !important;
    }

    .itemTitle {
      font-size: 2.2rem;
      line-height: 3rem;
      text-align: center;
    }

    .itemSubtitle {
      font-size: 2rem;
      line-height: 2.8rem;
    }

    .itemSubtitle {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    .video_block {
      width: clamp(300px, 50vw, 400px);
      height: clamp(300px, 50vw, 400px);
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
    .title {
      margin-bottom: 0 !important;
    }
  }

  /* TODO; убрать */
  @media screen and (max-width: 650px) {
    .list_1 {
      gap: 1rem;
    }

    .list_2 {
      gap: 0.8rem;
    }

    .itemTitle {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    padding: 2rem;

    .video_block {
      margin-bottom: 0.4rem;
    }

    .wrap_7 {
      &:last-of-type {
        margin-top: 2.2rem;
      }
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.xs}px) {
    .video_block {
      width: clamp(240px, 50vw, 300px);
      height: clamp(240px, 50vw, 300px);
    }

    .list_1 {
      gap: 0.2rem;
    }

    .list_2 {
      gap: 0.1rem;
    }
  }

  @media screen and (max-width: 400px) {
    padding: 2rem 1rem;

    .video_block {
      margin-bottom: 0.4rem;
    }

    .list_1 {
      gap: 0.2rem;
    }

    .list_2 {
      gap: 0.1rem;
    }

    .itemTitle {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    .itemSubtitle {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    padding: 2rem 1rem;

    .video_block {
      margin-bottom: 1rem;
    }

    .list_1 {
      gap: 0.2rem;
    }

    .list_2 {
      gap: 0.1rem;
    }

    .video_block {
      width: 240px;
      height: 240px;
    }

    .itemTitle {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    .itemSubtitle {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }
`;
