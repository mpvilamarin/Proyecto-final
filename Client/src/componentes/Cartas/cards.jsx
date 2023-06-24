import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllMascotas , getAllFundaciones} from '../../redux/Actions/get';
import style from './cards.module.css'

export default function Card() {
  const dispatch = useDispatch();
  const allMascotas = useSelector(state => state.mascotas);
  const allFundaciones = useSelector(state => state.fundaciones)
  useEffect(() => {
    dispatch(getAllMascotas());
    dispatch(getAllFundaciones())
  }, [dispatch]);
  
  return (
    <div className={style.cardContainer}>
        <h1>Mascotas</h1>
      <div className={style.cardMascota}>
      {allMascotas && allMascotas.map((mascota, indexMascota) => (
        <div key={indexMascota} className={style.mascota}>
          <Link to={`/mascota/${mascota.id}`}>
          <h2>Nombre: {mascota.nombre}</h2>
          </Link>
          <h2>Tamaño: {mascota.tamaño}</h2>
          <h2>Genero: {mascota.genero}</h2>
          <h2>Especie: {mascota.especie}</h2>
          <h2>Temperamento: {mascota.temperamento}</h2>
          <h2>Descripcion: {mascota.descripcion}</h2>
        </div>
      ))}
      </div>
      <h1>Fundaciones</h1>
        <div className={style.cardFundacion}>
            {allFundaciones && allFundaciones.map((fundacion, indexFundacion) => (
            <div key={indexFundacion} className={style.fundacion}>
            <h2>Nombre: {fundacion.nombre}</h2>
            <h3>Direccion: {fundacion.direccion}</h3>
            <h3>Ciudad: {fundacion.ciudad}</h3>
            <h3>Email:{fundacion.email}</h3>
            <p>Mision: {fundacion.mision}</p>
            </div>
        ))}
        </div>
    </div>
  );
}
