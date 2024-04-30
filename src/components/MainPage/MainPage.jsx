import React from "react";
import style from "./MainPage.module.css";
import Price_List from "./Price_List/Price_List";
import Cooperation from "./Cooperation/Cooperation";
import AboutUs from "./AboutUs/AboutUs";
import BackToRegister from "./BackToRegister/BackToRegister";
import Company from "./Company/Company";

const MainPage = () => {
  return (
    <>
        <div>
            <Company />
            <Price_List />
            <Cooperation />
            <AboutUs />
            <BackToRegister />
        </div>
    </>
  )
}

export default MainPage
