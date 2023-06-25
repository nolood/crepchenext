import type { FC } from "react";
import Providers from "@/providers/Providers";
import Header from "@/components/layout/header/Header";
import { ILayout } from "./layout.interface";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firebase/firebaseConfig";

initializeApp(firebaseConfig);

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <Providers>
      <Header />
      <main>{children}</main>
    </Providers>
  );
};

export default Layout;
