import type { FC } from "react";
import styles from "./itemcard.module.scss";
import Link from "next/link";
import { IItem } from "@/types/IItem";
import Image from "next/image";
import ItemCardButton from "./button/ItemCardButton";

interface ItemCardProps {
  item: IItem;
}

const ItemCard: FC<ItemCardProps> = ({ item }) => {
  return (
    <li className={styles.card}>
      <Link className={styles.link} href={`product/${item.id}`}>
        <Image
          src={`http://krepcheapi.ru/${item.img}`}
          alt={item.title}
          width={300}
          height={100}
        />
        <div className={styles.wrapper}>
          <h4>{item.title}</h4>
          <div className={styles.info}>
            <span>Упаковка: {item.pack}</span>
            <span>Цена: {item.price.toFixed(2)}&#8381;</span>
          </div>
        </div>
      </Link>
      <ItemCardButton />
    </li>
  );
};

export default ItemCard;
