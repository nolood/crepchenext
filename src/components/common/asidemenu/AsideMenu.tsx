import { FC } from "react";
import AsideMenuItem from "./asidemenuitem/AsideMenuItem";
import { ICategory } from "@/types/ICategory";
import { ISubcategory } from "@/types/ISubcategory";
import AsideMenuSubitem from "./asidemenusubitem/AsideMenuSubitem";
import styles from "./asidemenu.module.scss";

interface AsideMenuProps {
  categories?: ICategory[];
  subcategories?: ISubcategory[];
  categoryId?: string;
}

const AsideMenu: FC<AsideMenuProps> = ({
  categories,
  subcategories,
  categoryId,
}) => {
  if (subcategories)
    return (
      <ul className={styles.list}>
        {subcategories.map(({ id, title }) => (
          <AsideMenuSubitem
            key={id}
            title={title}
            id={id}
            categoryId={categoryId}
          />
        ))}
      </ul>
    );
  return (
    <ul className={styles.list}>
      {categories?.length &&
        categories.map(({ id, title }) => (
          <AsideMenuItem key={id} title={title} id={id} />
        ))}
    </ul>
  );
};

export default AsideMenu;
