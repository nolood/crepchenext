"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { selectSearchValue } from "@/store/userSlice/userSelectors";
import { setSearch } from "@/store/userSlice/userSlice";
import { TextField } from "@mui/material";
import { ChangeEvent, useCallback, useState } from "react";
import debounce from "lodash.debounce";
import { getSearchItems } from "@/store/userSlice/userAsync";

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const updateSearchValue = useCallback(
    debounce((e) => {
      dispatch(getSearchItems(e.target.value));
    }, 700),
    []
  );
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    updateSearchValue(e);
  };
  return (
    <TextField
      placeholder="Поиск товаров..."
      value={searchValue}
      onChange={onChangeInput}
      sx={{
        width: "100%",
        mb: "2rem",
      }}
    />
  );
};

export default Search;
