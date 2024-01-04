import { configureStore } from "@reduxjs/toolkit";

import langReducer from "./langSlice";
import shippingSlice from "./shippingSlice";

export const store = configureStore({
  reducer: {
    language: langReducer,
    shipping: shippingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
