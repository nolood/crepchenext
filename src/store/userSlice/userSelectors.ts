import { IUserState } from "@/types/IUserState";

export const selectIsAuth = (state: { user: IUserState }) => state.user.isAuth;
