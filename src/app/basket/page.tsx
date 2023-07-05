import Basket from "@/components/screens/basket/Basket";
import { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Корзина | КРЕП-ЧЕ",
  description:
    "Сайт небольшой компании, которая занимается оптовой продажей крепежа, шурупов, саморезов, электродов и многого другого",
  openGraph: {
    title: "Корзина | КРЕП-ЧЕ",
    siteName: "КРЕП-ЧЕ",
    description:
      "Сайт небольшой компании, которая занимается оптовой продажей крепежа, шурупов, саморезов, электродов и многого другого",
    images: "http://krep-che.ru/icons/favicon.ico",
  },
};

const BasketPage = () => {
  return <Basket />;
};

export default BasketPage;
