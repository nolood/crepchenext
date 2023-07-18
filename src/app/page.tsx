import Home from "@/components/screens/home/Home";
import { Metadata } from "next";
import fetchCategories from "./lib/fetchCategories";
import { ICategory } from "@/types/ICategory";

export const metadata: Metadata = {
  title: "Главная | КРЕП-ЧЕ",
  description:
    "Нужны шурупы, метизы или другие крепежи? В нашем магазине вы можете купить метиз, шуруп или любой другой крепёж. Быстрая доставка по всей России",
  keywords: "метизы, крепежи, купить крепеж оптом",
  openGraph: {
    title: "Главная | КРЕП-ЧЕ",
    siteName: "КРЕП-ЧЕ",
    description:
      "Нужны шурупы, метизы или другие крепежи? В нашем магазине вы можете купить метиз, шуруп или любой другой крепёж. Быстрая доставка по всей России",
  },
};

const HomePage = async () => {
  const categories: ICategory[] = await fetchCategories();
  return <Home categories={categories} />;
};

export default HomePage;
