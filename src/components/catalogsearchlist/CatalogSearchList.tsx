"use client";

import { useAppSelector } from "@/hooks/useReduxHooks";
import { selectSearchItems } from "@/store/userSlice/userSelectors";
import styles from "@/components/itemslist/itemslist.module.scss";
import ItemCard from "../itemcard/ItemCard";

const CatalogSearchList = () => {
  const items = useAppSelector(selectSearchItems);
  if (!items || !items?.length) {
    return null;
  }
  return (
    <>
      {items && items?.length ? (
        <ul className={styles.list}>
          {items?.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <div>Пока здесь ничего нет но скоро будет</div>
      )}
    </>
  );
};

export default CatalogSearchList;
