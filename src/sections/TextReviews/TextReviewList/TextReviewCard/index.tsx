import { Flex, Icon, Text } from "@/ui";
import styled from "styled-components";
import { TextReviewItem } from "../constants";
import { BREAKPOINTS } from "@/constants";

interface TextReviewCardProps extends TextReviewItem {}

export const TextReviewCard = ({
  NetworkIcon,
  userAvatar,
  userName,
  userNickname,
  text,
}: TextReviewCardProps) => {
  return (
    <StyledTextReviewCard>
      <Flex className="container_1">
        <img className="avatar" src={userAvatar} />
        <div className="wrapper">
          <Flex align="center" className="container_2">
            <Icon svg={NetworkIcon} size={30} />
            <Text fontSize="m" fontWeight="medium" className="userNickname">
              {userNickname}
            </Text>
          </Flex>

          <Text fontSize="m" fontWeight="medium" className="userName">
            {userName}
          </Text>
        </div>
      </Flex>
      <div className="main">
        <Text fontSize="m" className="comment">
          {text}
        </Text>
      </div>
    </StyledTextReviewCard>
  );
};

const StyledTextReviewCard = styled.div`
  border-radius: 2rem;
  background-color: var(--insted-white-color);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  padding: 2.7rem;
  gap: 2.7rem;

  .avatar {
    width: 6.8rem;
    height: 6.8rem;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .container_1 {
    gap: 1.3rem;
  }

  .container_2 {
    gap: 1.2rem;
  }

  .username {
    grid-column: 1 / 2;
    font-size: 2rem;
  }

  .main {
    max-height: 60rem;
    overflow: auto;
    padding-right: 1rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.laptop}px) {
    padding: 1.6rem;
    gap: 1.2rem;

    .container_1 {
      gap: 0.8rem;
    }

    .container_2 {
      gap: 0.4rem;
    }

    .avatar {
      width: 5rem;
      height: 5rem;
    }

    .main {
      max-height: 35rem;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    .userNickname {
      font-size: 1.8rem;
      line-height: 2.6rem;
    }

    .userName {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    .comment {
      font-size: 1.8rem;
      line-height: 2.6rem;
    }
  }
`;
