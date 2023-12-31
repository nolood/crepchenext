"use client";

import Category from "@/components/DevPageComponents/Category";
import SubCategory from "@/components/DevPageComponents/SubCategory";
import CategoriesOverview from "@/components/DevPageComponents/CategoriesOverview";
import ChangeItems from "@/components/DevPageComponents/ChangeItems";
import { Stack } from "@mui/material";
import Layout from "@/components/layout/Layout";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dev = () => {
  const router = useRouter();
  useEffect(() => {
    const id = localStorage.getItem("KGFOASDJGNMDFMFD");
    if (id !== process.env.PASS) {
      router.replace("/");
    }
  }, []);
  return (
    <Layout>
      <Stack spacing={4}>
        <Stack direction="row" spacing={4}>
          <Category />
          <SubCategory />
        </Stack>
        <CategoriesOverview />
        <ChangeItems />
        {/* <GroupItems title="Товары по акции" items={promoItems} />
      <GroupItems title="Популярные товары" items={popItems} /> */}
      </Stack>
    </Layout>
  );
};

export default Dev;
