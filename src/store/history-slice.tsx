import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: {
    test: false,
  },
  reducers: {
    toggleMoreInfo(state, action) {},
  },
});

export const historyActions = historySlice.actions;

export default historySlice;
