import Home from "@/components/screens/home/Home";
import { Metadata } from "next";
import getAllCategories from "./lib/getAllCategories";

export const metadata: Metadata = {
  title: "Домой | КРЕП-ЧЕ",
  description:
    "Сайт небольшой компании, которая занимается оптовой продажей крепежа, шурупов, саморезов, электродов и многого другого",
  openGraph: {
    title: "Домой | КРЕП-ЧЕ",
    siteName: "КРЕП-ЧЕ",
    description:
      "Сайт небольшой компании, которая занимается оптовой продажей крепежа, шурупов, саморезов, электродов и многого другого",
  },
};

const HomePage = () => {
  const categoriesData = getAllCategories();

  return <Home />;
};

export default HomePage;
