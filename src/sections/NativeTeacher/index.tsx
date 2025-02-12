import { Button, Flex, Icon, Text, Title } from "@/ui";
import { StyledNativeTeacher, StyledTeacherCard } from "./styles";
import { VideoBlock } from "@/ui/VideoBlock";

import video from "@/assets/videos/mason.mp4";
import avatar from "@/assets/images/avatar-native-teacher.png";
import LineIcon from "@/assets/icons/dash_1.svg";
import RedLineIcon from "@/assets/icons/red_line_4.svg";
import GreenCircleIcon from "@/assets/icons/circle_4.svg";

interface NativeTeacherProps {
  className?: string;
}

export const NativeTeacher = ({ className }: NativeTeacherProps) => {
  return (
    <StyledNativeTeacher id="native-teacher" className={className}>
      <div className="content">
        <Title as="h3" align="start" className="title" mb={40}>
          беседы с носителем
        </Title>
        <Text custFontSize={40} mb={50} color="secondary">
          вы всегда можете забронировать занятие c носителем языка в нашей школе
        </Text>

        <div className="content_wrapper">
          <StyledTeacherCard>
            <Flex gap={32} align="center">
              <img src={avatar} className="avatar" />
              <div className="right_content">
                <Text custFontSize={48} custLineHeight="56px" fontFamily="MVCrooker" mb={32}>
                  MASON 🇺🇸
                </Text>
                <Text fontSize="l" mb={24}>
                  индивидуальные занятия{" "}
                  <Text as="span" fontSize="l" fontWeight="bold">
                    с носителем языка
                  </Text>
                </Text>

                <ul className="list_prices">
                  <li>
                    <Text custFontSize={32} color="accent" fontWeight="semiBold">
                      30 минут
                    </Text>
                    <img src="../src/assets/icons/dash_1.svg" className="dash_type_1" />
                    <Text custFontSize={32} className="current_price" fontWeight="semiBold">
                      $ 15
                    </Text>
                  </li>
                  <li>
                    <Text custFontSize={32} color="accent" fontWeight="semiBold">
                      1 час
                    </Text>
                    <Icon svg={LineIcon} />
                    <div className="wrapper">
                      <div className="old_price">
                        <Text custFontSize={25} fontWeight="medium">
                          $ 30
                        </Text>
                        <Icon svg={RedLineIcon} className="red_line" />
                      </div>
                      <div className="new_price">
                        <div className="inner_wrapper">
                          <Text custFontSize={27} fontWeight="medium">
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

          <VideoBlock video={video} className="video_block" />
        </div>

        <Text mt={20} mb={38} align="center" fontSize="xl" color="primary" fontWeight="semiBold">
          Мэйсон - это просто генератор крутых разговоров. Независимо от того, какой у вас уровень
          английского, он найдёт к вам подход!
        </Text>

        <Button m="0 auto">
          <span>записаться на занятие</span>
          <img src="../src/assets/icons/telegram.svg" />
        </Button>
      </div>
    </StyledNativeTeacher>
  );
};
