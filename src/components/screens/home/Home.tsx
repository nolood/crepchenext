import AsideMenu from "@/components/common/asidemenu/AsideMenu";
import Layout from "@/components/layout/Layout";
import { ICategory } from "@/types/ICategory";
import { FC } from "react";

interface HomeProps {
  categories: ICategory[];
}

const Home: FC<HomeProps> = ({ categories }) => {
  return (
    <Layout>
      <AsideMenu categories={categories} />
    </Layout>
  );
};

export default Home;
