// import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const loginUser = createAsyncThunk(
//   "user/loginUserStatus",
//   async ({ email, password }: AuthData) => {
//     return axios
//       .post(`${import.meta.env.VITE_SERVER_URL}/user/login`, {
//         email,
//         password,
//       })
//       .then((res) => res.data)
//       .catch((error) => error.response.data);
//   }
// );

// export const regUser = createAsyncThunk(
//   "user/regUserStatus",
//   async ({ email, password }: AuthData) => {
//     return axios
//       .post(`${import.meta.env.VITE_SERVER_URL}/user/registration`, {
//         email,
//         password,
//       })
//       .then((res) => res.data)
//       .catch((error) => error.response.data);
//   }
// );

// export const checkAuth = createAsyncThunk(
//   "user/checkAuthStatus",
//   async (token: string) => {
//     return axios
//       .get(`${import.meta.env.VITE_SERVER_URL}/user/auth`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => res.data.auth)
//       .catch(() => false);
//   }
// );

// export const extraReducers = (builder: ActionReducerMapBuilder<UserState>) => {
//   builder.addCase(loginUser.fulfilled, (state, action) => {
//     if (action.payload.message === "success") {
//       localStorage.setItem(
//         "crepchetoken",
//         JSON.stringify(action.payload.token)
//       );
//       state.isAuth = true;
//       state.message.title = "Вход успешно выполнен";
//       state.message.type = "success";
//     } else {
//       state.message.title = action.payload;
//       state.message.type = "error";
//     }
//   });

//   builder.addCase(regUser.fulfilled, (state, action) => {
//     if (action.payload === "success") {
//       state.message.title = "Регистрация прошла успешно!";
//       state.message.type = "success";
//     } else {
//       state.message.title = action.payload;
//       state.message.type = "error";
//     }
//   });

//   builder.addCase(checkAuth.fulfilled, (state, action) => {
//     state.isAuth = action.payload === true;
//     state.isLoading = false;
//   });

//   builder.addCase(checkAuth.pending, (state) => {
//     state.isLoading = true;
//   });

//   builder.addCase(checkAuth.rejected, (state) => {
//     state.isLoading = false;
//   });
// };
