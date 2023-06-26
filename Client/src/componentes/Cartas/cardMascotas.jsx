import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllMascotas} from '../../redux/Actions/get';
import style from './cards.module.css'

export default function Card() {
  const dispatch = useDispatch();
  const allMascotas = useSelector(state => state.mascotas);
  useEffect(() => {
    dispatch(getAllMascotas());
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
          <h2>Fundacion: {mascota.Fundaciones[0] && mascota.Fundaciones[0].nombre}</h2>
        </div>
      ))}
      </div>
    </div>
  );
}
