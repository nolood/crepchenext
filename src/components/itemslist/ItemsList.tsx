import type { FC } from "react";
import styles from "./itemslist.module.scss";
import { IItem } from "@/types/IItem";
import ItemCard from "../itemcard/ItemCard";

interface ItemsListProps {
  items: IItem[];
}

const ItemsList: FC<ItemsListProps> = ({ items }) => {
  return (
    <>
      {items.length ? (
        <ul className={styles.list}>
          {items?.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <div className={styles.info}>Пока здесь ничего нет но скоро будет</div>
      )}
    </>
  );
};

export default ItemsList;
