import { createSlice } from "@reduxjs/toolkit";

export const shippingSlice = createSlice({
  name: "shipping",
  initialState: {
    value: {},
  },
  reducers: {
    ship: (state, action) => {
      state.value = {
        ...state.value,
        ...action.payload,
      };
    },
  },
});

export const { ship } = shippingSlice.actions;

export default shippingSlice.reducer;
