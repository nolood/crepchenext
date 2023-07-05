import { IAuthData } from "@/types/IAuthData";
import { IBasket } from "@/types/IBasket";
import { IBasketOrig } from "@/types/IBasketOrig";
import { IItem } from "@/types/IItem";
import { IUserState } from "@/types/IUserState";
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export const loginUser = createAsyncThunk(
  "user/loginUserStatus",
  async ({ email, password }: IAuthData) => {
    return await axios
      .post(
        `${process.env.API_URL}user/login?email=${email}&password=${password}`
      )
      .then((res) => res.data)
      .catch((e) => {
        throw e.response.data;
      });
  }
);

export const regUser = createAsyncThunk(
  "user/regUserStatus",
  async ({ email, password }: IAuthData) => {
    await axios
      .post(
        `${process.env.API_URL}user/registration?email=${email}&password=${password}`
      )
      .catch((e) => {
        throw e.response.data;
      });
  }
);

export const checkIsAuth = createAsyncThunk(
  "user/checkIsAuthStatus",
  async () => {
    const token = JSON.parse(String(localStorage.getItem("krepche-token")));
    const userId = await axios.get(`${process.env.API_URL}user/auth`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return userId.data;
  }
);

export const getBasket = createAsyncThunk("user/getBasketStatus", async () => {
  const ids: IBasket[] =
    JSON.parse(String(localStorage.getItem("krepche-basket"))) || [];
  const items: IItem[] | Array<IItem | null> = await axios
    .post(`${process.env.API_URL}item/ids`, {
      itemsIds: JSON.stringify(ids.map((item) => item.id)),
    })
    .then((res) => res.data);
  const newItems = items.map((item) => {
    if (item !== null) {
      const id = item?.id;
      const found = ids.find((obj) => obj.id === id);
      return found ? { ...item, count: found.count } : { ...item };
    } else {
      return null;
    }
  });
  return newItems as IBasketOrig[] | Array<IBasketOrig | null>;
});

export const getSearchItems = createAsyncThunk(
  "user/getSearchItemsStatus",
  async (value: string) => {
    if (value.length > 0) {
      const items: IItem[] = await axios
        .post(`${process.env.API_URL}item/search?search=${value}`)
        .then((res) => res.data);
      return items !== undefined ? items : [];
    }
  }
);

export const extraReducers = (builder: ActionReducerMapBuilder<IUserState>) => {
  builder.addCase(getSearchItems.fulfilled, (state, action) => {
    //@ts-ignore
    state.searchItems = action.payload;
  });

  builder.addCase(regUser.fulfilled, (state) => {
    state.message = {
      open: true,
      title: "Регистрация прошла успешно!",
      type: "success",
    };
  });
  builder.addCase(regUser.rejected, (state, action) => {
    state.message = {
      open: true,
      title: String(action.error.message),
      type: "error",
    };
  });

  builder.addCase(loginUser.fulfilled, (state, action) => {
    state.message = {
      open: true,
      title: "Вы вошли в аккаунт!",
      type: "success",
    };
    localStorage.setItem("krepche-token", JSON.stringify(action.payload.token));
    state.isAuth = true;
  });
  builder.addCase(loginUser.rejected, (state, action) => {
    state.message = {
      open: true,
      title: String(action.error.message),
      type: "error",
    };
  });

  builder.addCase(checkIsAuth.fulfilled, (state, action) => {
    state.userId = action.payload.userId;
    state.isAuth = true;
  });
  builder.addCase(checkIsAuth.rejected, (state, action) => {
    state.isAuth = false;
  });

  builder.addCase(getBasket.fulfilled, (state, action) => {
    state.basketOrig = action.payload;
  });
};
