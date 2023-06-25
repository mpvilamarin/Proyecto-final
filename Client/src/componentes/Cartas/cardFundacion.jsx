import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllFundaciones} from '../../redux/Actions/get';
import style from './cards.module.css'

export default function Card() {
  const dispatch = useDispatch();
  const allFundaciones = useSelector(state => state.fundaciones)
  useEffect(() => {
    dispatch(getAllFundaciones())
  }, [dispatch]);
  
  return (
    <div className={style.cardContainer}>
      <h1>Fundaciones</h1>
        <div className={style.cardFundacion}>
            {allFundaciones && allFundaciones.map((fundacion, indexFundacion) => (
            <div key={indexFundacion} className={style.fundacion}>
            <Link to={`/fundacion/${fundacion.id}`}>
            <h2>Nombre: {fundacion.nombre}</h2>
            </Link>
            <h2>Direccion: {fundacion.direccion}</h2>
            <h2>Ciudad: {fundacion.ciudad}</h2>
            <h2>Email:{fundacion.email}</h2>
            <h2>Mision: {fundacion.mision}</h2>
            </div>
        ))}
        </div>
    </div>
  );
}