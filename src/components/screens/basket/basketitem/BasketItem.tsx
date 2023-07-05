import DeleteIcon from "@mui/icons-material/Delete";
import { useState, type FC } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import Image from "next/image";
import { IBasketOrig } from "@/types/IBasketOrig";
import { useAppDispatch } from "@/hooks/useReduxHooks";
import { changeCount, deleteBasketItem } from "@/store/userSlice/userSlice";

interface BasketItemProps {
  item: IBasketOrig;
}

const BasketItem: FC<BasketItemProps> = ({ item }) => {
  const [count, setCount] = useState(item.count);
  const dispatch = useAppDispatch();
  const handlePlusCount = () => {
    setCount((prev) => prev + 1);
    dispatch(changeCount({ ...item, count }));
  };
  const handleMinusCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
      dispatch(changeCount({ ...item, count: count - 2 }));
    }
  };
  const handleDeleteBasketItem = () => {
    dispatch(deleteBasketItem(item.id));
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Image
          src={`http://krepcheapi.ru/${item?.img}`}
          width={150}
          height={140}
          alt={item?.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Цена: {(item.price * count).toFixed(2)}р
            <br />
            Тип упаковки: {item.pack}
            <br />
            Кол-во: {count}
          </Typography>
        </CardContent>
      </Box>
      <CardActions>
        <Button variant="outlined" size="large" onClick={handleMinusCount}>
          -
        </Button>
        <Typography
          sx={{
            ml: 2,
            mr: 1.5,
          }}
        >
          {count}
        </Typography>
        <Button variant="outlined" size="large" onClick={handlePlusCount}>
          +
        </Button>
        <Button onClick={handleDeleteBasketItem} size="large">
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default BasketItem;
