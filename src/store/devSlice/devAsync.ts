import { ICategory } from "@/types/ICategory";
import { IDevState } from "@/types/IDevState";
import { IItem } from "@/types/IItem";
import { ISubcategory } from "@/types/ISubcategory";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "user/fetchCategoriesStatus",
  async () => {
    const categories: ICategory[] = await axios
      .get(`${process.env.API_URL}category`)
      .then((res) => res.data);
    return categories;
  }
);

export const addCategory = createAsyncThunk(
  "user/addCategoryStatus",
  async (title: string) => {
    const category: ICategory = await axios
      .post(`${process.env.API_URL}category?title=${title}`)
      .then((res) => res.data);
    return category;
  }
);

export const deleteCategory = createAsyncThunk(
  "user/deleteCategoryStatus",
  async (id: number) => {
    await axios
      .delete(`${process.env.API_URL}category/${id}`)
      .then((res) => res.data);
    return id;
  }
);

export const addSubcategory = createAsyncThunk(
  "user/addSubcategoryStatus",
  async (params: { title: string; categoryId: string }) => {
    const { title, categoryId } = params;
    const subcategory: ISubcategory = await axios
      .post(
        `${process.env.API_URL}subcategory?title=${title}&categoryId=${categoryId}`
      )
      .then((res) => res.data);
    return subcategory;
  }
);

export const deleteSubcategory = createAsyncThunk(
  "user/deleteSubcategoryStatus",
  async (id: number) => {
    await axios
      .delete(`${process.env.API_URL}subcategory/${id}`)
      .then((res) => res.data);
    return id;
  }
);

export const fetchSubcategories = createAsyncThunk(
  "user/fetchSubcategoriesStatus",
  async () => {
    const subcategories: ISubcategory[] = await axios
      .get(`${process.env.API_URL}subcategory`)
      .then((res) => res.data);
    return subcategories;
  }
);

export const addItems = createAsyncThunk(
  "user/addItemsStatus",
  async (items: IItem[]) => {
    fetch(`${process.env.API_URL}item/all`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items,
      }),
    });
  }
);

export const fetchAllItems = createAsyncThunk(
  "user/fetchAllItemsStatus",
  async () => {
    const items: IItem[] = await axios
      .get(`${process.env.API_URL}item`)
      .then((res) => res.data.rows);
    return items;
  }
);

export const changeItemsCategory = createAsyncThunk(
  "user/changeItemsCategoryStatus",
  async (params: {
    items: GridRowSelectionModel;
    subcategoryId: number | string;
    subcategories: ISubcategory[];
    image: any;
  }) => {
    const { items, subcategoryId, subcategories, image } = params;
    const categoryId = subcategories.find(
      (item) => item.id === subcategoryId
    )?.categoryId;
    const formData = new FormData();
    formData.append("items", JSON.stringify(items));
    formData.append("subCategoryId", String(subcategoryId));
    formData.append("categoryId", String(categoryId));
    formData.append("img", image);

    await axios.post(`${process.env.API_URL}item/changecategory`, formData);
  }
);

export const extraReducers = (builder: ActionReducerMapBuilder<IDevState>) => {
  builder.addCase(fetchCategories.fulfilled, (state, action) => {
    state.categories = [...action.payload];
  });
  builder.addCase(addCategory.fulfilled, (state, action) => {
    state.categories = [...state.categories, action.payload];
  });
  builder.addCase(addSubcategory.fulfilled, (state, action) => {
    state.subcategories = [...state.subcategories, action.payload];
  });
  builder.addCase(fetchSubcategories.fulfilled, (state, action) => {
    state.subcategories = [...action.payload];
  });
  builder.addCase(deleteCategory.fulfilled, (state, action) => {
    console.log(action.payload);
    state.categories = state.categories.filter(
      (category) => category.id !== action.payload
    );
  });
  builder.addCase(deleteSubcategory.fulfilled, (state, action) => {
    state.subcategories = state.subcategories.filter(
      (subcategory) => subcategory.id !== action.payload
    );
  });
  builder.addCase(fetchAllItems.fulfilled, (state, action) => {
    state.items = action.payload;
  });
};
