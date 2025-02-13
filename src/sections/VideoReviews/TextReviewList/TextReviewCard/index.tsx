import { Flex, Icon, Text } from "@/ui";
import styled from "styled-components";
import { TextReviewItem } from "../constants";

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
      <Flex gap={13}>
        <img className="avatar" src={userAvatar} />
        <div className="wrapper">
          <Icon svg={NetworkIcon} size={42} />
          <Text custFontSize={28} fontWeight="medium">
            {userNickname}
          </Text>
          <Text fontSize="l" className="username" fontWeight="medium">
            {userName}
          </Text>
        </div>
      </Flex>
      <div className="main">
        <Text fontSize="l">{text}</Text>
      </div>
    </StyledTextReviewCard>
  );
};

const StyledTextReviewCard = styled.div`
  padding: 2.7rem;
  border-radius: 2rem;
  background-color: var(--insted-white-color);
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  gap: 2.7rem;

  .avatar {
    width: 6.8rem;
    height: 6.8rem;
  }

  .wrapper {
    display: grid;
    gap: 0.8rem;
    grid-template-columns: min-content 1fr;
    align-items: center;
    grid-template-rows: repeat(2, min-content);
  }

  .username {
    grid-column: 2 / 3;
  }

  .main {
    max-height: 60rem;
    overflow: auto;
  }
`;
