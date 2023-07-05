import Layout from "@/components/layout/Layout";
import BasketList from "./basketlist/BasketList";
import styles from "./basket.module.scss";
import BasketManaging from "./basketmanaging/BasketManaging";

const Basket = () => {
  return (
    <Layout>
      <div>
        <h1 className={styles.title}>Корзина</h1>
        <BasketList />
        <BasketManaging />
      </div>
    </Layout>
  );
};

export default Basket;
