import React from "react";
import { useDispatch } from "react-redux";
import { sortFundacionesAZ, sortFundacionesZA } from "../actions";

const SortFundaciones = () => {
  const dispatch = useDispatch();

  const handleSortAZ = () => {
    dispatch(sortFundacionesAZ());
  };

  const handleSortZA = () => {
    dispatch(sortFundacionesZA());
  };

  return (
    <div>
      <h2>Ordenar Fundaciones</h2>
      <button onClick={handleSortAZ}>A-Z</button>
      <button onClick={handleSortZA}>Z-A</button>
    </div>
  );
};

export default SortFundaciones;
