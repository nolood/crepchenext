import { IUserState } from "@/types/IUserState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IUserState = {
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
