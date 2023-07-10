import React from "react";
import CardFundacion from "../Cartas/cardFundacion";
import SortFundaciones from "../Fundación/sortFundacion";
import SearchBar from "../SearchBar/searchBar";
import style from "./Fundacion.module.css";

const Fundacion = () => {
  return (
    <div className={style.containerFundaciones}>

      <div className={style.caja}>
        <div className={style.filters}>
          <h1 className={style.title}>Nuestras fundaciones</h1>
          <SortFundaciones />
          <SearchBar />
        </div>
        <div>
          <img
            src={require("../../assets/MascotaFundacion2.png")}
            alt="mascotas"
            className={style.img}>
          </img>
        </div>
      </div>
      <CardFundacion />
    </div>
  );
};

export default Fundacion;
