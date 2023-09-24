import { Box, TextField, Typography, styled } from "@mui/material";
import EditableText from "../../../atoms/EditableText/EditableText";
import TimeButton from "../../../molecules/TimeButton/TimeButton";
import SpeakersComponent from "../../../molecules/Speakers/Speakers";
import dayjs from "dayjs";
import { Subject, editSubject } from "../../../../store/slices/scheduleSlice";

import { useDispatch } from "react-redux";
import { useState } from "react";

const SubjectDetailsContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  padding: ${({ theme }) => theme.spacing(3)};

  @media (max-width: 1080px) {
    width: 80%;
  }
`;

const TextAreaContainer = styled(Box)`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
`;

type SubjectDetailsProps = {
  subject: Subject;
};

const SubjectDetails = ({ subject }: SubjectDetailsProps) => {
  const dispatch = useDispatch();

  const [startTime, setStartTime] = useState<string>(subject.startTime);
  const [endTime, setEndTime] = useState<string>(subject.endTime);

  const handleTimeChange = (newTime: string, type: "start" | "end") => {
    if (type === "start") {
      setStartTime(newTime);
    } else {
      setEndTime(newTime);
    }
  };

  return (
    <SubjectDetailsContainer>
      <EditableText
        label={"Subject title"}
        value={subject.title}
        onChange={(v) => dispatch(editSubject({ ...subject, title: v }))}
      />

      <TimeButton
        minTime={subject.minTime}
        maxTime={subject.maxTime}
        startTime={startTime}
        endTime={endTime}
        onChange={handleTimeChange}
        id={subject.id}
        saveButtonDisabled={
          subject.startTime === startTime && subject.endTime === endTime
        }
      />

      <TextAreaContainer>
        <Typography variant="caption">Subject description</Typography>
        <TextField
          multiline
          minRows={5}
          rows={5}
          fullWidth
          value={subject.description}
          onChange={(e) =>
            dispatch(editSubject({ ...subject, description: e.target.value }))
          }
        />
      </TextAreaContainer>

      <SpeakersComponent />
    </SubjectDetailsContainer>
  );
};

export default SubjectDetails;
