import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { filterMascotaByFundacion } from "../../redux/Actions/filtroAndOrdenamiento";
import { getAllMascotas } from '../../redux/Actions/get'
import Cartas from "../Cartas/cards";
import Pagination from "./Paginación/paginacion";
import styles from "./adopcion.module.css";

const Adopcion = () => {

  const dispatch = useDispatch();
  const allPets = useSelector((state) => state.Pets)
  const fundState = useSelector((state) => state.fundaciones);


  // Paginación (:

  const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage] = useState(9);

  const lastPetIndex = currentPage * petsPerPage;
  const firstPetIndex = lastPetIndex - petsPerPage;
  const currrentPets = allPets ? allPets.slice(firstPetIndex, lastPetIndex) : [];

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const resetPagination = () => {
    setCurrentPage(1);
  };


  useEffect(() => {
    dispatch(getAllMascotas());
  }, [dispatch]);

  const handleClick = (event) => {
    event.preventDefault();
    resetPagination();
    dispatch(getAllMascotas());
  };

  const handleFilterByFundacion = (event) => {
    event.preventDefault();
    resetPagination();
    dispatch(filterMascotaByFundacion(event.target.value));
  };

  // const handleSearch = (search) => {
  //     resetPagination();
  //     dispatch(getAllMascotas(search));
  // };

  const petsLength = allPets ? allPets.length : 0;

  return (
    <div className="container" >
      <h2>Mascotas en adopción</h2>
      <div className={styles.selectContainer}>
        <label className={styles.filterLabel}>Fundaciones:</label>
        <select
          className={styles.filterSelect}
          onChange={(event) => handleFilterByFundacion(event)}
        >
          <option value="">Seleccionar</option>
          <option value="Todas">Todas las fundaciones</option>
          {fundState?.sort().map((fund) => (
            <option key={fund} value={fund}>
              {fund}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button
          className={styles.reloadButton}
          onClick={(event) => handleClick(event)}
        >
          Limpiar filtross
        </button>
      </div>
      <div className="container" >
        {currrentPets?.map((pet) => (
          <pets
            key={pet.id}
            name={pet.name}
            image={pet.image}
          />
        ))}
      </div>
      <Pagination
        pets={petsLength}
        petsPerPage={petsPerPage}
        currentPage={currentPage}
        pagination={pagination}
      />
    </div >
  );
};
export default Adopcion;