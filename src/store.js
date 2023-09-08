import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User"; //can give any name while importing
import appTheme from "./Theme";
const store = configureStore({
  reducer: {
    user: userReducer,
    theme: appTheme
  }
});

export default store;
