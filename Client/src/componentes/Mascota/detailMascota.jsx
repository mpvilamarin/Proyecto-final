import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./detailMascota.module.css";
import { getDetailMascota } from "../../redux/Actions/get";
import { useNavigate } from 'react-router-dom'

export default function Detalle({ mascotaId }) {
  const selector = useSelector((state) => state.mascotaDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDetailMascota(mascotaId));
  }, [dispatch, mascotaId]);

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
          <div className={style.imageContainer}>
            <img className={style.image} src={selector.image} alt="Mascota" />
          </div>
          <div className={style.details}>
            <h2 className={style.property}>Nombre:</h2>
            <p className={style.value}>{selector.nombre}</p>

            <h2 className={style.property}>Temperamento:</h2>
            <p className={style.value}>{selector.temperamento}</p>

            <h2 className={style.property}>Especie:</h2>
            <p className={style.value}>{selector.especie}</p>

            <h2 className={style.property}>Género:</h2>
            <p className={style.value}>{selector.genero}</p>

            <h2 className={style.property}>Edad:</h2>
            <p className={style.value}>{selector.edad}</p>

            <h2 className={style.property}>Tamaño:</h2>
            <p className={style.value}>{selector.tamaño}</p>

            <h2 className={style.property}>Descripción:</h2>
            <p className={style.value}>{selector.descripcion}</p>

            <h2 className={style.property}>Castrado:</h2>
            <p className={style.value}>{selector.castrado}</p>
          </div>
          <button className={style.button} onClick={handleClickAdoptar}>
            Adoptar
          </button>
        </div>
      ) : undefined}
    </div>
  );
}
