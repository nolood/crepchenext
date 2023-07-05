"use client";
import Layout from "@/components/layout/Layout";
import { Avatar, Box, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import type { FC } from "react";
import { AuthBoxStyle } from "@/styles/AuthBoxStyle";
import AuthForm from "./authform/AuthForm";

interface AuthProps {
  variant: string;
}

const Auth: FC<AuthProps> = ({ variant }) => {
  const boolVariant = variant === "login";

  return (
    <Layout>
      <Box sx={{ ...AuthBoxStyle }}>
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {boolVariant ? "Вход" : "Регистрация"}
        </Typography>
        <AuthForm boolVariant={boolVariant} />
      </Box>
    </Layout>
  );
};

export default Auth;
