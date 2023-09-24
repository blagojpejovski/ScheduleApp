import { Box, Typography, styled } from "@mui/material";
import ExpandComponent from "../../molecules/ExpandComponent/ExpandComponent";
import SubjectDetails from "../Schedule/SubjectDetails/SubjectDetails";
import { Circle } from "@mui/icons-material";
import { Subject } from "../../../store/slices/scheduleSlice";
import dayjs from "dayjs";

const TimeAndItemContainer = styled(Box)`
  display: flex;
  width: 100%;
  height: 600px;
  max-height: max-content;
  box-sizing: border-box;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(3)};

  @media (max-width: 1080px) {
    height: max-content;
  }
`;

const TimeIconTextContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  padding: 0 ${({ theme }) => theme.spacing(2)};
`;

const SubjectItemContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

type SubjectItemProps = {
  subject: Subject;
};

const SubjectItem = ({ subject }: SubjectItemProps) => (
  <TimeAndItemContainer>
    <TimeIconTextContainer>
      <Circle />
      <Typography fontWeight="600">
        {dayjs(subject.startTime).format("HH:mm")} -{" "}
        {dayjs(subject.endTime).format("HH:mm")}
      </Typography>
    </TimeIconTextContainer>
    <SubjectItemContainer>
      <ExpandComponent />
      <SubjectDetails subject={subject} />
    </SubjectItemContainer>
  </TimeAndItemContainer>
);

export default SubjectItem;
