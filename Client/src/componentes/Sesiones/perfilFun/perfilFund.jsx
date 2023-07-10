import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailFundacion, resetDetail } from "../../../redux/Actions/get";
import style from './perfilFund.module.css';
import fundaciones from "../../Cartas/fundacion.png";
import CardAdop from "../../Cartas/cardAdopcion";
import Review from "../../Reviews/reviews";

export default function PerfilFund () {

    const data = useSelector((state) => state.sesion);
    const info = useSelector((state) => state.fundacionDetail)
    console.log(data)
    const mascotas = info.Mascotas
    const reviews = info.Reviews
    const dispatch = useDispatch();
    console.log(info)
    const { id } = data;
    const {image, nombre, ciudad, direccion, telefono, fundadaEn, email, mision} = info;

    useEffect(() => {
      dispatch(resetDetail());
      dispatch(getDetailFundacion(id));
    }, []);

    return (
        <div className={style.contenedorPadre}>
      
      
      {!data ? (
        <h3>LOADING...</h3>
      ) : (
        <div className={style.contenedorHijo}>
          {image ? (
            <img src={image} alt="Fundación" />
          ) : (
            <div className={style.contenedorInfo}>
              <div className={style.imagenFundacion}>
                <img src={fundaciones} alt="fundacion"></img>
              </div>
              <div className={style.infoFundacion}>
                <h2>Nombre: {nombre}</h2>
                <h5>Ciudad: {ciudad}</h5>
                <h5>Dirección: {direccion}</h5>
                <h5>Teléfono: {telefono}</h5>
                <h5>Email: {email}</h5>
                <h5>Fecha de Fundación: {fundadaEn}</h5>
              </div>
            </div>
            
          )}
          <div className={style.contenedorMision}>
            <div className={style.mision}>
                <h5>Misión: {mision}</h5>
            </div>
          </div>
          <div className={style.body}>
          <div >
          <h1>Mis mascotas</h1>
          <div className={style.containerAnimales}>
            {mascotas && mascotas.map((mascota, indexMascota) => (
              <CardAdop
               mascota={mascota}
              indexMascota={mascota.id}
              key={indexMascota}
              />
            ))}
          </div>
          </div>
          <div className={style.contenedorReviews}>
            <div className={style.reviews}>
              <h1>Mis reviews</h1>
            </div>
            {reviews && reviews.map((review, indexReview) => (
              <Review
               review={review}
               key={indexReview}
              />
            ))}
          </div>
          </div>
        </div>
      )}
    </div>
    );
}
