import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import style from './detailMascota.module.css';
import { getDetailMascota } from '../../redux/Actions/get';

export default function Detalle() {
  const { id } = useParams();
  const allMascotas = useSelector((state) => state.mascotaDetail);
  console.log(allMascotas.mascotaDetail)
  var castrado = allMascotas.castrado ? 'Sí' : 'No';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailMascota(id));
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      <div>
        <Link to='/home'>Home</Link>
      </div>
      <div>
        <h2>Nombre: {allMascotas.nombre}</h2>
      </div>
      <img
        src="https://ih1.redbubble.net/image.3874729461.5539/st,small,507x507-pad,600x600,f8f8f8.jpg"
        alt="Imagen"
        className={style.image}
      />
      <div>
        <h4>Especie: {allMascotas.especie}</h4>
      </div>
      <div>
        <h4>Género: {allMascotas.genero}</h4>
      </div>
      <div>
        <h4>Edad: {allMascotas.edad}</h4>
      </div>
      <div>
        <h4>Tamaño: {allMascotas.tamaño}</h4>
      </div>
      <div>
        <h4>Temperamento: {allMascotas.temperamento}</h4>
      </div>
      <div>
        <h4>Descripción: {allMascotas.descripcion}</h4>
      </div>
      <div>
        <h1>Fundacion: </h1>
        <div>
          {allMascotas && allMascotas.fundaciones.map((fundacion, index) => (
            <div key={index}>
              <span>{fundacion.nombre}</span>
            </div>
          ))}
          </div>        
      </div>
      <div>
        <h4>Castrado: {castrado}</h4>
      </div>
      <div>
        <Link to={`/adopcion/`}>
          <button className={style.button}>Adoptar</button>
        </Link>
      </div>

    </div>
  );
}