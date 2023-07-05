import { IUserState } from "@/types/IUserState";

export const selectIsAuth = (state: { user: IUserState }) => state.user.isAuth;
export const selectMessage = (state: { user: IUserState }) =>
  state.user.message;
export const selectUserId = (state: { user: IUserState }) => state.user.userId;
export const selectBasket = (state: { user: IUserState }) => state.user.basket;
export const selectBasketOrig = (state: { user: IUserState }) =>
  state.user.basketOrig;
export const selectSearchValue = (state: { user: IUserState }) =>
  state.user.searchValue;

export const selectSearchItems = (state: { user: IUserState }) =>
  state.user.searchItems;
