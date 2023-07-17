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
import MenuBtn from "@/components/common/menubtn/MenuBtn";

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
        <h2 className={styles.title}>Каталог</h2>
        <BreadCrumbs categories={categories} subcategories={subcategories} />
        <MenuBtn
          categoryId={categoryId}
          categories={categories}
          subcategories={subcategories}
        />
      </div>
      <div className={styles.wrapper}>
        <AsideMenu
          subcategories={subcategories}
          categories={categories}
          categoryId={categoryId}
          isVisible={true}
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
