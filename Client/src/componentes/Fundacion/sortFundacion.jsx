import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterFundacionesByRating,
  sortFundacionesAZ,
  sortFundacionesZA,
} from "../../redux/Actions/filtroAndOrdenamiento";
import { sortFundacionesReviews } from "../../redux/Actions/filtroAndOrdenamiento";
import SearchBar from "../SearchBar/searchBar";
import styles from "./Fundacion.module.css";

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
      <h2 className={styles.ordenar}>Ordenar Fundaciones</h2>
      <button onClick={handleSortAZ} className={styles.aZ}>A-Z</button>
      <button onClick={handleSortZA} className={styles.aZ}>Z-A</button>

      <select onChange={(e) => handleSortReviews(e.target.value)} className={styles.dropDown}>
        <option value="">Puntuaciones ★</option>
        <option value="asc">Mayor Puntuación★</option>
        <option value="desc">Menor Puntuación★</option>
      </select>
    </div>
  );
};

export default SortFundaciones;
