"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { selectBasket } from "@/store/userSlice/userSelectors";
import { addToBasket } from "@/store/userSlice/userSlice";
import { IItem } from "@/types/IItem";
import { Button } from "@mui/material";
import { FC } from "react";

interface ItemCardButtonProps {
  item: IItem;
}

const ItemCardButton: FC<ItemCardButtonProps> = ({ item }) => {
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
      size="large"
      sx={{ width: "100%", position: "absolute", bottom: "0px" }}
    >
      Добавить в корзину {itemCount ? `(${itemCount})` : ""}
    </Button>
  );
};

export default ItemCardButton;
