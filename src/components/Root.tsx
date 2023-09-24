import { Box, styled } from "@mui/material";
import Header from "./atoms/Header/Header";
import ScheduleTabs from "./molecules/ScheduleTabs/ScheduleTabs";
import AddSubjectButton from "./molecules/AddSubjectButton/AddSubjectButton";
import SubjectItem from "./organisms/SubjectItem/SubjectItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const RootContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  min-height: 600px;
  height: auto;
  box-shadow: 3px 10px 9px 0px rgba(0, 0, 0, 0.61);
  -webkit-box-shadow: 3px 10px 9px 0px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 3px 10px 9px 0px rgba(0, 0, 0, 0.61);
  z-index: 2;
  background-color: white;
`;

type ScheduleElement = {
  element: React.ReactNode;
  startTime: string;
  endTime: string;
};

const Root = () => {
  const subjects = useSelector((s: RootState) => s.schedule.subjects);
  const slots = useSelector((s: RootState) => s.schedule.slots);

  const slotElements: ScheduleElement[] = slots.map((slot) => ({
    element: (
      <AddSubjectButton
        key={slot.id}
        startTime={slot.startTime}
        endTime={slot.endTime}
      />
    ),
    startTime: slot.startTime,
    endTime: slot.endTime,
  }));
  const subjectElements: ScheduleElement[] = subjects.map((subject) => ({
    element: <SubjectItem key={subject.id} subject={subject} />,
    startTime: subject.startTime,
    endTime: subject.endTime,
  }));

  const sortedElements = [...slotElements, ...subjectElements]
    .sort(
      (a, b) =>
        new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
    )
    .map((e) => e.element);

  return (
    <RootContainer>
      <Header />
      <ScheduleTabs />
      {sortedElements}
    </RootContainer>
  );
};

export default Root;
