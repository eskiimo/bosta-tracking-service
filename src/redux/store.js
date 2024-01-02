import { configureStore } from "@reduxjs/toolkit";

import langReducer from "../redux/langSlice";
import shippingSlice from "./shippingSlice";

export default configureStore({
  reducer: {
    language: langReducer,
    shipping: shippingSlice,
  },
});
