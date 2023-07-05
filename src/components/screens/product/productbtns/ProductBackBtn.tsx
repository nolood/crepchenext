"use client";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

const ProductBackBtn = () => {
  const router = useRouter();
  return (
    <Button variant="contained" color="primary" onClick={() => router.back()}>
      Назад
    </Button>
  );
};

export default ProductBackBtn;
