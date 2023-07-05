"use client";
import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { getBasket } from "@/store/userSlice/userAsync";
import { selectBasketOrig } from "@/store/userSlice/userSelectors";
import React, { useEffect } from "react";
import BasketItem from "../basketitem/BasketItem";

const BasketList = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectBasketOrig);
  useEffect(() => {
    dispatch(getBasket());
  }, []);
  if (items.length === 0) return <div>В данный момент корзина пустая</div>;
  return (
    <Grid container spacing={2} columns={1}>
      {items.map((item) => (
        <Grid item xs={8} key={item?.id}>
          {item !== null && <BasketItem item={item} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default BasketList;
