import type { FC } from "react";
import Layout from "@/components/layout/Layout";
import { ISubcategory } from "@/types/ISubcategory";
import AsideMenu from "@/components/common/asidemenu/AsideMenu";
import { ICategory } from "@/types/ICategory";
import styles from "./catalog.module.scss";
import { IItem } from "@/types/IItem";
import ItemsList from "@/components/itemslist/ItemsList";
import CatalogInfo from "./cataloginfo/CatalogInfo";
import BreadCrumbs from "@/components/common/breadcrumbs/BreadCrumbs";
import Search from "./search/Search";
import CatalogSearchList from "@/components/catalogsearchlist/CatalogSearchList";

interface CatalogProps {
  subcategories: ISubcategory[];
  categories: ICategory[];
  categoryId: string;
  items: IItem[];
}

const Catalog: FC<CatalogProps> = ({
  subcategories,
  categories,
  categoryId,
  items,
}) => {
  return (
    <Layout>
      <div className={styles.header}>
        <h1 className={styles.title}>Каталог</h1>
        <BreadCrumbs categories={categories} subcategories={subcategories} />
      </div>
      <div className={styles.wrapper}>
        <AsideMenu
          subcategories={subcategories}
          categories={categories}
          categoryId={categoryId}
        />
        <div className={styles.catalog}>
          <Search />
          <CatalogSearchList />
          {categoryId ? <ItemsList items={items} /> : <CatalogInfo />}
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
