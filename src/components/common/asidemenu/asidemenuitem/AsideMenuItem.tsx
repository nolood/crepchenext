import type { FC } from "react";
import styles from "./asidemenuitem.module.scss";
import ArrowIcon from "@/icons/ArrowIcon";
import Link from "next/link";

interface AsideMenuItemProps {}

const AsideMenuItem: FC<AsideMenuItemProps> = () => {
  return (
    <Link className={styles.category} href="/catalog?category=0">
      <ArrowIcon />
      <span>Анкера</span>
    </Link>
  );
};

export default AsideMenuItem;
