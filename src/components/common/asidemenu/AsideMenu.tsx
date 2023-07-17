import { FC } from "react";
import AsideMenuItem from "./asidemenuitem/AsideMenuItem";
import { ICategory } from "@/types/ICategory";
import { ISubcategory } from "@/types/ISubcategory";
import AsideMenuSubitem from "./asidemenusubitem/AsideMenuSubitem";
import styles from "./asidemenu.module.scss";
import Link from "next/link";

interface AsideMenuProps {
  categories?: ICategory[];
  subcategories?: ISubcategory[];
  categoryId?: string;
  isVisible?: boolean;
  active?: boolean;
}

const AsideMenu: FC<AsideMenuProps> = ({
  categories,
  subcategories,
  categoryId,
  isVisible,
  active,
}) => {
  const categoryTitle = categories?.find(
    (category) => category.id.toString() === categoryId
  )?.title;

  if (subcategories && isVisible)
    return (
      <ul className={active ? `${styles.list} ${styles.active}` : styles.list}>
        <li>
          <Link className={styles.category} href={`catalog`}>
            <span>Назад</span>
          </Link>
        </li>
        <li>
          <Link
            className={styles.category}
            href={`catalog?category=${String(categoryId)}`}
          >
            <span>Все товары из {`"${categoryTitle}"`}</span>
          </Link>
        </li>
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
  if (categories && isVisible) {
    return (
      <ul className={active ? `${styles.list} ${styles.active}` : styles.list}>
        {categories?.length &&
          categories.map(({ id, title }) => (
            <AsideMenuItem key={id} title={title} id={id} />
          ))}
      </ul>
    );
  }
};

export default AsideMenu;
