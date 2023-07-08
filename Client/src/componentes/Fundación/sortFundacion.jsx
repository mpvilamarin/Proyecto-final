import React from "react";
import { useDispatch } from "react-redux";
import {
  sortFundacionesAZ,
  sortFundacionesZA,
} from "../../redux/Actions/filtroAndOrdenamiento";
import { sortFundacionesReviews } from "../../redux/Actions/filtroAndOrdenamiento";
import SearchBar from "../SearchBar/searchBar";

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
    </div>
  );
};

export default SortFundaciones;
