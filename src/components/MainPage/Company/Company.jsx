import React from "react";
import style from "./Company.module.css";
import subtractIcon from "../../../img/Subtract.svg";
import CustomInput from "../../../UI/CustomInput";
import StatIcon from "../../../img/graf_stat.svg"

const Company = () => {
  return (
    <div className={style.company}>
      <div className={style.block_about}>
        <div className={style.name_cmp}>
          <span>
            <img src={subtractIcon} />
            DECENTRALIZED CRYPTO PLATFORM
          </span>
        </div>
        <div className={style.deviz}>
          <span>Buy, trade and store<br/> cryptocurrencies</span>
        </div>
        <div className={style.input}>
          <CustomInput />
        </div>
      </div>
      <div className={style.stat_block}>
        <img src={StatIcon}/>
      </div>
    </div>
  );
};

export default Company;
