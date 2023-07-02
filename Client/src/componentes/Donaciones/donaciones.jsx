import axios from "axios";
import React, { useState } from "react";
import logoMercadoPago from "./mercadopago.png";
import { useDispatch } from "react-redux";
import { postDonaciones } from "../../redux/Actions/post";
import { useLocation } from "react-router-dom";

const Donaciones = () => {

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);
  const dispatch = useDispatch();
  const location = useLocation();
  const defaultFundacionId = location.state ? location.state.fundacionId : "";
  const [newDonacion, setNewDonacion] = useState({
    monto: null,
    fecha: "",
    descripcion: "",
    fundacionId: defaultFundacionId
  });

  const handleChange = (e) => {
    setNewDonacion({
      ...newDonacion,
      [e.target.name]: e.target.value
    });
  };

  const handleDonar = (e) => {
    const donacion = {
      title: "Donacion",
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
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(donacion)
    // e.preventDefault();
    // if (newDonacion.monto) {
    //   dispatch(postDonaciones(newDonacion));
    //   setNewDonacion({
    //     monto: null,
    //     fecha: "",
    //     descripcion: "",
    //     fundacionId: ""
    //   })
    // } else {
    //   alert('colocar un monto')
    // }

  };

  return (
    <div>
      <h1>Donar es darles una oportunidad de ser amados y cuidados</h1>
      <form>

        <div>
          <label>Monto:</label>
          <input
            type="number"
            name="monto"
            min="10"
            value={newDonacion.monto}
            onChange={handleChange}
          />

          <label>Id fundación:</label>
          <input
            type="text"
            name="fundacionId"
            value={newDonacion.fundacionId}
            onChange={handleChange}
            readOnly
          />

          <label>Fecha:</label>
          <input
            type="date"
            name="fecha"
            defaultValue={formattedDate}
            // value={newDonacion.fecha}
            onChange={handleChange}
            readOnly
          />

          <label>Descripción:</label>
          <input
            type="text"
            name="descripcion"
            value={newDonacion.descripcion}
            onChange={handleChange}
          />
          {newDonacion.monto && <p>Le donarás a los peluditos: ${newDonacion.monto}</p>}
        </div>
      </form>
      <div>
        <button onClick={handleDonar}>Donar</button>
      </div>
      <div>
        <img src={logoMercadoPago} alt="MercadoPago Logo" />
      </div>
    </div>
  );
};

export default Donaciones;