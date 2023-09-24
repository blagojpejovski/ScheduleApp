import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export type Subject = {
  id: number;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  minTime: string;
  maxTime: string;
};

export type Slot = {
  id: number;
  startTime: string;
  endTime: string;
};

type ScheduleState = {
  subjects: Subject[];
  slots: Slot[];
  minTime: string;
  maxTime: string;
};

const initialState: ScheduleState = {
  subjects: [],
  slots: [
    {
      id: 50,
      startTime: dayjs().hour(9).minute(0).toString(),
      endTime: dayjs().hour(17).minute(0).toString(),
    },
  ],
  minTime: dayjs().hour(9).minute(0).toString(),
  maxTime: dayjs().hour(17).minute(0).toString(),
};

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    addSubject: (state, action: PayloadAction<Omit<Subject, "id">>) => {
      // generate id
      const id = state.subjects.length;
      state.subjects.push({
        ...action.payload,
        id,
      });

      // sort the subjects
      state.subjects.sort((a, b) => {
        if (a.startTime < b.startTime) {
          return -1;
        }
        if (a.startTime > b.startTime) {
          return 1;
        }
        return 0;
      });

      // find which slot the subject belongs to
      const slotIndex = state.slots.findIndex((slot) => {
        return (
          slot.startTime <= action.payload.startTime &&
          slot.endTime >= action.payload.endTime
        );
      });

      // remove the slot from the list of slots
      const slot = state.slots[slotIndex];
      state.slots.splice(slotIndex, 1);

      // add two new slots to the list of slots
      if (dayjs(slot.startTime).isBefore(dayjs(action.payload.startTime))) {
        state.slots.push({
          id: slot.id + 1,
          startTime: slot.startTime,
          endTime: action.payload.startTime,
        });
      }

      if (dayjs(slot.endTime).isAfter(dayjs(action.payload.endTime))) {
        state.slots.push({
          id: slot.id + 2,
          startTime: action.payload.endTime,
          endTime: slot.endTime,
        });
      }

      // sort the slots
      state.slots.sort((a, b) => {
        if (a.startTime < b.startTime) {
          return -1;
        }
        if (a.startTime > b.startTime) {
          return 1;
        }
        return 0;
      });
    },
    editSubject: (state, action: PayloadAction<Subject>) => {
      const { id } = action.payload;
      const subjectIndex = state.subjects.findIndex((s) => s.id === id);
      if (subjectIndex !== -1) {
        state.subjects[subjectIndex] = action.payload;
      }
    },
    updateSubjectTime: (
      state,
      action: PayloadAction<{ id: number; startTime: string; endTime: string }>
    ) => {
      const { id, startTime, endTime } = action.payload;
      const subjectIndex = state.subjects.findIndex((s) => s.id === id);
      if (subjectIndex !== -1) {
        state.subjects[subjectIndex].startTime = startTime;
        state.subjects[subjectIndex].endTime = endTime;
      }

      // sort the subjects
      state.subjects.sort((a, b) => {
        if (a.startTime < b.startTime) {
          return -1;
        }
        if (a.startTime > b.startTime) {
          return 1;
        }
        return 0;
      });

      // recalculate which slots can exist
      // remove all slots
      state.slots = [];
      const subjects = state.subjects;
      // sort subjects by start time
      subjects.sort((a, b) => {
        if (a.startTime < b.startTime) {
          return -1;
        }
        if (a.startTime > b.startTime) {
          return 1;
        }
        return 0;
      });
      // add slots
      const firstSubjectIsAtMinTime = subjects[0].startTime === state.minTime;
      const lastSubjectIsAtMaxTime =
        subjects[subjects.length - 1].endTime === state.maxTime;
      if (!firstSubjectIsAtMinTime) {
        state.slots.push({
          id: 0,
          startTime: state.minTime,
          endTime: subjects[0].startTime,
        });
      }
      for (let i = 0; i < subjects.length - 1; i++) {
        state.slots.push({
          id: i + 1,
          startTime: subjects[i].endTime,
          endTime: subjects[i + 1].startTime,
        });
      }
      if (!lastSubjectIsAtMaxTime) {
        state.slots.push({
          id: subjects.length,
          startTime: subjects[subjects.length - 1].endTime,
          endTime: state.maxTime,
        });
      }
    },
  },
});

export const { addSubject, editSubject, updateSubjectTime } =
  scheduleSlice.actions;

export default scheduleSlice.reducer;
