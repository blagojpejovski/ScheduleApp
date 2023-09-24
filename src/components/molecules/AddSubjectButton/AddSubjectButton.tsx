import { Add } from "@mui/icons-material";
import { Box, Divider, Typography, styled } from "@mui/material";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { addSubject } from "../../../store/slices/scheduleSlice";
import { RootState } from "../../../store/store";

const AddSubjectButtonContainer = styled(Box)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(5)};
`;

const ElementsContainer = styled(Box)`
  display: flex;
  width: 100%;
  min-height: 40px;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border: 1px dotted #ccc;
  padding: ${({ theme }) => theme.spacing(0.5)};
  border-radius: ${({ theme }) => theme.spacing(1)};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

const HoursContainer = styled(Box)`
  position: absolute;
  left: ${({ theme }) => theme.spacing(2)};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};

  @media (max-width: 768px) {
    position: relative;
    height: 50px;
    box-sizing: border-box;
    width: 100%;
    justify-content: center;
    border-bottom: 1px dotted #ccc;
    left: 0;
  }
`;

const AddIcon = styled(Add)``;

const AddButtonContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  transition: all 0.1s ease-out;

  &:hover {
    cursor: pointer;
  }

  &:hover svg {
    color: ${({ theme }) => theme.palette.grey[600]};
  }

  &:hover span {
    color: ${({ theme }) => theme.palette.primary.light};
  }

  @media (max-width: 768px) {
    height: 50px;
    box-sizing: border-box;
  }
`;

type AddSubjectButtonProps = {
  startTime: string;
  endTime: string;
};

const AddSubjectButton = ({ startTime, endTime }: AddSubjectButtonProps) => {
  const diffInMinutes = dayjs(endTime).diff(startTime, "minute");
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInMinutesRemainder = diffInMinutes % 60;

  const dispatch = useDispatch();
  const { slots, minTime, maxTime } = useSelector((state: RootState) => ({
    slots: state.schedule.slots,
    minTime: state.schedule.minTime,
    maxTime: state.schedule.maxTime,
  }));

  const slotsLength = slots.length;
  const isDefaultSlot =
    slotsLength === 1 &&
    slots[0].startTime === minTime &&
    slots[0].endTime === maxTime;

  const onAddSubject = () =>
    dispatch(
      addSubject({
        title: "New subject",
        description: "",
        startTime: isDefaultSlot
          ? dayjs(startTime).add(2, "hour").toString()
          : startTime,
        endTime: isDefaultSlot
          ? dayjs(endTime).subtract(2, "hour").toString()
          : endTime,
        minTime: isDefaultSlot
          ? dayjs(startTime).add(2, "hour").toString()
          : startTime,
        maxTime: isDefaultSlot
          ? dayjs(endTime).subtract(2, "hour").toString()
          : endTime,
      })
    );

  return (
    <AddSubjectButtonContainer>
      <ElementsContainer>
        <HoursContainer>
          <Typography variant="body1" fontWeight="bold">
            {dayjs(startTime).format("HH:mm")} -{" "}
            {dayjs(endTime).format("HH:mm")}
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: "50%", alignSelf: "center" }}
          />
          <Typography variant="caption">
            {diffInHours}h
            {`${
              diffInMinutesRemainder
                ? " and " + diffInMinutesRemainder + "m"
                : ""
            }`}{" "}
            gap
          </Typography>
        </HoursContainer>
        <AddButtonContainer onClick={onAddSubject}>
          <AddIcon />
          <Typography variant="caption" fontWeight="bold" color="primary">
            Add a subject here
          </Typography>
        </AddButtonContainer>
      </ElementsContainer>
    </AddSubjectButtonContainer>
  );
};

export default AddSubjectButton;
