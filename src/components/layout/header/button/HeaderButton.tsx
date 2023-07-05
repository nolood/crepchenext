import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { selectIsAuth } from "@/store/userSlice/userSelectors";
import styles from "./../header.module.scss";
import Link from "next/link";
import { setIsAuth } from "@/store/userSlice/userSlice";

const HeaderButton = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const signOut = () => {
    localStorage.setItem("krepche-token", "");
    dispatch(setIsAuth(false));
  };
  return (
    <>
      {isAuth ? (
        <button onClick={signOut} className={styles.link}>
          Выйти
        </button>
      ) : (
        <Link className={styles.link} href="/login">
          Войти / Зарегистрироваться
        </Link>
      )}
    </>
  );
};

export default HeaderButton;
