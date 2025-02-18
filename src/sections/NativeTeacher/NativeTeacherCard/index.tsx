import { Card, Flex, Icon, Text } from "@/ui";

import GreenCircleIcon from "@/assets/icons/circle_4.svg";
import RedLineIcon from "@/assets/icons/red_line_4.svg";
import avatar from "@/assets/images/avatar-native-teacher.png";
import styled from "styled-components";
import { BREAKPOINTS } from "@/constants";

import DashIcon from "@/assets/icons/dash_1.svg";

export const NativeTeacherCard = () => {
  return (
    <StyledTeacherCard>
      <Flex gap={32} align="center" className="wrapper_1">
        <img src={avatar} className="avatar" />

        <div className="rightContent">
          <Text fontSize="xl" fontFamily="MVCrooker" className="teacherName">
            MASON 🇺🇸
          </Text>
          <Text fontSize="l" mb={24} className="description">
            индивидуальные занятия{" "}
            <Text as="span" custFontSize="inherit" fontWeight="bold">
              с носителем языка
            </Text>
          </Text>

          <ul className="pricesList">
            <li>
              <Text fontSize="l" color="accent" fontWeight="semiBold" className="text">
                30 минут
              </Text>
              <Icon svg={DashIcon} className="dashIcon" />
              <Text fontSize="l" className="current_price text" fontWeight="semiBold">
                $ 15
              </Text>
            </li>

            <li>
              <Text fontSize="l" color="accent" fontWeight="semiBold" className="text">
                1 час
              </Text>
              <Icon svg={DashIcon} className="dashIcon" />
              <div className="wrapper">
                <div className="oldPrice">
                  <Text fontSize="l" fontWeight="medium" className="text">
                    $ 30
                  </Text>
                  <Icon svg={RedLineIcon} className="redLineIcon" />
                </div>
                <div className="newPrice">
                  <div className="innerWrapper">
                    <Text fontSize="l" fontWeight="medium" className="text">
                      $ 25
                    </Text>
                    <Icon svg={GreenCircleIcon} className="circle" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Flex>
    </StyledTeacherCard>
  );
};

export const StyledTeacherCard = styled(Card)`
  display: flex;
  justify-content: center;

  .teacherName {
    font-size: 3.6rem;
    line-height: 4.4rem;
    margin-bottom: 1rem;
  }

  .avatar {
    width: 25rem;
    height: 25rem;
  }

  .pricesList {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }

  .wrapper {
    position: relative;
  }

  .oldPrice {
    position: relative;
    bottom: -10px;
    right: -10px;

    .redLineIcon {
      position: absolute;
      top: 2px;
      left: -9px;
    }
  }

  .newPrice {
    position: absolute;
    top: 1px;
    right: -79px;
    transform: rotate(10deg);

    .innerWrapper {
      position: relative;
    }

    .circle {
      top: -14px;
      right: -28px;
      position: absolute;
    }
  }

  /* TODO: избавиться от этого */
  @media screen and (max-width: 1376px) {
    .avatar {
      width: 180px;
      height: 180px;
    }

    .description {
      font-size: 2.2rem;
      line-height: 3rem;
    }

    .pricesList {
      gap: 1rem;
    }

    .pricesList * {
      font-size: 2.2rem;
      line-height: 3rem;
    }

    .dashIcon {
      width: 26px !important;
    }

    .redLineIcon {
      width: 66px !important;
      top: 5px !important;
    }

    .newPrice {
      .circle {
        top: -14px;
        right: -24px;
        position: absolute;
        width: 8rem;
      }
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.laptopLow}px) {
    width: 100%;
    max-width: 80rem;

    .avatar {
      width: clamp(200px, 24vw, 232px);
      height: clamp(200px, 24vw, 232px);
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    padding: 2rem !important;
    width: 100%;
    max-width: 80rem;

    .wrapper_1 {
      gap: 1.6rem !important;
      display: flex;
      flex-direction: column;
    }

    .rightContent {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .description {
      margin-bottom: 1rem !important;
      text-align: center !important;
    }
  }
`;
