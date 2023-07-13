import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMascotas, getDetailFundacion, resetDetail } from "../../../redux/Actions/get";
import styles from './perfilFund.module.css';
import fundaciones from "../../Cartas/fundacion.png";
import CardMascota from "../../Cartas/cardMascotas";
import Review from "../../Reviews/reviews";
import Solicitudes from "../../Adopción/Solicitudes/solicitudes"
import { Link } from "react-router-dom";


export default function PerfilFund() {

  const data = useSelector((state) => state.sesion);
  const info = useSelector((state) => state.fundacionDetail)
  const adopciones = useSelector((state) => state.adopciones)

  console.log(adopciones);
  console.log("AQUI", info)
  const mascotas = info?.Mascotas
  const dispatch = useDispatch();
  const { id } = data;
  const { image, nombre, ciudad, direccion, telefono, fundadaEn, email, mision, reviews } = info;
  console.log(mascotas)
  useEffect(() => {
    dispatch(resetDetail());
    //  dispatch(getAllMascotas());
    dispatch(getDetailFundacion(id));
  }, []);

  const configuracion = () => {

  }
  return (
    <div className={styles.container}>
      {!info ? (
        <h3>LOADING...</h3>
      ) : (
        <>
          <h2 className={styles.name}>¡Hola {info.nombre}!</h2>
          <div className={styles.containerFundacion}>
            <img src={info.image} alt="fundacion" className={styles.imagenFundacion} />
            <div className={styles.infoFundacion}>
              <h5 className={styles.sub}>Mi información</h5>
              <h5>Ciudad: {info.ciudad}</h5>
              <h5>Dirección: {info.direccion}</h5>
              <h5>Teléfono: {info.telefono}</h5>
              <h5>Email: {info.email}</h5>
              <h5>Mi Misión: {info.mision}</h5>
            </div>
          </div>
          {/*<button onClick={configuracion} className={styles.buttonInfo}></button>*/}

          <div className={styles.containerMascotas}>
            <h1 className={styles.title}>Mis mascotas</h1>
            <h3 className={styles.sub1}>¿Te falto publicar algún peludito?</h3>
            <div className={styles.contButton}>
              <Link to="/formMascota">
                <button className={styles.button}>
                  Publicar Mascota💗
                </button>
              </Link>
            </div>
            <div className={styles.containerAnimales}>
              {mascotas &&
                mascotas.map((mascota, indexMascota) => (
                  // mascota.Fundaciones[0]?.nombre === nombre && (
                  <CardMascota
                    mascota={mascota}
                    indexMascota={mascota.id}
                    key={indexMascota}
                  />
                ))}
            </div>
          </div>

          <div className={styles.containerSolicitudes}>
            <div className={styles.containerAdopciones}>
              <h1 className={styles.title1}>Solicitudes de Adopcion</h1>
              <h3 className={styles.sub2}>¡Alguien está interesado en tu peludito!</h3>
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
            <div className={styles.containerReviews}>
              <h1 className={styles.title1}>Mis reviews</h1>
              <h3 className={styles.sub2}>Lo que piensan de la fundación</h3>
              {reviews &&
                reviews.map((review, indexReview) => (
                  <Review review={review} key={indexReview} />
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}