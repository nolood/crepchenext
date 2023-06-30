import { IDevState } from "@/types/IDevState";
import { createSlice } from "@reduxjs/toolkit";
import { extraReducers } from "./devAsync";

const initialState: IDevState = {
  categories: [],
  subcategories: [],
  items: [],
};

const devSlice = createSlice({
  name: "dev",
  initialState,
  reducers: {},
  extraReducers,
});

export const {} = devSlice.actions;

export default devSlice.reducer;
