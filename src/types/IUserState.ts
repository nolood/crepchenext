import { AlertColor } from "@mui/material";
import { IItem } from "./IItem";
import { IBasket } from "./IBasket";
import { IBasketOrig } from "./IBasketOrig";

export interface IUserState {
  isAuth: boolean;
  userId: null | number;
  basket: IBasket[];
  message: {
    open: boolean;
    title: null | string;
    type: AlertColor | undefined;
  };
  basketOrig: IBasketOrig[] | Array<IBasketOrig | null>;
  searchValue: string;
  searchItems: IItem[];
}
