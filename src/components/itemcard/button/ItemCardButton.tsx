"use client";

import styles from "./../itemcard.module.scss";
import { Button } from "@mui/material";

const ItemCardButton = () => {
  return (
    <Button
      size="large"
      sx={{ width: "100%", position: "absolute", bottom: "0px" }}
    >
      Добавить в корзину
    </Button>
  );
};

export default ItemCardButton;
