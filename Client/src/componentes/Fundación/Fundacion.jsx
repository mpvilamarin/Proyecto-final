import React, { useEffect } from "react";
import CardFundacion from "../Cartas/cardFundacion";
import SortFundaciones from "../Fundación/sortFundacion";
import SearchBar from "../SearchBar/searchBar";
import style from "./Fundacion.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const Fundacion = () => {
  const fundacion = useSelector((state) => state.fundaciones)
  const dispatch = useDispatch();
  console.log(fundacion)


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
