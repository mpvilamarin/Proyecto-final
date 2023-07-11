import React, { useEffect } from "react";
import CardMascotas from "../Cartas/cardMascotas";
import CardFundaciones from "../Cartas/cardFundacion";
import style from "./home.module.css";
import Info from "../Información/Info";

const Home = () => {
  return (
    <div className='container'>
      <div className={style.cardContainer}>
        <CardMascotas />
        <CardFundaciones />
        <div>
          <Info />
        </div>


      </div>
    </div>
  );
};

export default Home;
