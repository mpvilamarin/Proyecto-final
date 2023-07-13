import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMascotas, getDetailFundacion, resetDetail } from "../../../redux/Actions/get";
import style from './perfilFund.module.css';
import fundaciones from "../../Cartas/fundacion.png";
import CardMascota from "../../Cartas/cardMascotas";
import Review from "../../Reviews/reviews";
import Solicitudes from "../../Adopción/Solicitudes/solicitudes"
export default function PerfilFund () {

    const data = useSelector((state) => state.sesion);
    const info = useSelector((state) => state.fundacionDetail)
    const adopciones = useSelector((state) => state.adopciones)
    console.log(adopciones);
    console.log(info)
    const mascotas = info?.Mascotas
    const dispatch = useDispatch();
    const { id } = data;
    const {image, nombre, ciudad, direccion, telefono, fundadaEn, email, mision, reviews} = info;
    console.log(mascotas)
    useEffect(() => {
      dispatch(resetDetail());
    //  dispatch(getAllMascotas());
      dispatch(getDetailFundacion(id));
    }, []);

    const configuracion = () => {
      
    }

    return (
      <div className={style.contenedorPadre}>
      {!info ? (
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
                <h5>Misión: {mision}</h5>
              </div>
              <button onClick={configuracion()} className={style.botonInfo}> </button>
            </div>
            
          )}
          <div className={style.contenedorMision}>
            <div className={style.mision}>
            </div>
          </div>
          <div className={style.body}>
          <div >
          <h1>Mis mascotas</h1>
          <div className={style.containerAnimales}>
            {mascotas && mascotas.map((mascota, indexMascota) => (
       //       mascota.Fundaciones[0]?.nombre === nombre && (
                <CardMascota
                  mascota={mascota}
                  indexMascota={mascota.id}
                  key={indexMascota}
                />
           //   )
            ))}
          </div>
          </div>
          <div className={style.contenedorReviews}>
            <div className={style.reviews}>
              <h1>Solicitudes Adopcion</h1>
            </div>
          <div className={style.contenedorAdopciones}>
            {adopciones
              .filter((adopcion) => adopcion.fundacionId === id) // Filtrar las mascotas activas
              .map((adopcion, indexAdopcion) => (
                <Solicitudes
                  nombreCompleto={adopcion.nombreCompleto}
                  motivoAdopcion={adopcion.motivoAdopcion}
                  indexAdopcion={adopcion.id}
                  key={indexAdopcion}
                />
            ))}
          </div>
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
