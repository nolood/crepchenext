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
}

const AsideMenu: FC<AsideMenuProps> = ({
  categories,
  subcategories,
  categoryId,
}) => {
  const categoryTitle = categories?.find(
    (category) => category.id.toString() === categoryId
  )?.title;

  if (subcategories)
    return (
      <ul className={styles.list}>
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
