"use client";

import React, { useState, FC } from "react";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import MenuIcon from "@mui/icons-material/Menu";
import classNames from "classnames";
import HeaderModal from "./../modal/HeaderModal";
import HeaderButton from "./../button/HeaderButton";
import styles from "./../header.module.scss";

interface HeaderMenuProps {
  children: React.ReactNode;
}

const HeaderMenu: FC<HeaderMenuProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpenMenu(false);
  };
  const menuClasses = classNames(styles.menu, { [styles.active]: openMenu });
  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className={styles.wrapper}>
          <div className={menuClasses}>
            {children}
            <HeaderModal />
            <HeaderButton />
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
