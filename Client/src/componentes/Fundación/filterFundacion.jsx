import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterFundacionesByCiudad,
  filterFundacionesByNombre,
} from "../actions";

const FundacionesFilter = () => {
  const dispatch = useDispatch();
  const [ciudad, setCiudad] = useState("");
  const [nombre, setNombre] = useState("");

  const handleCiudadChange = (e) => {
    setCiudad(e.target.value);
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleCiudadFilter = () => {
    dispatch(filterFundacionesByCiudad(ciudad));
  };

  const handleNombreFilter = () => {
    dispatch(filterFundacionesByNombre(nombre));
  };

  return (
    <div>
      <h2>Filtrar Fundaciones</h2>
      <div>
        <label htmlFor="ciudad">Ciudad:</label>
        <input
          type="text"
          id="ciudad"
          value={ciudad}
          onChange={handleCiudadChange}
        />
        <button onClick={handleCiudadFilter}>Filtrar</button>
      </div>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
        <button onClick={handleNombreFilter}>Filtrar</button>
      </div>
    </div>
  );
};

export default FundacionesFilter;
