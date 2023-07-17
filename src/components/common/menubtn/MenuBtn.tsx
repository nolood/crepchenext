"use client";
import { useState } from "react";
import styles from "./MenuBtn.module.scss";
import AsideMenu from "../asidemenu/AsideMenu";
import { ICategory } from "@/types/ICategory";
import { ClickAwayListener } from "@mui/material";
import { ISubcategory } from "@/types/ISubcategory";
const MenuBtn = ({
  categories,
  categoryId,
  subcategories,
}: {
  categories: ICategory[];
  categoryId?: string;
  subcategories?: ISubcategory[];
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        <button onClick={() => setOpen(!open)} className={styles.btn}>
          Открыть меню категорий
        </button>
        <AsideMenu
          categories={categories}
          isVisible={open}
          active={open}
          subcategories={subcategories}
          categoryId={categoryId}
        />
      </div>
    </ClickAwayListener>
  );
};

export default MenuBtn;
