import type { FC } from "react";
import styles from "./info.module.scss";

interface ContactsInfoProps {}

const ContactsInfo: FC<ContactsInfoProps> = () => {
  return (
    <>
      <h2>Связаться с нами</h2>
      <p>
        Телефон 1:{" "}
        <a className={styles.link} href="tel:+79222387191">
          +79222387191
        </a>
      </p>
      <p>
        Телефон 2:{" "}
        <a className={styles.link} href="tel:+79320180949">
          +79320180949
        </a>
      </p>
      <a className={styles.link} href="mailto:krep-che@mail.ru">
        Электронная почта: krep-che@mail.ru
      </a>
    </>
  );
};

export default ContactsInfo;
