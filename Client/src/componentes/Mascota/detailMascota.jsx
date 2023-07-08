// import React, { useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import style from './detailMascota.module.css';
// import { getDetailMascota } from '../../redux/Actions/get';

// export default function Detalle() {
//   const { id } = useParams();

//   const selector = useSelector(state => state.mascotaDetail);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getDetailMascota(id));
//   }, [dispatch, id]);

//   return (
//     <div>

//       {
//         selector.hasOwnProperty('nombre') ? (
//           <div className={style.container}>
//             <h2>Nombre: {selector.nombre}</h2>
//             <h2>Temperamento: {selector.temperamento}</h2>
//             <h2>Especie: {selector.especie}</h2>
//             <h2>Género: {selector.genero}</h2>
//             <h2>Edad: {selector.edad}</h2>
//             <h2>Tamaño: {selector.tamaño}</h2>
//             <h2>Descripción: {selector.descripcion}</h2>
//             <h2>Castrado: {selector.castrado}</h2>

//             <div>
//               {
//                 selector.Fundaciones.map((fundacion, index) => (
//                   <div key={index}>
//                     <h2>Fundacion: {fundacion.nombre}</h2>
//                   </div>
//                 ))
//               }
//             </div>
//           </div>

//         ) : undefined
//       }

//     </div>
//   )
//   return (
//     <div className={style.container}>
//       <div>
//         <Link to='/home'>Home</Link>
//       </div>
//       <div>
//         <h2>Nombre: {allMascotas.nombre}</h2>
//       </div>

//       <div>

//       </div>
//       <div>

//       </div>
//       <div>

//       </div>
//       <div>

//       </div>
//       <div>
//         <h4>Temperamento: {allMascotas.temperamento}</h4>
//       </div>
//       <div>

//       </div>
//       <div>

//       </div>
//       <div>
//         <Link to={`/adopcion/`}>
//           <button className={style.button}>Adoptar</button>
//         </Link>
//       </div>

//     </div>
//   );
// }

import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import style from "./detailMascota.module.css";
import { getDetailMascota } from "../../redux/Actions/get";

export default function Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const selector = useSelector((state) => state.mascotaDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailMascota(id));
  }, [dispatch, id]);

  const handleClickAdoptar = () => {
    // Obtener el ID de la mascota y el ID de la fundación
    const mascotaId = selector.id;
    const fundacionId =
      selector.Fundaciones[0].MascotasFundaciones.FundacioneId;

    // Pasar los IDs al componente mediante useNavigate
    navigate(`/formAdopcion?mascotaId=${mascotaId}&fundacionId=${fundacionId}`);
  };

  return (
    <div>
      {selector.hasOwnProperty("nombre") ? (
        <div className={style.container}>
          <h2>Nombre: {selector.nombre}</h2>
          <h2>Temperamento: {selector.temperamento}</h2>
          <h2>Especie: {selector.especie}</h2>
          <h2>Género: {selector.genero}</h2>
          <h2>Edad: {selector.edad}</h2>
          <h2>Tamaño: {selector.tamaño}</h2>
          <h2>Descripción: {selector.descripcion}</h2>
          <h2>Castrado: {selector.castrado}</h2>

          <div>
            {selector.Fundaciones.map((fundacion, index) => (
              <div key={index}>
                <h2>Fundacion: {fundacion.nombre}</h2>
              </div>
            ))}
          </div>
          <button onClick={handleClickAdoptar}>Adoptar</button>
        </div>
      ) : undefined}
    </div>
  );
}
