import type { FC } from "react";
import styles from "./itemslist.module.scss";
import { IItem } from "@/types/IItem";
import ItemCard from "../itemcard/ItemCard";

interface ItemsListProps {
  items: IItem[];
}

const ItemsList: FC<ItemsListProps> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items && items?.map((item) => <ItemCard key={item.id} item={item} />)}
    </ul>
  );
};

export default ItemsList;
