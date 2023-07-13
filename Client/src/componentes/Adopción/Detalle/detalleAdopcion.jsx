import style from "./detalleAdopcion.module.css";

const DetalleAdopcion = ({adopcion}) =>{
    return(
        <div className={style.container}>
        <div className={style.details}>
          <h2 className={style.property}>Nombre:</h2>
          <p className={style.value}>{adopcion?.nombreCompleto}</p>

          <h2 className={style.property}>Email:</h2>
          <p className={style.value}>{adopcion?.email}</p>

          <h2 className={style.property}>Telefono:</h2>
          <p className={style.value}>{adopcion?.telefono}</p>

          <h2 className={style.property}>Direccion:</h2>
          <p className={style.value}>{adopcion?.direccion}</p>

          <h2 className={style.property}>Ocupacion:</h2>
          <p className={style.value}>{adopcion?.ocupacion}</p>

          <h2 className={style.property}>Motivo de adopcion:</h2>
          <p className={style.value}>{adopcion?.motivoAdopcion}</p>
        </div>
        </div>
    )
}

export default DetalleAdopcion;