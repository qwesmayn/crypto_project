import React from "react";
import style from "./Coin.module.css";

const Coin = (props) => {
  return (
    <>
      <div className={style.grid_item_name}>
        <img src={props.image}></img>
        <span className={style.name}>{props.name}</span>
        <span className={style.short_name}>{props.symbol}</span>
      </div>
      <div className={style.grid_item + " " + style.hideOnMobile}>
        <span>$ {props.current_price.toLocaleString("en-US")}</span>
      </div>
      <div className={style.grid_item_change + " " + style.hideOnMobile}>
        <span>{Math.round(props.price_change_percentage_24h)}%</span>
      </div>
      <div className={style.grid_item + " " + style.hideOnMobile}>
        <span>{props.total_volume.toLocaleString("en-US")}м</span>
      </div>
      <div className={style.grid_item}>
        <button className={style.trade_button}>Trade</button>
      </div>
    </>
  );
};


export default Coin;
