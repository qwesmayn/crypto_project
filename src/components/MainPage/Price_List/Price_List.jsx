import React, { useEffect, useState } from "react";
import style from "./Price_List.module.css";
import Coin from "./Coin/Coin";
import { Coins } from "../../../DAL/api";

const Price_List = () => {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    Promise.all([
      Coins.get1inch(),
      Coins.getBtc(),
      Coins.getEth(),
      Coins.getBnb(),
      Coins.getBusd(),
    ]).then((data) => setCoinsData(data));
  }, []);

  return (
    <>
      <div className={style.price_block}>
        <div className={style.grid_container}>
          <div className={style.grid_name}>
            Asset
          </div>
          <div className={style.grid_name + " " + style.hideOnMobile}>
            Price
          </div>
          <div className={style.grid_name + " " + style.hideOnMobile}>
            Change
          </div>
          <div className={style.grid_name + " " + style.hideOnMobile}>
            Volume
          </div>
          <div className={style.grid_name}></div>
          {coinsData.map((coinData, index) => (
            <Coin key={index} {...coinData} />
          ))}
        </div>
        <div className={style.btn_more}>
          <button>All assets</button>
        </div>
      </div>
    </>
  );
};

export default Price_List;
