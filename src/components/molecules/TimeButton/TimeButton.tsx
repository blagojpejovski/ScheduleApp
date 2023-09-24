import { Box, Button, Typography, styled } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { updateSubjectTime } from "../../../store/slices/scheduleSlice";

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(2)};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

const SubjectTimeContainer = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StlyedTimePicker = styled(TimePicker)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

type TimeButtonProps = {
  minTime?: string;
  maxTime?: string;
  startTime?: string;
  endTime?: string;
  onChange?: (value: string, type: "start" | "end") => void;
  id: number;
  saveButtonDisabled?: boolean;
};

const TimeButton = ({
  minTime,
  maxTime,
  startTime,
  endTime,
  onChange,
  id,
  saveButtonDisabled,
}: TimeButtonProps) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <SubjectTimeContainer>
        <Typography variant="caption">Subject start time</Typography>
        <StlyedTimePicker
          defaultValue={dayjs(minTime)}
          minTime={dayjs(minTime)}
          maxTime={
            dayjs(endTime).isBefore(dayjs(maxTime))
              ? dayjs(endTime)
              : dayjs(maxTime)
          }
          value={dayjs(startTime)}
          onChange={(value) => {
            if (onChange) {
              onChange((value ?? "").toString(), "start");
            }
          }}
        />
      </SubjectTimeContainer>

      <SubjectTimeContainer>
        <Typography variant="caption">Subject end time</Typography>
        <StlyedTimePicker
          defaultValue={dayjs(maxTime)}
          minTime={
            dayjs(startTime).isAfter(dayjs(minTime))
              ? dayjs(startTime)
              : dayjs(minTime)
          }
          maxTime={dayjs(maxTime)}
          value={dayjs(endTime)}
          onChange={(value) => {
            if (onChange) {
              onChange((value ?? "").toString(), "end");
            }
          }}
        />
      </SubjectTimeContainer>
      <Button
        disabled={saveButtonDisabled}
        variant="contained"
        color="primary"
        sx={{
          marginTop: "auto",
          "@media (max-width: 768px)": {
            width: "100%",
          },
        }}
        onClick={() => {
          if (id !== undefined && id !== null && startTime && endTime) {
            dispatch(
              updateSubjectTime({
                startTime,
                endTime,
                id,
              })
            );
          }
        }}>
        Save
      </Button>
    </Container>
  );
};

export default TimeButton;
