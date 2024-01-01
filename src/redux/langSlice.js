import { createSlice } from "@reduxjs/toolkit";

export const langSlice = createSlice({
  name: "language",
  initialState: {
    value: "en",
  },
  reducers: {
    translate: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value = state.value === "ar" ? "en" : "ar";
    },
  },
});

// Action creators are generated for each case reducer function
export const { translate } = langSlice.actions;

export default langSlice.reducer;
