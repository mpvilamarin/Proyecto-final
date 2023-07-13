import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllMascotas, getAllFundaciones } from "../../redux/Actions/get.js";
import {
  filterMascotaByEspecie,
  filterMascotaByGenero,
  sortMascotasAZ,
  sortMascotasZA,
  filterMascotaByFundacion,
} from "../../redux/Actions/filtroAndOrdenamiento.js";
import Pagination from "./Paginación/paginacion.jsx";

import styles from "./adopcion.module.css";
import CardAdop from "../Cartas/cardAdopcion.jsx";

const Adopcion = () => {
  const dispatch = useDispatch();

  const allPets = useSelector((state) => state.mascotas);
  const allFundations = useSelector((state) => state.fundaciones);
  console.log(allPets);
  const [selectedFundacion, setSelectedFundacion] = useState("All");
  const uniqueFundaciones = [
    ...new Set(allFundations.map((fundacion) => fundacion.nombre)),
  ];
  const [generoFilter, setGeneroFilter] = useState("");
  const [ordenamiento, setOrdenamiento] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(8);
  const [especie, setEspecie] = useState("");
  const petsFilter = useSelector((state) => state.mascotas);

  useEffect(() => {
    dispatch(getAllMascotas());
    dispatch(getAllFundaciones());
    
  }, [dispatch]);

  //PAGINADO TEMPORAL ======>>

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = petsFilter.slice(
    indexOfFirstElement,
    indexOfLastElement
  );

  const paginationButtonNext = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  const paginationButtonPrev = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  };

  const handlePageCh = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEspecieFilter = (e) => {
    const especie = e.target.value;
    setEspecie(especie);
    dispatch(filterMascotaByEspecie(especie));
  };
  const handleGeneroFilter = (event) => {
    const genero = event.target.value;
    setGeneroFilter(genero);
    dispatch(filterMascotaByGenero(genero));
  };

  const handleSortAsc = () => {
    setOrdenamiento("asc");
    dispatch(sortMascotasAZ());
  };

  const handleSortDesc = () => {
    setOrdenamiento("desc");
    dispatch(sortMascotasZA());
  };

  const handleFundacion = (e) => {
    e.preventDefault();
    dispatch(filterMascotaByFundacion(e.target.value));
    setSelectedFundacion(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.containerAnimales}>
        {currentElements.map((mascota, indexMascota) => (
          <CardAdop
            mascota={mascota}
            indexMascota={mascota.id}
            key={indexMascota}
          />
        ))}
      </div> */}
      <div className={styles.caja}>
        <div>
          <img
            src={require("../../assets/MascotaFundacion2.png")}
            alt="mascotas"
            className={styles.img}>
          </img>
        </div>
        <div className={styles.containerFiltros}>
          <h1>MASCOTAS EN ADOPCIÓN</h1>
          <h2 className={styles.sub}>Busca tu mascota ideal</h2>

          <div className={styles.cont1}>
            <div className={styles.selectoresWrapper}>
              <div className={styles.divSelector}>
                <label className={styles.marca}>Género:</label>
                <select
                  value={generoFilter}
                  onChange={handleGeneroFilter}
                  className={styles.options}
                >
                  <option value="">Todos</option>
                  <option value="Macho">Macho</option>
                  <option value="Hembra">Hembra</option>
                  <option value="Desconocido">Desconocido</option>
                </select>
              </div>
              <div className={styles.radioOption}>
                <label className={styles.marca}>Especie:</label>
                <div className={styles.radioOption}>
                  <input type="radio" id="ambos" name="especie" value="" checked={especie === ""} onChange={handleEspecieFilter} />
                  <label htmlFor="ambos">
                    <img src={require("../../assets/AmbosFiltro.png")} alt="Ambos" className={styles.radioImg2} />
                  </label>
                </div>
                <div className={styles.radioOption}>
                  <input type="radio" id="perro" name="especie" value="Perro" checked={especie === "Perro"} onChange={handleEspecieFilter} />
                  <label htmlFor="perro">
                    <img src={require("../../assets/PerroFiltro.png")} alt="Perro" className={styles.radioImg} />
                  </label>
                </div>
                <div className={styles.radioOption}>
                  <input type="radio" id="gato" name="especie" value="Gato" checked={especie === "Gato"} onChange={handleEspecieFilter} />
                  <label htmlFor="gato">
                    <img src={require("../../assets/GatoFiltro.png")} alt="Gato" className={styles.radioImg} />
                  </label>
                </div>
              </div>
            </div>

            <div className={styles.cont2}>
              <div>
                <label className={styles.marca}>Ordenar por nombre:</label>
                <button onClick={handleSortAsc} className={styles.aZ}>A-Z</button>
                <button onClick={handleSortDesc} className={styles.aZ}>Z-A</button>
              </div>
              <div>
                <label className={styles.marca}>Fundación:</label>
                <select
                  className={styles.options}
                  onChange={handleFundacion}
                  value={selectedFundacion}
                >
                  <option value="All">Ver todas las fundaciones</option>
                  {uniqueFundaciones.map((x, index) => (
                    <option value={x} key={index}>
                      {x}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={styles.containerAnimales}>
        {currentElements
          .filter((mascota) => mascota.activo) // Filtrar las mascotas activas
          .map((mascota, indexMascota) => (
            <CardAdop
              mascota={mascota}
              indexMascota={mascota.id}
              key={indexMascota}
            />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <div className={styles.pagination}>
          <div>
            {currentPage > 1 && (
              <button className={styles.button} onClick={paginationButtonPrev}>
                <img src={require("../../assets/Prev.png")} alt="Next" className={styles.buttonImg} />
              </button>
            )}
          </div>

          <Pagination
            currentPage={currentPage}
            elementsPerPage={elementsPerPage}
            totalElements={allPets.length}
            onPageChange={handlePageCh}
          />

          <div>
            {Math.ceil(allPets.length / elementsPerPage) > currentPage && (
              <button className={styles.button} onClick={paginationButtonNext}>
                <img src={require("../../assets/Next.png")} alt="Next" className={styles.buttonImg} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div >
  );
};
export default Adopcion;
