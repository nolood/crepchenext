import Auth from "@/components/screens/auth/Auth";
import { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Регистрация | КРЕП-ЧЕ",
  description:
    "Сайт небольшой компании, которая занимается оптовой продажей крепежа, шурупов, саморезов, электродов и многого другого",
  openGraph: {
    title: "Домой | КРЕП-ЧЕ",
    siteName: "КРЕП-ЧЕ",
  },
};

interface RegisterPageProps {}

const RegisterPage: FC<RegisterPageProps> = () => {
  return <Auth variant="register" />;
};

export default RegisterPage;
