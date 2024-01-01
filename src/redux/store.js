import { configureStore } from "@reduxjs/toolkit";

import langReducer from "../redux/langSlice";

export default configureStore({
  reducer: {
    language: langReducer,
  },
});
