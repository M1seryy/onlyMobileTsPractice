import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import axios from "axios";

interface taskItem {
  id: number;
  task: string;
  dueDate: string;
  priority: string;
  completed: boolean;
}

interface taskData {
  // complete: boolean;
  // id: number;
  // persantage: number;
  // title: string;
  todo: taskItem[];
}
const instance = axios.create({
  baseURL: "https://669eba089a1bda3680076f3f.mockapi.io/todo",
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export const getTasks = createAsyncThunk("/api/tasks/get", async () => {
  const responce = await axios.get(
    "https://669eba089a1bda3680076f3f.mockapi.io/todo"
  );
  return responce.data;
});

const initialState: taskData[] = [];

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled, (state, { payload }) => {
      state = payload;
    });
  },
});

export const {} = taskSlice.actions;
export default taskSlice.reducer;
