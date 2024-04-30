import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
});

export const Coins = {
  getBtc() {
    return instance.get("coins/markets?vs_currency=usd&ids=bitcoin").then((response) => {
      return response.data[0];
    });
  },
  get1inch() {
    return instance.get("coins/markets?vs_currency=usd&ids=1inch").then((response) => {
      return response.data[0];
    });
  },
  getEth() {
    return instance.get("coins/markets?vs_currency=usd&ids=ethereum").then((response) => {
      return response.data[0];
    });
  },
  getBnb() {
    return instance.get("coins/markets?vs_currency=usd&ids=binancecoin").then((response) => {
      return response.data[0];
    });
  },
  getBusd() {
    return instance.get("coins/markets?vs_currency=usd&ids=solana").then((response) => {
      return response.data[0];
    });
  },
};
