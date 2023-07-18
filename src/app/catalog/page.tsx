import Catalog from "@/components/screens/catalog/Catalog";
import { Metadata, NextPage } from "next";
import { ISubcategory } from "@/types/ISubcategory";
import fetchSubcategories from "../lib/fetchSubcategories";
import fetchCategories from "../lib/fetchCategories";
import { ICategory } from "@/types/ICategory";
import { IItem } from "@/types/IItem";
import fetchItems from "../lib/fetchItems";

export const metadata: Metadata = {
  title: "Каталог | КРЕП-ЧЕ",
  description:
    "Нужны шурупы, метизы или другие крепежи? В нашем магазине вы можете купить метиз, шуруп или любой другой крепёж. Быстрая доставка по всей России",
  keywords: "метизы, крепежи, купить крепеж оптом",
  openGraph: {
    title: "Каталог | КРЕП-ЧЕ",
    siteName: "КРЕП-ЧЕ",
    description:
      "Нужны шурупы, метизы или другие крепежи? В нашем магазине вы можете купить метиз, шуруп или любой другой крепёж. Быстрая доставка по всей России",
    images: "http://krep-che.ru/icons/favicon.ico",
  },
};

interface CatalogPageProps {
  searchParams: any;
}

const CatalogPage: NextPage<CatalogPageProps> = async ({ searchParams }) => {
  const categoryId = searchParams.category;
  const subcategoryId = searchParams.subcategory;
  const subcategories: ISubcategory[] = categoryId
    ? await fetchSubcategories(categoryId)
    : null;
  const categories: ICategory[] = await fetchCategories();
  const items: IItem[] = await fetchItems(categoryId, subcategoryId);
  return (
    <Catalog
      subcategories={subcategories}
      categories={categories}
      categoryId={categoryId}
      items={items}
    />
  );
};

export default CatalogPage;
