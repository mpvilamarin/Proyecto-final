import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailFundacion, resetDetail } from "../../redux/Actions/get";
import FormReviews from "../Forms/FormReviews";
import Review from "../Reviews/reviews";
import fundaciones from '../Cartas/fundacion.png';

const DetailFundacion = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const fundacion = useSelector((state) => state.fundacionDetail);
  const navigate = useNavigate();
  const [fundacionNombre, setFundacionNombre] = useState("");

  const fundacionId = id;

  const handleClick = () => {
    navigate("/donaciones", { state: { fundacionId, fundacionNombre: fundacion.nombre } });
  };

  useEffect(() => {
    dispatch(getDetailFundacion(id));
    return () => {
      dispatch(resetDetail());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (fundacion) {
      setFundacionNombre(fundacion.nombre);
    }
  }, [fundacion]);

  return (
    <div>
      <div>
        <button onClick={handleClick}>Donar</button>
      </div>
      {!fundacion ? (
        <h3>LOADING...</h3>
      ) : (
        <div>
          {fundacion.image ? (
            <img src={fundacion.image} alt="Fundación" />
          ) : (
            <div>
              <img src={fundaciones} alt="fundacion"></img>
            </div>
          )}
          
          <FormReviews fundacionNombre={fundacion.nombre}/>

          <h2>Nombre: {fundacion.nombre}</h2>
          <h5>Ciudad: {fundacion.ciudad}</h5>
          <h5>Dirección: {fundacion.direccion}</h5>
          <h5>Teléfono: {fundacion.telefono}</h5>
          <h5>Email: {fundacion.email}</h5>
          <h5>Fecha de Fundación: {fundacion.fundadaEn}</h5>
          <h5>Misión: {fundacion.mision}</h5>

          <div style={{ paddingLeft: '80%' }}>
          
            
          </div>


          <Link to="/home">
            <button>BACK TO HOME</button>
          </Link>
           
        </div>
      )}

    </div>
  );
};

export default DetailFundacion;
