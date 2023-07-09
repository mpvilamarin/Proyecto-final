import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterFundacionesByRating,
  sortFundacionesAZ,
  sortFundacionesZA,
} from "../../redux/Actions/filtroAndOrdenamiento";
import { sortFundacionesReviews } from "../../redux/Actions/filtroAndOrdenamiento";

const SortFundaciones = () => {
  const dispatch = useDispatch();

  const handleSortAZ = () => {
    dispatch(sortFundacionesAZ());
  };

  const handleSortZA = () => {
    dispatch(sortFundacionesZA());
  };

  const handleSortReviews = (order) => {
    dispatch(sortFundacionesReviews(order));
  };

  const [showMessage, setShowMessage] = useState(false);

  const handleFilterByRating = (rating) => {
    dispatch(filterFundacionesByRating(rating));
    setShowMessage(true); // Mostrar mensaje después de filtrar
  };

  const handleCloseMessage = () => {
    setShowMessage(false); // Cerrar mensaje
  };

  return (
    <div>
      <h2>Ordenar Fundaciones</h2>
      <button onClick={handleSortAZ}>A-Z</button>
      <button onClick={handleSortZA}>Z-A</button>
      <button onClick={() => handleSortReviews("asc")}>
        Reviews Ascendente
      </button>
      <button onClick={() => handleSortReviews("desc")}>
        Reviews Descendente
      </button>

      <div>
        <label>Por puntuación</label>
        <select
          name=""
          id=""
          onChange={(e) => handleFilterByRating(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="1">1 Estrella</option>
          <option value="2">2 Estrellas</option>
          <option value="3">3 Estrellas</option>
          <option value="4">4 Estrellas</option>
          <option value="5">5 Estrellas</option>
        </select>

        {showMessage && (
          <div>
            <p>No hay fundaciones con ese rating.</p>
            <button onClick={handleCloseMessage}>Cerrar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortFundaciones;
