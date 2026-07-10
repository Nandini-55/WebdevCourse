import { configureStore } from "@reduxjs/toolkit";
//configure - basic setup

import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
