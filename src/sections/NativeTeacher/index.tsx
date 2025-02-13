import { BookingButton, Flex, Icon, SectionTitle, Text } from "@/ui";
import { VideoBlock } from "@/ui/VideoBlock";
import { StyledNativeTeacher, StyledTeacherCard } from "./styles";

import GreenCircleIcon from "@/assets/icons/circle_4.svg";
import LineIcon from "@/assets/icons/dash_1.svg";
import RedLineIcon from "@/assets/icons/red_line_4.svg";
import avatar from "@/assets/images/avatar-native-teacher.png";
import video from "@/assets/videos/mason.mp4";

interface NativeTeacherProps {
  className?: string;
}

export const NativeTeacher = ({ className }: NativeTeacherProps) => {
  return (
    <StyledNativeTeacher id="native-teacher" className={className}>
      <div className="content">
        <SectionTitle color="neutral">беседы с носителем</SectionTitle>
        <Text fontSize="xl" mb={40} color="primary">
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

        <Text mt={40} mb={38} align="center" fontSize="xl" color="primary" fontWeight="semiBold">
          Мэйсон - это просто генератор крутых разговоров. Независимо от того, какой у вас уровень
          английского, он найдёт к вам подход!
        </Text>

        <BookingButton style={{ margin: "0 auto" }} />
      </div>
    </StyledNativeTeacher>
  );
};
