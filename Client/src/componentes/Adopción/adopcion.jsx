import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllMascotas, getAllFundaciones } from "../../redux/Actions/get.js";
import {
  filterMascotaByEspecie,
  filterMascotaByGenero,
  sortMascotasAZ,
  sortMascotasZA,
} from "../../redux/Actions/filtroAndOrdenamiento.js";
import { filterMascotaByFundacion } from "../../redux/Actions/filtroAndOrdenamiento.js";
import mascotas from "../Cartas/perroGato.png";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pagination from "./Paginación/paginacion.jsx";
import './adopcion.css';


const Adopcion = () => {
  const dispatch = useDispatch();

  const allPets = useSelector((state) => state.mascotas)
  const allFundations = useSelector((state) => state.fundaciones)
  const [selectedFundacion, setSelectedFundacion] = useState('All');
  const uniqueFundaciones = [...new Set(allFundations.map(fundacion => fundacion.nombre))];
  const [generoFilter, setGeneroFilter] = useState("");
  const [ordenamiento, setOrdenamiento] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const [elementsPerPage] = useState(4)
  const [especie, setEspecie] = useState("");
  const petsFilter = useSelector((state) => state.filtroMascotas);



  useEffect(() => {
    dispatch(getAllMascotas());
    dispatch(getAllFundaciones());
  }, [dispatch]);

  //PAGINADO TEMPORAL ======>>

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = petsFilter.slice(indexOfFirstElement, indexOfLastElement);

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
  }

  const handleEspecieFilter = (e) => {
    const especie = e.target.value;
    setEspecie(especie);
    dispatch(filterMascotaByEspecie(especie))
    if (especie === 'todos') {
      dispatch(getAllMascotas())
    }
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
  }

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

        <div>
          <h2>Especie</h2>
          <div>
            <label htmlFor="especie">Especie:</label>
            <select id="especie" value={especie} onChange={handleEspecieFilter}>
              <option value="todos">perros y gatos</option>
              <option value="perro">Perro</option>
              <option value="gato">Gato</option>
            </select>
          </div>
        </div>

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

      <div>
        <select
          onChange={(e) => handleFundacion(e)}
          className="style"
          value={selectedFundacion}
        >
          <option value='All'>fundaciones</option>
          {
            uniqueFundaciones.map((x, index) => (
              <option value={x} key={index}>{x}</option>
            ))
          }
        </select>
      </div>

      <div className="stilos">
        <div>
          {
            currentPage === 1 ? (<span></span>) : (<button className="" onClick={e => paginationButtonPrev(e)}>Prev</button>)
          }
        </div>
        <div className="stilos">
          <Pagination
            currentPage={currentPage}
            elementsPerPage={elementsPerPage}
            totalElements={allPets.length}
            onPageChange={handlePageCh}
          />
          <div>
            {
              Math.ceil(allPets.length / elementsPerPage) > currentPage ? (
                <button className="" onClick={e => paginationButtonNext(e)}>next</button>
              ) : (<span></span>)
            }
          </div>
        </div>
      </div>
      <div className="container">
        {currentElements.map((mascota, indexMascota) => (
          <Card key={indexMascota} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={mascotas} alt="Mascota" className="card-image" />
            <Card.Body>
              <Card.Title>{mascota.nombre}</Card.Title>
              <Card.Text>
                Género: {mascota.genero}
                <br />
                Temperamento: {mascota.temperamento}
              </Card.Text>
              <Link to={`/mascota/${mascota.id}`}><Button variant="primary">Ver más</Button></Link>
            </Card.Body>
          </Card>)
        )
        }
      </div>
    </div>
  );
};

export default Adopcion;
