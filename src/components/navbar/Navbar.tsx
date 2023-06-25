import { NavbarItems } from "@/utils/NavbarItems";
import styles from "./navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {NavbarItems.map((link) => (
          <li className={styles.item} key={link.id}>
            <Link href={link.href} className={styles.link}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
