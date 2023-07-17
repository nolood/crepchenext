import AsideMenu from "@/components/common/asidemenu/AsideMenu";
import Layout from "@/components/layout/Layout";
import { ICategory } from "@/types/ICategory";
import { FC } from "react";
import styles from "./home.module.scss";
import MenuBtn from "@/components/common/menubtn/MenuBtn";

interface HomeProps {
  categories: ICategory[];
}

const Home: FC<HomeProps> = ({ categories }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Главная страница</h2>
        <MenuBtn categories={categories} />
      </div>
      <div className={styles.wrapper}>
        <AsideMenu isVisible={true} categories={categories} />
        <div className={styles.info}>
          <h1 className={styles.name}>КРЕП-ЧЕ</h1>
          <p className={styles.text}>
            Мы компания, которая работает в сфере крепежа с 2011 года и имеет
            доверие множества клиентов на Урале. Если вам нужны электроды или
            другие метизы, например, саморезы, то вы можете выбрать из каталога
            товаров любые позиции и сделать заказ.
          </p>
          <h2 className={styles.item}>В чем плюсы заказа у нас?</h2>
          <ul className={styles.list}>
            <li>
              <p className={styles.item}>Быстрая доставка</p>
            </li>
            <li>
              <p className={styles.item}>Самые низкие цены на рынке</p>
            </li>
            <li>
              <p className={styles.item}>Большой ассортимент товаров</p>
            </li>
            <li>
              <p className={styles.item}>Скидки постоянным клиентам</p>
            </li>
            <li>
              <p className={styles.item}>Высокое качество продукции</p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
