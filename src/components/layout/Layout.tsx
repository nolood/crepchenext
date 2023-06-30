import type { FC } from "react";
import Providers from "@/providers/Providers";
import Header from "@/components/layout/header/Header";
import { ILayout } from "./layout.interface";

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <Providers>
      <Header />
      <main>{children}</main>
    </Providers>
  );
};

export default Layout;
