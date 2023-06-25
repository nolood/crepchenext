import { useAppSelector } from "@/hooks/useReduxHooks";
import { selectIsAuth } from "@/store/userSlice/userSelectors";
import styles from "./../header.module.scss";
import Link from "next/link";

const HeaderButton = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <>
      {isAuth ? (
        <button className={styles.link}>Выйти</button>
      ) : (
        <Link className={styles.link} href="/login">
          Войти / Зарегистрироваться
        </Link>
      )}
    </>
  );
};

export default HeaderButton;
