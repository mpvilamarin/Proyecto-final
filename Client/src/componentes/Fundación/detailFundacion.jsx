import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailFundacion, resetDetail } from "../../redux/Actions/get";
import FormReviews from "../Forms/FormReviews";
import Review from "../Reviews/reviews";
import fundaciones from '../Cartas/fundacion.png';
import style from './detailFundacion.module.css'
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
    <div className={style.contenedorPadre}>
      
      
      {!fundacion ? (
        <h3>LOADING...</h3>
      ) : (
        <div className={style.contenedorHijo}>
          {fundacion.image ? (
            <img src={fundacion.image} alt="Fundación" />
          ) : (
            <div className={style.contenedorInfo}>
              <div className={style.imagenFundacion}>
                <img src={fundaciones} alt="fundacion"></img>
              </div>
              <div className={style.infoFundacion}>
                <h2>Nombre: {fundacion.nombre}</h2>
                <h5>Ciudad: {fundacion.ciudad}</h5>
                <h5>Dirección: {fundacion.direccion}</h5>
                <h5>Teléfono: {fundacion.telefono}</h5>
                <h5>Email: {fundacion.email}</h5>
                <h5>Fecha de Fundación: {fundacion.fundadaEn}</h5>
              </div>
            </div>
            
          )}
          <div className={style.contenedorMision}>
            <div className={style.mision}>
                <h5>Misión: {fundacion.mision}</h5>
            </div>
            <div className={style.buttonDonar}>
              <button onClick={handleClick}>Donar</button>
            </div>
          </div>
          
          <div className={style.contenedorComentarios}>
            <div className={style.Comentarios}>
              <h1>Comentarios aqui</h1>
            </div>
          </div>
          
          <div className={style.contenedorReviews}>
            <div className={style.reviews}>
              <FormReviews fundacionNombre={fundacion.nombre}/>
            </div>
          </div>
          
          <div className={style.contenedorHome}>
            <div className={style.buttonHome}>
              <Link to="/home">
                <button>BACK TO HOME</button>
              </Link>
            </div>  
          </div>
          
        </div>
      )}
    </div>
  );
};

export default DetailFundacion;
