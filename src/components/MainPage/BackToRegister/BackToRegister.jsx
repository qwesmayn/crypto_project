import React from "react";
import style from "./BackToRegister.module.css";
import mailIcon from "../../../img/mail_icon.png";
import CustomInput from "../../../UI/CustomInput";

const BackToRegister = () => {
  return (
    <div className={style.block_reg}>
      <div className={style.reg_text}>
        <span>Register your account now<br/> and start to trade</span>
      </div>
      <CustomInput />
    </div>
  );
};

export default BackToRegister;
