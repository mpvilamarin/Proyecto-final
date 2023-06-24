import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import style from './detalle.module.css';
import { getDetailMascota } from '../../redux/Actions/get';

export default function Detalle() {
  const { id } = useParams();
  const allMascotas = useSelector((state) => state.mascotas);
  const mascota = allMascotas.filter((mascotas) => mascotas.id == id);
  var castrado = mascota[0].castrado ? 'Sí' : 'No';
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
        <h2>Nombre: {mascota[0].nombre}</h2>
      </div>
      <img
        src="https://ih1.redbubble.net/image.3874729461.5539/st,small,507x507-pad,600x600,f8f8f8.jpg"
        alt="Imagen"
        className={style.image}
      />
      <div>
        <h4>Especie: {mascota[0].especie}</h4>
      </div>
      <div>
        <h4>Género: {mascota[0].genero}</h4>
      </div>
      <div>
        <h4>Edad: {mascota[0].edad}</h4>
      </div>
      <div>
        <h4>Tamaño: {mascota[0].tamaño}</h4>
      </div>
      <div>
        <h4>Temperamento: {mascota[0].temperamento}</h4>
      </div>
      <div>
        <h4>Descripción: {mascota[0].descripcion}</h4>
      </div>
      <div>
        <h4>Esterilizado/Castrado: {castrado}</h4>
      </div>
      <div>
        <Link to={`/adopcion/`}>
          <button className={style.button}>Adoptar</button>
        </Link>
      </div>

    </div>
  );
}