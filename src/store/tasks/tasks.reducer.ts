import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { State, ITasks } from "./tasks.types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState: State = {
  tasks: [],
  query: "",
};

const persistConfig = {
  key: "root",
  storage,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    reorderTasks: (state, action: PayloadAction<ITasks[]>) => {
      state.tasks = action.payload;
    },

    setQueryValue: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },

    resetTasks: (state) => {
      state.tasks = [];
    },

    addTask: (state, action: PayloadAction<ITasks>) => {
      state.tasks.unshift(action.payload);
    },

    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.title !== action.payload);
    },

    toggleTaskDone: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.title === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
  },
});

const persistedReducer = persistReducer(persistConfig, tasksSlice.reducer);

export const {
  addTask,
  removeTask,
  toggleTaskDone,
  resetTasks,
  setQueryValue,
  reorderTasks,
} = tasksSlice.actions;

export default persistedReducer;
