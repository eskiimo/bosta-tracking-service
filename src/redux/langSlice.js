import { createSlice } from "@reduxjs/toolkit";

export const langSlice = createSlice({
  name: "language",
  initialState: {
    value: "en",
  },
  reducers: {
    translate: (state) => {
      state.value = state.value === "ar" ? "en" : "ar";
    },
  },
});

export const { translate } = langSlice.actions;

export default langSlice.reducer;
