import React from "react";
import style from "./AboutUs.module.css";
import AboutBlock from "./AboutBlock/AboutBlock";
import cardIcon from "../../../img/card_icon.png";
import eyeIcon from "../../../img/eye_icon.png";
import improvIcon from "../../../img/improv_icon.png";
import supportIcon from "../../../img/support_icon.png";
import rocketIcon from "../../../img/rocket_icon.png";
import tradeIcon from "../../../img/trade_icon.png";

const AboutUs = () => {
  return (
    <div className={style.aboutus_block}>
      <div className={style.aboutUs}>
        <AboutBlock
          src={cardIcon}
          name="User Safe Asset Fund (SAFU)world."
          info="Bitlist holds 10% of all trading fees in a protected asset fund to protect a portion of user funds."
        />
        <AboutBlock
          src={eyeIcon}
          name="User Access Control"
          info="Personalized access control allows you to limit the devices and addresses that can access your account."
        />
        <AboutBlock
          src={improvIcon}
          name="Improved data encryption"
          info="Your transaction data is encrypted - only you can access your personal data."
        />
        <AboutBlock
          src={supportIcon}
          name="Support 24/7"
          info="24/7 real-time support is always ready to help you."
        />
        <AboutBlock
          src={rocketIcon}
          name="Fast replineshments and withdraws"
          info="Transfer funds to and from your accounts quickly and easily."
        />
        <AboutBlock
          src={tradeIcon}
          name="Comfortable P2P platform"
          info="Top up your account in any convenient way on the P2P platform at favorable rates."
        />
      </div>
    </div>
  );
};

export default AboutUs;
