import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "./tasks/tasks.reducer";
import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
export const persister = persistStore(store);

export default store;
