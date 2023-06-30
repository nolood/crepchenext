import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import devSlice from "./devSlice/devSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    dev: devSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
