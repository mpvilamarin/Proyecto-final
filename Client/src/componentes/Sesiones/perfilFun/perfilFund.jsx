import { useSelector } from "react-redux";
import style from './perfilFund.module.css'
import FormReviews from "../../Forms/FormReviews";
import fundaciones from "../../Cartas/fundacion.png"

export default function PerfilFund () {

    const data = useSelector((state) => state.sesion);
    const {image, nombre, ciudad, direccion, telefono, fundadaEn, email, mision } = data[0];
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
          
          <div className={style.contenedorReviews}>
            <div className={style.reviews}>
              <h1>Mis reviews</h1>
            </div>
          </div>
          
        </div>
      )}
    </div>
    );
}
