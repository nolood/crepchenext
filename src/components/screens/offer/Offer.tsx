"use client";

import Layout from "@/components/layout/Layout";
import OffersList from "@/components/offerslist/OffersList";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Offer = () => {
  const router = useRouter();
  useEffect(() => {
    const id = localStorage.getItem("KGFOASDJGNMDFMFD");
    if (id !== process.env.PASS) {
      router.replace("/");
    }
  }, []);
  return (
    <Layout>
      <OffersList />
    </Layout>
  );
};

export default Offer;
