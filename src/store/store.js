import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./Student/studentSlice";

const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

export default store;
