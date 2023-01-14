import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const studentSlice = createSlice({
  name: 'Students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addStudent } = studentSlice.actions;
const studentReducer = studentSlice.reducer
export default studentReducer;
