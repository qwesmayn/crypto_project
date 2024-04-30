import React from "react";
import style from "./Footer.module.css";
import logoTon from "../../img/logo_ton.svg";
import tgLogo from "../../img/tg_logo.svg";
import fcLogo from "../../img/fc_logo.svg";
import twitLogo from "../../img/twit_logo.svg";
import RegButton from "../../UI/RegButton";
import LogInButton from "../../UI/LogInButton";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_info}>
        <div className={style.social}>
          <div className={style.logo_site}>
            <img src={logoTon} />
          </div>
          <div className={style.logo_social}>
            <div>
              <img src={tgLogo} />
              <img src={fcLogo} />
              <img src={twitLogo} />
            </div>
            <div>
              <RegButton />
              <LogInButton />
            </div>
          </div>
        </div>
        <div className={style.links}>
            <ul>
                <li><a>Trade</a></li>
                <li><a>P2P</a></li>
                <li><a>Partners</a></li>
                <li><a>Mining</a></li>
                <li><a>Academy  </a></li>
                <li><a>Privacy policy</a></li>
                <li><a>Terms of rules</a></li>
            </ul>
        </div>
      </div>
      <div className={style.product}>
        <span>Bitlist© All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
