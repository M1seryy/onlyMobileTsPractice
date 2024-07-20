import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  {
    id: 1,
    task: "Купити продукти",
    dueDate: "2024-07-18",
    priority: "high",
    completed: false,
  },
  {
    id: 2,
    task: "Підготувати презентацію",
    dueDate: "2024-07-20",
    priority: "medium",
    completed: false,
  },
  {
    id: 3,
    task: "Зустріч з друзями",
    dueDate: "2024-07-21",
    priority: "low",
    completed: false,
  },
  {
    id: 4,
    task: "Оплатити рахунки",
    dueDate: "2024-07-17",
    priority: "high",
    completed: true,
  },
];

const taskSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const {} = taskSlice.actions;
export default taskSlice.reducer;
