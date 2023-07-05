"use client";
import { IUserState } from "@/types/IUserState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { extraReducers } from "./userAsync";
import { IBasket } from "@/types/IBasket";
import { IBasketOrig } from "@/types/IBasketOrig";
import { type } from "os";

const initialState: IUserState = {
  isAuth: false,
  userId: null,
  basket: [],
  message: {
    open: false,
    title: null,
    type: undefined,
  },
  basketOrig: [],
  searchValue: "",
  searchItems: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setBasket(state, action: PayloadAction<IBasket[]>) {
      state.basket = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    deleteBasket(state) {
      state.basket = [];
      state.basketOrig = [];
      localStorage.setItem("krepche-basket", "");
    },
    deleteBasketItem(state, action: PayloadAction<number>) {
      state.basketOrig = state.basketOrig.filter(
        (item) => item?.id !== action.payload
      );
      const basket = state.basketOrig.map((item) => {
        if (item?.id !== action.payload) {
          return {
            id: item?.id,
            count: item !== null ? item.count + 1 : null,
          };
        }
      });
      localStorage.setItem("krepche-basket", JSON.stringify(basket));
    },
    changeCount(state, action: PayloadAction<IBasketOrig>) {
      const basket = state.basketOrig.map((item) => {
        if (item?.id === action.payload.id) {
          return { id: action.payload.id, count: action.payload.count + 1 };
        } else {
          return {
            id: item?.id,
            count: item?.count ? item?.count + 1 : item?.count,
          };
        }
      });
      state.basketOrig = state.basketOrig.map((item) =>
        item?.id === action.payload.id
          ? { ...action.payload }
          : item !== null
          ? { ...item }
          : null
      );
      localStorage.setItem("krepche-basket", JSON.stringify(basket));
    },
    addToBasket(state, action: PayloadAction<IBasket>) {
      localStorage.setItem("krepche-basket", "");
      if (state.basket.find((item) => item.id === action.payload.id)) {
        state.basket = state.basket.map((item) =>
          item.id === action.payload.id
            ? { id: item.id, count: item.count + 1 }
            : { ...item }
        );
      } else {
        state.basket = [...state.basket, action.payload];
      }
      localStorage.setItem("krepche-basket", JSON.stringify(state.basket));
    },
    changeMessage(state, action: PayloadAction<Pick<IUserState, "message">>) {
      state.message = action.payload.message;
    },
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
  extraReducers,
});

export const {
  changeMessage,
  setIsAuth,
  addToBasket,
  changeCount,
  deleteBasketItem,
  deleteBasket,
  setSearch,
  setBasket,
} = userSlice.actions;

export default userSlice.reducer;
