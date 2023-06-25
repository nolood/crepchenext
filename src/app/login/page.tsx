import Auth from "@/components/screens/auth/Auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход | КРЕП-ЧЕ",
  description:
    "Сайт небольшой компании, которая занимается оптовой продажей крепежа, шурупов, саморезов, электродов и многого другого",
  openGraph: {
    title: "Домой | КРЕП-ЧЕ",
    siteName: "КРЕП-ЧЕ",
  },
};

const LoginPage = () => {
  return <Auth variant="login" />;
};

export default LoginPage;
