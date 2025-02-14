import { Icon, Text, Title } from "@/ui";
import { ReactNode } from "react";
import styled from "styled-components";

import PushPinIcon from "@/assets/icons/pushpin.svg";

export interface TeacherCardProps {
  name: string;
  listAchievements: string[];
  otherInfo: ReactNode;
  avatar: string;
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
    <StyledTeacherCard className="teachers__card-teacher swiper-slide">
      <div className="content">
        <Icon svg={PushPinIcon} className="pushpin-icon" size={50} />
        <img src={avatar} className="avatar" />

        <Title as="h4" color="accent" mb="2rem" mt="2rem">
          {name}
        </Title>

        <StyledAchievementsList>
          {listAchievements.map((item) => (
            <Text key={item} as="li" fontSize="l" className="achievement">
              {item}
            </Text>
          ))}
        </StyledAchievementsList>

        {otherInfo}
        {addonAfter}
      </div>
    </StyledTeacherCard>
  );
};

export const StyledTeacherCard = styled.li`
  background-color: #c0cacc;
  border-radius: 3.2rem;
  padding: 2.6rem;
  width: 48rem;
  flex-shrink: 0;

  position: relative;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .avatar {
    height: 21rem;
    margin-bottom: 1.3rem;
  }

  .pushpin-icon {
    position: absolute;
    top: -1.6rem;
    left: -1.2rem;
  }
`;

export const StyledAchievementsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  margin: 0 2rem 4rem 3.2rem;

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
      right: 16px;
      transform: translateY(-50%);
    }
  }
`;
