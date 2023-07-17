import { IOffer } from "@/types/IOffer";
import styles from "../offers.module.scss";
import { FC, useEffect, useState } from "react";
import { IItem } from "@/types/IItem";
import axios from "axios";
import { IBasketOrig } from "@/types/IBasketOrig";

interface OfferItemProps {
  item: IOffer;
}

const OfferItem: FC<OfferItemProps> = ({ item }) => {
  const [product, setProducts] = useState<IItem[]>([]);
  useEffect(() => {
    async function getItems() {
      const items = await axios.post(`${process.env.API_URL}item/ids`, {
        itemsIds: JSON.stringify(item.items.map((id) => id[0])),
      });
      // const newItems = items.data.map((i: IItem) => {
      //   for (let j = 0; j < item.items.length; j++) {
      //     if (item.items[j][1] === i.id) {
      //       return { ...i, count: item.items[j][1] };
      //     }
      //   }
      // });
      setProducts(items.data);
    }
    getItems();
  }, []);
  return (
    <div className={styles.container}>
      <p className={styles.title}>ФИО:</p>
      <p className={styles.main}>
        {item.name} {item.surname}
      </p>
      <p className={styles.title}>Номер телефона:</p>
      <p className={styles.main}>{item.number}</p>
      <p>Заказ:</p>
      <ul>
        {product.map((prod, index) => (
          <li key={prod.id}>
            <span>{prod.title} </span>
            <span>({prod.price.toFixed(2)}р) </span>
            <span>Кол-во: {item.items[index][1] + 1}</span>
          </li>
        ))}
      </ul>
      <p>
        Общая стоимость:{" "}
        <strong className={styles.main}>
          {product.reduce(
            (total, i, index) => total + i.price * (item.items[index][1] + 1),
            0
          )}
          р
        </strong>
      </p>
    </div>
  );
};

export default OfferItem;
