import type { FC } from "react";
import Link from "next/link";
import { Box, Button, TextField } from "@mui/material";
import { FormEvent } from "react";
import { useAppDispatch } from "@/hooks/useReduxHooks";
import { IAuthData } from "@/types/IAuthData";
import { loginUser, regUser } from "@/store/userSlice/userAsync";

interface AuthFormProps {
  boolVariant: boolean;
}

const AuthForm: FC<AuthFormProps> = ({ boolVariant }) => {
  const dispatch = useAppDispatch();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData: IAuthData = {
      email: String(data.get("email")),
      password: String(data.get("password")),
    };
    if (boolVariant) {
      dispatch(loginUser(formData));
    } else {
      dispatch(regUser(formData));
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {boolVariant ? "Войти" : "Зарегистрироваться"}
      </Button>
      <Link href={boolVariant ? "/register" : "/login"}>
        <Button>
          {boolVariant
            ? "Нет аккаунта? Зарегистрируйтесь!"
            : "Есть аккаунт? Войдите"}
        </Button>
      </Link>
    </Box>
  );
};

export default AuthForm;
