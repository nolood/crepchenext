"use client";
import CModal from "@/components/common/modal/CModal";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { selectBasketOrig } from "@/store/userSlice/userSelectors";
import { deleteBasket } from "@/store/userSlice/userSlice";
import { IBasketOrig } from "@/types/IBasketOrig";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import OfferPlacement from "../offerplacement/OfferPlacement";

const BasketManaging = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const basketOrig = useAppSelector(selectBasketOrig);
  //@ts-ignore
  const basketItems: IBasketOrig[] = basketOrig.filter((item) => item !== null);
  const handleClearCart = () => {
    dispatch(deleteBasket());
  };
  const totalPrice = basketItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  const totalCount = basketItems.reduce((total, item) => total + item.count, 0);
  const handleClose = () => {
    setOpenModal(false);
  };
  const handleOpen = () => {
    setOpenModal(true);
  };
  if (basketItems.length === 0) return null;
  return (
    <Stack
      sx={{
        alignItems: "center",
        mt: 2,
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
      }}
    >
      <p>
        Товаров в корзине:
        {` ${totalCount}`}
      </p>
      <p>
        Общая стоимость:
        {` ${totalPrice.toFixed(2)}р.`}
      </p>
      <Button
        variant="outlined"
        onClick={handleClearCart}
        disabled={basketItems.length === 0}
      >
        Очистить корзину
      </Button>
      <Button
        onClick={handleOpen}
        variant="outlined"
        disabled={basketItems.length === 0}
      >
        Оформить заказ
      </Button>
      <CModal handleClose={handleClose} open={openModal}>
        <OfferPlacement basket={basketItems} handleClose={handleClose} />
      </CModal>
    </Stack>
  );
};

export default BasketManaging;
