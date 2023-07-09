import { IModal } from "@/components/common/modal/cmodal.interface";
import { useAppDispatch } from "@/hooks/useReduxHooks";
import { sendBasket } from "@/store/userSlice/userAsync";
import { IBasketOrig } from "@/types/IBasketOrig";
import { Box, Button, TextField } from "@mui/material";
import type { FC, FormEvent } from "react";

interface OfferPlacementProps {
  handleClose: () => void;
  basket: IBasketOrig[];
}

const OfferPlacement: FC<OfferPlacementProps> = ({ handleClose, basket }) => {
  const dispatch = useAppDispatch();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      name: String(data.get("name")),
      surname: String(data.get("surname")),
      phone: String(data.get("phone")),
      items: basket,
    };
    dispatch(sendBasket(formData));
    handleClose();
  };
  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        bgcolor: "background.paper",
        p: 4,
      }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Имя"
        name="name"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="surname"
        label="Фамилия"
        name="surname"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="phone"
        label="Номер телефона"
        id="phone"
        autoComplete="current-password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Оформить заказ
      </Button>
    </Box>
  );
};

export default OfferPlacement;
