import { Card, Text } from "@/ui";
import { VideoBlock } from "@/ui/VideoBlock";
import styled from "styled-components";
import { PriceItemList } from "../types";
import { RenderPriceItem } from "./RenderPriceItem";
import { Fragment } from "react/jsx-runtime";

interface PriceCardProps extends PriceItemList {}

export const PriceCard = ({ id, list, video, userName }: PriceCardProps) => {
  return (
    <StyledPriceCard>
      <VideoBlock id={id} video={video} className="video_block" />
      <Text
        custFontSize={40}
        fontFamily="MVCrooker"
        custLineHeight="4.8rem"
        fontWeight="semiBold"
        mb={20}
      >
        {userName}
      </Text>
      <div className="list_1">
        {list?.map(({ id, title, subtitle, items }) => (
          <Fragment key={id}>
            <div>
              <Text custFontSize={27} align="center" fontWeight="medium" mb={10}>
                {title}
              </Text>
              {subtitle && (
                <Text custFontSize={27} fontWeight="semiBold" align="center">
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
    gap: 4rem;
    width: 100%;
  }

  .list_2 {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;
