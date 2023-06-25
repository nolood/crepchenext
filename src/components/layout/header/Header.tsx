import styles from "./header.module.scss";
import Link from "next/link";
import HeaderMenu from "./menu/HeaderMenu";
import Navbar from "@/components/navbar/Navbar";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <Link href="/" className={styles.title}>
          креп-че
        </Link>
        <HeaderMenu>
          <Navbar />
        </HeaderMenu>
      </div>
    </header>
  );
};

export default Header;
