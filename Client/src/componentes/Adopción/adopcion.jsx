import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllMascotas, getAllFundaciones } from "../../redux/Actions/get.js";
import { filterMascotaByFundacion} from "../../redux/Actions/filtroAndOrdenamiento.js"
import mascotas from "../Cartas/perroGato.png";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pagination from "./Paginación/paginacion.jsx";
import './adopcion.css'



const Adopcion = () => {

  const dispatch = useDispatch();
  const allPets = useSelector((state) => state.mascotas)
  const allFundations = useSelector((state) => state.fundaciones)
  const [selectedFundacion, setSelectedFundacion] = useState('All');
  const uniqueFundaciones = [...new Set(allFundations.map(fundacion => fundacion.nombre))];
  const [currentPage, setCurrentPage] = useState(1)
  const [elementsPerPage, /*setElementPerPage */] = useState(3)

  useEffect(() => {
    dispatch(getAllMascotas());
    dispatch(getAllFundaciones())
  }, [dispatch]);

  //PAGINADO TEMPORAL ======>>

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = allPets.slice(indexOfFirstElement, indexOfLastElement);

  const paginationButtonNext = (e) => {
    e.preventDefault(); 
    setCurrentPage( currentPage + 1);
  };

  const paginationButtonPrev = (e) => {
    e.preventDefault();
    setCurrentPage( currentPage - 1); 
  };

  const handlePageCh =  (pageNumber) => {
    setCurrentPage(pageNumber);
  } 

  const handleFundacion = (e) =>{
    e.preventDefault();
    dispatch(filterMascotaByFundacion(e.target.value));
    setSelectedFundacion(e.target.value);
    setCurrentPage(1);
  }
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

  // const petsLength = allPets ? allPets.length : 0;

  return (
    <div className="container" >
      <h2>Mascotas en adopción</h2>
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
                <button className=""  onClick={e => paginationButtonNext(e)}>next</button>
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
          </Card>
        ))}
      </div>
    </div >
  );
};
export default Adopcion;