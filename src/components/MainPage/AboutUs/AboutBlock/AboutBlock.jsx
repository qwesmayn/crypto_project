import React from "react";
import style from "./AboutBlock.module.css";

const AboutBlock = (props) => {
  return (
      <div className={style.block_about}>
        <div className={style.icon_block}><img src={props.src}/></div>
        <div className={style.chrt_block}><span className={style.name_chrt}>{props.name}</span></div>
        <div><span className={style.more_info}>{props.info}</span></div>
      </div>
  )
};

export default AboutBlock;
