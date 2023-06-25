import Catalog from "@/components/screens/catalog/Catalog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Каталог | КРЕП-ЧЕ",
  description:
    "Сайт небольшой компании, которая занимается оптовой продажей крепежа, шурупов, саморезов, электродов и многого другого",
  openGraph: {
    title: "Каталог | КРЕП-ЧЕ",
    siteName: "КРЕП-ЧЕ",
    description:
      "Сайт небольшой компании, которая занимается оптовой продажей крепежа, шурупов, саморезов, электродов и многого другого",
    images: "http://krep-che.ru/icons/favicon.ico",
  },
};

export default function CatalogPage() {
  return <Catalog />;
}
