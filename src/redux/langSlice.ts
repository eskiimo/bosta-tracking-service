import { createSlice } from "@reduxjs/toolkit";
import { Language } from "../interfaces";

const initialState: Language = {
  value: "en",
};

export const langSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    translate: (state) => {
      state.value = state.value === "ar" ? "en" : "ar";
    },
  },
});

export const { translate } = langSlice.actions;

export default langSlice.reducer;
