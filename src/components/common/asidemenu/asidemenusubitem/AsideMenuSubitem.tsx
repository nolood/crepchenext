import Link from "next/link";
import type { FC } from "react";
import styles from "@/components/common/asidemenu/asidemenu.module.scss";

interface AsideMenuSubitemProps {
  id: number;
  title: string;
  categoryId?: string;
}

const AsideMenuSubitem: FC<AsideMenuSubitemProps> = ({
  id,
  title,
  categoryId,
}) => {
  return (
    <li>
      <Link
        className={styles.category}
        href={`catalog?category=${categoryId}&subcategory=${id}`}
      >
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default AsideMenuSubitem;
