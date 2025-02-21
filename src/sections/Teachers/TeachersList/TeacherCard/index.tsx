import { Flex, Icon, Text, Title } from "@/ui";
import { ReactNode } from "react";
import styled from "styled-components";

import PushPinIcon from "@/assets/icons/pushpin.svg";
import { BREAKPOINTS } from "@/constants";

export interface TeacherCardProps {
  name: string;
  listAchievements: string[];
  otherInfo: ReactNode;
  avatar: ReactNode;
  addonAfter?: ReactNode;
}

export const TeacherCard = ({
  avatar,
  name,
  otherInfo,
  listAchievements,
  addonAfter,
}: TeacherCardProps) => {
  return (
    <StyledTeacherCard className="teachers__card-teacher">
      <div className="content">
        <Icon svg={PushPinIcon} className="pushpin-icon" size={50} />

        <div className="wrapper">
          <Flex vertical align="center" className="wrapper_1">
            <div className="avatarWrapper">{avatar}</div>

            <Title as="h4" color="accent" mt="2rem">
              {name}
            </Title>
          </Flex>

          <StyledAchievementsList>
            {listAchievements.map((item) => (
              <Text key={item} as="li" fontSize="l" className="achievement" fontWeight="bold" fontFamily="MVCrooker">
                {item}
              </Text>
            ))}
          </StyledAchievementsList>
        </div>

        {otherInfo}
        {addonAfter}
      </div>
    </StyledTeacherCard>
  );
};

export const StyledTeacherCard = styled.div`
  padding-left: 1rem;
  padding-top: 1.5rem;
  flex-shrink: 0;
  width: 100%;

  .content {
    border-radius: 3.2rem;
    padding: 2.6rem;
    position: relative;
    background-color: #c0cacc;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .avatarWrapper {
    background-color: #547793;
    border-radius: 1.2rem;
    overflow: hidden;
    width: 210px;
    height: 210px;
    display: grid;
    justify-content: center;
    align-content: end;

    .emoji {
      font-size: 160px;
      width: 100%;
      line-height: 100%;
    }
  }

  .wrapper_1 {
    margin-bottom: 2rem;
  }

  .avatar {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .pushpin-icon {
    position: absolute;
    top: -1.6rem;
    left: -1.2rem;
  }

  .wrapper {
    width: 100%;
  }

  @media screen and (max-width: ${BREAKPOINTS.laptop}px) {
    .description_text,
    .description_text * {
      font-size: 18px;
      line-height: 24px;
    }

    .content {
      padding: 2rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow - 2}px) {
    .wrapper {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .avatar {
      max-width: 21rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .avatar {
      max-width: 100%;
    }

    .wrapper_1 {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    .content {
      padding: 1.4rem;
    }

    .avatar {
      max-height: 17rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    .description_text {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

export const StyledAchievementsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 1.3rem;

  margin: 0 0 4rem 3.2rem;

  .achievement {
    position: relative;

    &::after {
      position: absolute;
      top: 50%;
      left: -32px;
      width: 16px;
      height: 16px;
      background-color: var(--accent-color);
      border-radius: 50%;
      content: "";
      transform: translateY(-50%);
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.desktopLow}px) {
    .achievement {
      font-size: 24px;
      line-height: 32px;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptop}px) {
    margin: 0 0 2rem 3.2rem;

    .achievement {
      font-size: 20px;
      line-height: 24px;

      &::after {
        left: -28px;
        width: 12px;
        height: 12px;
      }
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    align-self: center;

    .achievement {
      font-size: 18px;
      line-height: 26px;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.desktop}px) {
    .achievement {
      font-size: 20px;
      line-height: 28px;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    .achievement {
      font-size: 18px;
      line-height: 26px;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    margin-left: 1.6rem;

    .achievement {
      font-size: 14px;
      line-height: 22px;

      &::after {
        left: -20px;
        width: 9px;
        height: 9px;
      }
    }
  }
`;
