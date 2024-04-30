import React from "react";
import style from "./CustomInput.module.css";
import mailIcon from "../img/mail_icon.png";

const CustomInput = () => {
  return (
    <div className={style.input_container}>
      <div className={style.block_mail}>
        <img src={mailIcon} className={style.icon} />
      </div>
      <input placeholder="Example@gmail.com" />
      <button>Sign in</button>
    </div>
  );
};

export default CustomInput;
