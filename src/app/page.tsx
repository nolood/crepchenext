import Home from "@/components/screens/home/Home";
import { Metadata } from "next";
import fetchCategories from "./lib/fetchCategories";
import { ICategory } from "@/types/ICategory";

export const metadata: Metadata = {
  title: "Главная | КРЕП-ЧЕ",
  description:
    "Сайт небольшой компании, которая занимается оптовой продажей крепежа, шурупов, саморезов, электродов и многого другого",
  openGraph: {
    title: "Главная | КРЕП-ЧЕ",
    siteName: "КРЕП-ЧЕ",
    description:
      "Сайт небольшой компании, которая занимается оптовой продажей крепежа, шурупов, саморезов, электродов и многого другого",
  },
};

const HomePage = async () => {
  const categories: ICategory[] = await fetchCategories();
  return <Home categories={categories} />;
};

export default HomePage;
