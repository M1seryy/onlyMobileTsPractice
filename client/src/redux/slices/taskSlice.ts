import { createSlice } from "@reduxjs/toolkit";

interface taskData {
  id: number;
  title: string;
  complete: boolean;
  persantage: number;
}

const initialState: taskData[] = [
  {
    id: Math.random(),
    title: "Real Estate Website Design",
    complete: true,
    persantage: 75,
  },
  {
    id: Math.random(),
    title: "Finance Mobile App Design",
    complete: false,
    persantage: 50,
  },
  {
    id: Math.random(),
    title: "Real Estate Website Design",
    complete: false,
    persantage: 0,
  },
];

const taskSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const {} = taskSlice.actions;
export default taskSlice.reducer;
