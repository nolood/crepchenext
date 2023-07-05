"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { selectBasket } from "@/store/userSlice/userSelectors";
import { addToBasket } from "@/store/userSlice/userSlice";
import { IItem } from "@/types/IItem";
import { Button } from "@mui/material";
import { FC } from "react";

interface ProductAddBtnProps {
  item: IItem;
}

const ProductAddBtn: FC<ProductAddBtnProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const itemCount = useAppSelector(selectBasket).find(
    (basketItem) => basketItem.id === item.id
  )?.count;
  const handleAddToBasket = () => {
    dispatch(addToBasket({ id: item.id, count: 1 }));
  };
  return (
    <Button
      onClick={handleAddToBasket}
      variant="contained"
      color="primary"
      size="large"
      sx={{ mt: "1rem" }}
    >
      Добавить в корзину {itemCount ? `(${itemCount})` : <></>}
    </Button>
  );
};

export default ProductAddBtn;
