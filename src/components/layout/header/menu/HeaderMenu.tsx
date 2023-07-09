"use client";

import React, { useState, FC, useEffect } from "react";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import MenuIcon from "@mui/icons-material/Menu";
import classNames from "classnames";
import HeaderModal from "./../modal/HeaderModal";
// import HeaderButton from "./../button/HeaderButton";
import styles from "./../header.module.scss";
import Message from "@/components/message/Message";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { checkIsAuth } from "@/store/userSlice/userAsync";
import { selectIsAuth } from "@/store/userSlice/userSelectors";
import { setBasket } from "@/store/userSlice/userSlice";

interface HeaderMenuProps {
  children: React.ReactNode;
}

const HeaderMenu: FC<HeaderMenuProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpenMenu(false);
  };
  const menuClasses = classNames(styles.menu, { [styles.active]: openMenu });
  // useEffect(() => {
  //   dispatch(checkIsAuth());
  // }, [isAuth]);
  useEffect(() => {
    const basket =
      JSON.parse(localStorage.getItem("krepche-basket") || "null") || [];
    dispatch(setBasket(basket));
  }, []);
  return (
    <>
      <Message />
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className={styles.wrapper}>
          <div className={menuClasses}>
            {children}
            <HeaderModal />
            {/* <HeaderButton /> */}
          </div>
          <button onClick={toggleMenu} className={styles.burger}>
            <MenuIcon />
          </button>
        </div>
      </ClickAwayListener>
    </>
  );
};

export default HeaderMenu;
