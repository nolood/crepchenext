import AsideMenu from "@/components/common/asidemenu/AsideMenu";
import Layout from "@/components/layout/Layout";
import { ICategory } from "@/types/ICategory";
import { FC } from "react";
import styles from "./home.module.scss";

interface HomeProps {
  categories: ICategory[];
}

const Home: FC<HomeProps> = ({ categories }) => {
  return (
    <Layout>
      <h1 className={styles.title}>Главная страница</h1>
      <div className={styles.wrapper}>
        <AsideMenu categories={categories} />
        <div className={styles.info}>
          <p className={styles.text}>
            КРЕП-ЧЕ - небольшая компания которая занимается оптовой продажей
            различных крепежей, шурупов и много другого.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
