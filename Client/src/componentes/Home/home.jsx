import React, { useEffect } from "react";
import CardMascotas from "../Cartas/cardMascotas";
import CardFundaciones from "../Cartas/cardFundacion";
import style from "./home.module.css";
import Info from "../Información/Info";
import InfoHome from "../InfoHome/InfoHome";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.cardContainer}>
        <div>
          <InfoHome />
        </div>
        <div>
          <Info />
        </div>

        <div className="page-container">
          <CardMascotas />

        </div>
        {/* <div className="page-container">
          <CardFundaciones />
        </div> */}

      </div>
    </div>
  );
};

export default Home;
