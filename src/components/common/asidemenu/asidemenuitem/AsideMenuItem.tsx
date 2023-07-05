import type { FC } from "react";
import styles from "@/components/common/asidemenu/asidemenu.module.scss";
import ArrowIcon from "@/icons/ArrowIcon";
import Link from "next/link";

interface AsideMenuItemProps {
  title: string;
  id: number;
}

const AsideMenuItem: FC<AsideMenuItemProps> = ({ title, id }) => {
  return (
    <li>
      <Link className={styles.category} href={`/catalog?category=${id}`}>
        <ArrowIcon />
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default AsideMenuItem;
