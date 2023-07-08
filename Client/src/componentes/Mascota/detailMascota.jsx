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
    const mascotaId = selector.id;
    const fundacionId =
      selector.Fundaciones[0].MascotasFundaciones.FundacioneId;

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
