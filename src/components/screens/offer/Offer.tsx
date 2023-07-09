"use client";

import Layout from "@/components/layout/Layout";
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
  return <Layout>dasdas</Layout>;
};

export default Offer;
