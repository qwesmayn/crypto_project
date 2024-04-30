import React from "react";
import style from "./Cooperation.module.css";
import binLogo from "../../../img/binLogo.svg";
import bitLogo from "../../../img/bitLogo.svg";
import krakenLogo from "../../../img/krakenLogo.svg";
import bybLogo from "../../../img/bybLogo.svg";
import cryptoLogo from "../../../img/cryptoLogo.svg";
import coinLogo from "../../../img/coinLogo.svg";

const Cooperation = () => {
  return (
    <div className={style.cooperation}>
      <div className={style.cooperation_info}>
        <div className={style.block_infotxt}>
          <span className={style.info_text}>
            Bitles is your reliable guide in the world of digital assets
          </span>
        </div>
        <div>
          <span className={style.more_info}>
            The Bitles app is a comprehensive solution for trading digital
            assets. Buy and sell cryptocurrencies quickly and openly,
            comfortably and safely from anywhere in the world.
          </span>
        </div>
      </div>
      <div className={style.cooperation_logos}>
        <div className={style.grid_logo}>
          <div>
            {" "}
            <img src={binLogo} />{" "}
          </div>
          <div>
            {" "}
            <img src={bitLogo} />{" "}
          </div>
          <div>
            {" "}
            <img src={krakenLogo} />{" "}
          </div>
        </div>
        <div className={style.grid_logo}>
          <div>
            {" "}
            <img src={bybLogo} />{" "}
          </div>
          <div>
            {" "}
            <img src={cryptoLogo} />{" "}
          </div>
          <div>
            {" "}
            <img src={coinLogo} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooperation;
