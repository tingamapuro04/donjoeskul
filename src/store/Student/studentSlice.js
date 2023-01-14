import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
};

const studentSlice = createSlice({
  name: 'Students',
  initialState,
  ruducers: {
    AddStudent: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { AddStudent } = studentSlice.actions;
const studentReducer = studentSlice.reducer
export default studentReducer;
