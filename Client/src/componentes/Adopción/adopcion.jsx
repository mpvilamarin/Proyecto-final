import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllMascotas } from "../../redux/Actions/get.js";
import {
  filterMascotaByGenero,
  sortMascotasAZ,
  sortMascotasZA,
} from "../../redux/Actions/filtroAndOrdenamiento.js";
import mascotas from "../Cartas/perroGato.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./adopcion.css";

const Adopcion = () => {
  const dispatch = useDispatch();
  const allPets = useSelector((state) => state.mascotas);
  const [generoFilter, setGeneroFilter] = useState("");
  const [ordenamiento, setOrdenamiento] = useState("");

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

  // Paginación (:

  // const [currentPage, setCurrentPage] = useState(1);
  // const [petsPerPage] = useState(9);

  // const lastPetIndex = currentPage * petsPerPage;
  // const firstPetIndex = lastPetIndex - petsPerPage;
  // const currrentPets = allPets ? allPets.slice(firstPetIndex, lastPetIndex) : [];

  // const pagination = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // const resetPagination = () => {
  //   setCurrentPage(1);
  // };

  useEffect(() => {
    dispatch(getAllMascotas());
  }, [dispatch]);

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   resetPagination();
  //   dispatch(getAllMascotas());
  // };

  // const handleFilterByFundacion = (event) => {
  //   event.preventDefault();
  //   resetPagination();
  //   dispatch(filterMascotaByFundacion(event.target.value));
  // };

  // const handleSearch = (search) => {
  //     resetPagination();
  //     dispatch(getAllMascotas(search));
  // };

  // const petsLength = allPets ? allPets .length : 0;

  return (
    <div className="container">
      <h2>Mascotas en adopción</h2>
      <div>
        <label>Género:</label>
        <select value={generoFilter} onChange={handleGeneroFilter}>
          <option value="">Todos</option>
          <option value="Macho">Macho</option>
          <option value="Hembra">Hembra</option>
          <option value="Desconocido">Desconocido</option>
        </select>
      </div>
      <div>
        <label>Ordenar por nombre:</label>
        <button onClick={handleSortAsc}>A-Z</button>
        <button onClick={handleSortDesc}>Z-A</button>
      </div>
      <div>
        <label>Fundaciones:</label>
        {/* <select
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
                </select> */}
      </div>
      <div>
        <button

        // onClick={(event) => handleClick(event)}
        >
          Limpiar filtros
        </button>
      </div>
      {/* <div className="container" >
        {allPets?.map((pet) => (
          <CardMascota
            key={pet.id}
            name={pet.nombre}
          // image={pet.image}

          />
        ))}
      </div> */}
      {/* <Pagination
        pets={petsLength}
        petsPerPage={petsPerPage}
        currentPage={currentPage}
        pagination={pagination}
      /> */}

      <div className="container">
        {allPets.map((mascota, indexMascota) => (
          <Card key={indexMascota} style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={mascotas}
              alt="Mascota"
              className="card-image"
            />
            <Card.Body>
              <Link to={`/mascota/${mascota.id}`}>
                <Card.Title>{mascota.nombre}</Card.Title>
              </Link>
              <Card.Text>
                Género: {mascota.genero}
                <br />
                Temperamento: {mascota.temperamento}
              </Card.Text>
              <Button variant="primary">Ver Más</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Adopcion;
