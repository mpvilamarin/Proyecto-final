import axios from "axios";
import React, { useEffect, useState } from "react";
import logoMercadoPago from "./mercadopago.png";
// import { useDispatch } from "react-redux";
// import { postDonaciones } from "../../redux/Actions/post";
import { useLocation } from "react-router-dom";
import styles from './Donaciones.module.css'

const Donaciones = () => {

  const [isAnimating, setIsAnimating] = useState(false);
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);
  // const dispatch = useDispatch();
  const location = useLocation();
  const defaultFundacionId = location.state ? location.state.fundacionId : "";
  const [newDonacion, setNewDonacion] = useState({
    monto: null,
    fecha: "",
    descripcion: "",
    fundacionId: defaultFundacionId,
    fundacionNombre: ""
  });

  useEffect(() => {
    if (location.state) {
      setNewDonacion({
        // ...
        fundacionNombre: location.state.fundacionNombre // Asigna el nombre de la fundación desde la ubicación
      });
    }
  }, [location.state]);

  const handleChange = (e) => {
    setNewDonacion({
      ...newDonacion,
      [e.target.name]: e.target.value
    });
  };

  const handleDonar = (e) => {
    setIsAnimating(true);
    const donacion = {
      title: `Donación a ${newDonacion.fundacionNombre}`,
      unit_price: parseInt(newDonacion.monto),
      quantity: 1,
      monto: newDonacion.monto,
      fecha: newDonacion.fecha,
      descripcion: newDonacion.descripcion,
      fundacionId: newDonacion.fundacionId
    };

    axios
      .post("http://localhost:3001/donaciones", donacion)
      .then((res) => {
        const initPoint = res.data.response.body.init_point;
        window.location.href = initPoint;
        console.log(initPoint)
      })
      .catch((error) => {
        console.log(error);
      });

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Tiempo en milisegundos de la animación

  };

  return (
    <div className={styles.container}>
      <h1>Donar es darles una oportunidad de ser amados y cuidados</h1>
      <form>

        <div>
          <label className={styles.label}>Monto:</label>
          <div className={styles.input}>
            <input
              className={styles.inputContainer}
              type="number"
              name="monto"
              min="10"
              value={newDonacion.monto}
              onChange={handleChange}
            />
          </div>



          <label className={styles.label}>Id fundación:</label>

          <div className={styles.input}>
            <input
              className={styles.inputContainer}
              type="text"
              name="fundacionId"
              value={newDonacion.fundacionId}
              onChange={handleChange}
              readOnly
            />
          </div>


          <label className={styles.label}>Fecha:</label>
          <div className={styles.input}>
            <input
              className={styles.inputContainer}
              type="date"
              name="fecha"
              defaultValue={formattedDate}
              // value={newDonacion.fecha}
              onChange={handleChange}
              readOnly
            />
          </div>


          <label className={styles.label}>Descripción:</label>
          <div className={styles.input}>
            <input
              className={styles.inputContainer}
              type="textarea"
              name="descripcion"
              value={newDonacion.descripcion}
              onChange={handleChange}
            />
          </div>
          {newDonacion.monto && <p className={styles.label}>Le donarás a la fundación {newDonacion.fundacionNombre}: ${newDonacion.monto}</p>}
        </div>
      </form>
      <div>
        <button onClick={handleDonar} className={`${styles.buttonDonar} ${isAnimating ? styles.donarAnimation : ""}`}>Donar</button>
      </div>
      <div className={styles.mercadoPagoLogo}>
        <img src={logoMercadoPago} alt="MercadoPago Logo" />
      </div>
    </div>
  );
};

export default Donaciones;