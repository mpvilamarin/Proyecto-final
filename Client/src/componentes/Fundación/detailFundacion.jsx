import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailFundacion, resetDetail } from "../../redux/Actions";

const DetailFundacion = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const fundacion = useSelector((state) => state.fundacionDetail);

  useEffect(() => {
    dispatch(getDetailFundacion(id));
    return () => {
      dispatch(resetDetail());
    };
  }, [dispatch, id]);

  return (
    <div>
      {!fundacion ? (
        <h3>LOADING...</h3>
      ) : (
        <div>
          <img src={fundacion.image} alt="Imagen no encontrada" />
          <h2>{fundacion.name}</h2>
          <h5>Nombre: {fundacion.nombre}</h5>
          <h5>Ciudad: {fundacion.ciudad}</h5>
          <h5>Dirección: {fundacion.direccion}</h5>
          <h5>Teléfono: {fundacion.telefono}</h5>
          <h5>Email: {fundacion.email}</h5>
          <h5>Fecha de Fundación: {fundacion.fundadaEn}</h5>
          <h5>Misión: {fundacion.mision}</h5>

          <Link to="/home">
            <button>BACK TO HOME</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DetailFundacion;
