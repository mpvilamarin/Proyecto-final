import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailFundacion, resetDetail } from "../../redux/Actions/get";
import FormReviews from "../Forms/FormReviews";
import fundaciones from '../Cartas/fundacion.png';
import style from './detailFundacion.module.css'
import Review from "../Reviews/reviews";
import CardAdop from "../Cartas/cardAdopcion";
import { useAuth0 } from "@auth0/auth0-react";

const DetailFundacion = () => {
  const { isAuthenticated, user } = useAuth0();

  const { id } = useParams();
  const dispatch = useDispatch();
  const fundacion = useSelector((state) => state.fundacionDetail);
  console.log(fundacion)
  const reviews = fundacion.Reviews
  const mascotas = fundacion.Mascotas
  console.log(mascotas)
  const navigate = useNavigate();
  // const [fundacionNombre, setFundacionNombre] = useState("");

  const fundacionId = id;

  const handleClick = () => {
    if(isAuthenticated){
      navigate("/donaciones", { state: { fundacionId, fundacionNombre: fundacion.nombre } });
    }else{
      alert("Por favor inicia sesión para realizar una donación")
      navigate('/login')
    }
  };

  useEffect(() => {
    dispatch(resetDetail());
    dispatch(getDetailFundacion(id));
  }, [dispatch, id]);



  return (
    <div className={style.contenedorPadre}>
      {!fundacion ? (
        <h3>LOADING...</h3>
      ) : (
        <div className={style.contenedorHijo}>
          <div className={style.contenedorInfo}>
            <div className={style.divDonar}>
              <h1 className={style.h1Donar}>¿Deseas ayudar?</h1>
               <button class={style.buttonDonar} onClick={handleClick}>
                    Donar
                <svg class={style.svgIcon} viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
                </button>
            </div>
            <div className={style.imagenFundacion}>
              {fundacion?.image ? (
                <img src={fundacion?.image} alt="Fundación" />
              ) : (
                <img src={fundaciones} alt="image" />
              )}
            </div>
            <div className={style.infoFundacion}>
              <h2>Nombre: {fundacion.nombre}</h2>
              <h5>Ciudad: {fundacion?.ciudad}</h5>
              <h5>Dirección: {fundacion?.direccion}</h5>
              <h5>Teléfono: {fundacion?.telefono}</h5>
              <h5>Email: {fundacion?.email}</h5>
              {/* <h5>Fecha de Fundación: {fundacion?.fundadaEn}</h5> */}
              <h5>Misión: {fundacion?.mision}</h5>
            </div>
          </div>

          <div className={style.body}>
            <h1 className={style.h1}>Mis Mascotas</h1>
          <div className={style.containerAnimales}>
            {mascotas &&
              mascotas.map((mascota, indexMascota) => (
                <CardAdop
                  mascota={mascota}
                  indexMascota={mascota.id}
                  key={indexMascota}
                />
              ))}
          </div>
          
          <div className={style.contenedorReviews}>
            <h1>Reviews</h1>
            {isAuthenticated &&(
              <div className={style.reviews}>
                <FormReviews fundacionNombre={fundacion?.nombre} />
              </div>
            )}
            
            {reviews &&
              reviews.map((review, indexReview) => (
                <Review review={review} key={indexReview} />
              ))}
          </div>
            
        </div>
        </div>
      )}
    </div>
  );
}
export default DetailFundacion;
