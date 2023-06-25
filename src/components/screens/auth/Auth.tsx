"use client";
import Layout from "@/components/layout/Layout";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import type { FC, FormEvent } from "react";
import Link from "next/link";
import { AuthBoxStyle } from "@/styles/AuthBoxStyle";
import axios from "axios";

interface AuthProps {
  variant: string;
}

const Auth: FC<AuthProps> = ({ variant }) => {
  const boolVariant = variant === "login";
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (boolVariant) {
      event.preventDefault();
      console.log(`http://krepcheapi.ru.swtest.ru:5000/`);
      axios
        .post(`http://krepcheapi.ru.swtest.ru:5000/`, {
          email: "kek",
          password: "kek",
        })
        .then((res) => console.log(res));
    }
  };

  return (
    <Layout>
      <Box sx={{ ...AuthBoxStyle }}>
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {boolVariant ? "Вход" : "Регистрация"}
        </Typography>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
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
      </Box>
    </Layout>
  );
};

export default Auth;
