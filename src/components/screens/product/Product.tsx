import Layout from "@/components/layout/Layout";
import { IItem } from "@/types/IItem";
import Image from "next/image";
import type { FC } from "react";
import styles from "./product.module.scss";
import Link from "next/link";
import ProductBtn from "./productbtns/ProductBackBtn";
import ProductAddBtn from "./productbtns/ProductAddBtn";

interface ProductProps {
  item: IItem;
}

const Product: FC<ProductProps> = ({ item }) => {
  return (
    <Layout>
      <div>
        <div className={styles.header}>
          <h1>{item.title}</h1>
          <ProductBtn />
        </div>
        <div className={styles.wrapper}>
          <Image
            src={`http://krepcheapi.ru/${item.img}`}
            alt={item.title}
            width={300}
            height={300}
          />
          <div className={styles.info}>
            <h2>{item.title}</h2>
            <p className={styles.text}>{`Цена: ${item.price.toFixed(2)}р`}</p>
            <p className={styles.text}>{`Тип упаковки: ${item.pack}`}</p>
            <ProductAddBtn item={item} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
