import { IDevState } from "@/types/IDevState";

export const selectCategories = (state: { dev: IDevState }) =>
  state.dev.categories;
export const selectSubcategories = (state: { dev: IDevState }) =>
  state.dev.subcategories;
export const selectItems = (state: { dev: IDevState }) => state.dev.items;
