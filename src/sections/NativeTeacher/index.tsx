import { BookingButton, SectionTitle, Text } from "@/ui";
import { VideoBlock } from "@/ui/VideoBlock";
import { StyledNativeTeacher } from "./styles";

import video from "@/assets/videos/compressed/mason.mp4";
import { NativeTeacherCard } from "./NativeTeacherCard";

interface NativeTeacherProps {
  className?: string;
}

export const NativeTeacher = ({ className }: NativeTeacherProps) => {
  return (
    <StyledNativeTeacher id="native-teacher" className={className}>
      <div className="content">
        <SectionTitle color="neutral">беседы с носителем</SectionTitle>
        <Text fontSize="l" mb={40} color="primary" className="desc">
          вы всегда можете забронировать занятие c носителем языка в нашей школе
        </Text>

        <div className="contenWrapper">
          <NativeTeacherCard />
          <VideoBlock video={video} className="videoBlock" />
        </div>

        <Text
          mt={40}
          mb={38}
          align="center"
          fontSize="l"
          color="primary"
          fontWeight="semiBold"
          className="desc"
        >
          Мэйсон - это просто генератор крутых разговоров. <br />
          Независимо от того, какой у вас уровень английского, он найдёт к вам подход!
        </Text>

        <BookingButton style={{ margin: "0 auto" }} />
      </div>
    </StyledNativeTeacher>
  );
};
