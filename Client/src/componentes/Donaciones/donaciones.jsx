import axios from "axios";
import React, { useState } from "react";
import logoMercadoPago from "./mercadopago.png";

const Donaciones = () => {
  const [donacion, setDonacion] = useState({
    title: "",
    price: 0,
    quantity: 0,
  });

  const handleInputChange = (e) => {
    setDonacion({
      ...donacion,
      [e.target.name]: e.target.value,
    });
  };

  const handleDonarClick = () => {
    axios
      .post("http://localhost:3001/pasarelaPago/donacion", donacion)
      .then((res) => (window.location.href = res.data.response.body.init_point))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Donar es darles una oportunidad de ser amados y cuidados</h1>
      <form>
        <input
          type="text"
          name="title"
          value={donacion.title}
          onChange={handleInputChange}
          placeholder="Descripcion"
        />
        <input
          type="number"
          min="10"
          name="price"
          value={donacion.price}
          onChange={handleInputChange}
          placeholder="Monto"
        />
        <input
          type="number"
          min="1"
          name="quantity"
          value={donacion.quantity}
          onChange={handleInputChange}
          placeholder="Cantidad"
        />
        <button type="button" onClick={handleDonarClick}>
          Donar
        </button>
      </form>
      <div>
        <img src={logoMercadoPago} alt="MercadoPago Logo" />
      </div>
    </div>
  );
};

export default Donaciones;
