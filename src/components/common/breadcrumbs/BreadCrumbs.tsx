"use client";

import { ICategory } from "@/types/ICategory";
import { ISubcategory } from "@/types/ISubcategory";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import qs from "query-string";
import { useEffect, useState } from "react";
import styles from "./breadcrumbs.module.scss";

interface BreadCrumbsProps {
  categories: ICategory[];
  subcategories: ISubcategory[];
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ categories, subcategories }) => {
  const [categoryTitle, setCategoryTitle] = useState<string | undefined>(
    undefined
  );
  const [subcategoryTitle, setSubcategoryTitle] = useState<string | undefined>(
    undefined
  );
  const [categoryId, setCategoryId] = useState<string | undefined>(undefined);
  const [subcategoryId, setSubcategoryId] = useState<string | undefined>(
    undefined
  );
  const locationParams = location?.search || { category: 2 };

  useEffect(() => {
    const categoryIdLocal = qs.parse(location.search)?.category;
    const subcategoryIdLocal = qs.parse(location.search)?.subcategory;
    setCategoryId(String(categoryIdLocal));
    setSubcategoryId(String(subcategoryIdLocal));

    const categoryTitleLocal = categories.find(
      (item) => String(item.id) === categoryId
    )?.title;
    const subcategoryTitleLocal = subcategories?.find(
      (item) => String(item.id) === subcategoryId
    )?.title;

    setCategoryTitle(categoryTitleLocal);
    setSubcategoryTitle(subcategoryTitleLocal);
  }, [locationParams, categories, subcategories]);

  return (
    <div className={styles.bread}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link className={styles.link} href="catalog">
          Каталог
        </Link>
        {categoryTitle && (
          <Link className={styles.link} href={`catalog?category=${categoryId}`}>
            {categoryTitle}
          </Link>
        )}
        {subcategoryTitle && (
          <Link
            className={styles.link}
            href={`catalog?category=${categoryId}&subcategory=${subcategoryId}`}
          >
            {subcategoryTitle}
          </Link>
        )}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
