import React, { useState } from "react";
import logo from "../../img/logo.svg";
import search_logo from "../../img/search-lg.svg";
import style from "./Header.module.css";
import RegButton from "../../UI/RegButton";
import LogInButton from "../../UI/LogInButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={style.header}>
        <div className={style.left_block}>
          <div className={style.logo_block}>
            <img className={style.logo} src={logo} />
          </div>
          <div className={style.search}>
            <input className={style.search_input} placeholder="Search" />
            <img className={style.search_icon} src={search_logo} />
          </div>
        </div>

        <div className={style.right_block}>
          <div className={isOpen ? style.navigator_active : style.navigator}>
            <ul className={style.ul_block_nav}>
              <li><a href="#">Trade</a></li>
              <li><a href="#">P2P</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Mining</a></li>
              <li><a href="#">Academy</a></li>
            </ul>
          </div>
          <div className={style.block_auth}>
            <div><RegButton /></div>
            <div><LogInButton /></div>
          </div>
          <div className={style.burger} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
