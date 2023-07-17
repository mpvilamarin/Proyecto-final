import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterMascotaByEspecie } from "../../redux/Actions/filtroAndOrdenamiento";

const MascotasFilter = () => {
  const dispatch = useDispatch();
  const [especie, setEspecie] = useState("");

  const handleEspecieChange = (e) => {
    setEspecie(e.target.value);
  };

  const handleEspecieFilter = () => {
    dispatch(filterMascotaByEspecie(especie));
  };

  return (
    <div>
      <h2>Filtrar Mascotas por Especie</h2>
      <div>
        <label htmlFor="especie">Especie:</label>
        <select id="especie" value={especie} onChange={handleEspecieChange}>
          <option value="">Seleccionar</option>
          <option value="Macho">Macho</option>
          <option value="Hembra">Hembra</option>
        </select>
        <button onClick={handleEspecieFilter}>Filtrar</button>
      </div>
    </div>
  );
};

export default MascotasFilter;
