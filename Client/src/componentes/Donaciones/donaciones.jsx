import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logoMercadoPago from "../../assets/mercadopago3.png";
import styles from "./Donaciones.module.css";

const Donaciones = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);
  const { user } = useAuth0();
  const location = useLocation();
  const defaultFundacionId = location.state ? location.state.fundacionId : "";

  const [newDonacion, setNewDonacion] = useState({
    monto: "",
    fecha: formattedDate,
    descripcion: "",
    fundacionId: defaultFundacionId,
    fundacionNombre: "",
    email: user ? user.email : "",
  });

  useEffect(() => {
    if (location.state) {
      setNewDonacion((prevDonacion) => ({
        ...prevDonacion,
        fundacionNombre: location.state.fundacionNombre,
        fundacionId: prevDonacion.fundacionId,
        email: prevDonacion.email,
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDonacion((prevDonacion) => {
      if (name === "fecha" && prevDonacion.fecha) {
        return prevDonacion;
      }
      return { ...prevDonacion, [name]: value };
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
      fundacionId: newDonacion.fundacionId,
      email: newDonacion.email,
    };

    axios
      .post("https://fundacion-mascotas-uz9u.onrender.com/donaciones", donacion)

      .then((res) => {
        const initPoint = res.data.response.body.init_point;
        window.open(initPoint);
        console.log(initPoint);
        console.log(donacion);
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
      <h1>DONAR ES DARLES UNA OPORTUNIDAD</h1>
      <h1>DE SER AMADOS Y CUIDADOS</h1>
      <form className={styles.form}>
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
          <label className={styles.label}>Descripción:</label>
          <div className={styles.input}>
            <input
              className={styles.inputContainer2}
              type="textarea"
              name="descripcion"
              value={newDonacion.descripcion}
              onChange={handleChange}
            />
          </div>
          {newDonacion.monto && (
            <p className={styles.label}>
              Le donarás a la fundación {newDonacion.fundacionNombre}: ${newDonacion.monto}

            </p>
          )}
        </div>
      </form>
      <div>
        <button
          onClick={handleDonar}
          className={`${styles.buttonDonar} ${isAnimating ? styles.donarAnimation : ""
            }`}
        >
          Donar
        </button>
      </div>
      <div className={styles.mercadoPagoLogo}>
        <img src={logoMercadoPago} alt="MercadoPago Logo" />
      </div>
    </div>
  );
};

export default Donaciones;
