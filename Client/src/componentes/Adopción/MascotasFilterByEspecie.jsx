import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { filterMascotaByEspecie } from "../../redux/Actions/filtroAndOrdenamiento";
import { useDispatch, useSelector } from "react-redux";

const MascotasFilter = ({ onFilter }) => {
  // const dispatch = useDispatch();
  const [especie, setEspecie] = useState("");
  const dispatch = useDispatch();

  const handleEspecieChange = (e) => {
    setEspecie(e.target.value);
  };

  const handleEspecieFilter = () => {
    dispatch(filterMascotaByEspecie(especie))
  };


  return (
    <div>
      <h2>Filtrar Mascotas</h2>
      <div>
        <label htmlFor="especie">Especie:</label>
        <select id="especie" value={especie} onChange={handleEspecieChange}>
          <option value="todos">perros y gatos</option>
          <option value="perro">Perro</option>
          <option value="gato">Gato</option>
        </select>
        <button onClick={handleEspecieFilter}>Filtrar</button>
      </div>
    </div>
  );
};

export default MascotasFilter;
