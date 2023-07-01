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

import styles from './adopcion.module.css';
import CardAdop from "../Cartas/cardAdopcion.jsx";



const Adopcion = () => {
  const dispatch = useDispatch();

  const allPets = useSelector((state) => state.mascotas)
  console.log(allPets)
  const allFundations = useSelector((state) => state.fundaciones)
  console.log(allFundations)
  const [selectedFundacion, setSelectedFundacion] = useState('All');
  const uniqueFundaciones = [...new Set(allFundations.map(fundacion => fundacion.nombre))];
  const [generoFilter, setGeneroFilter] = useState("");
  const [ordenamiento, setOrdenamiento] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const [elementsPerPage] = useState(4)
  const [especie, setEspecie] = useState("");
  const petsFilter = useSelector((state) => state.mascotas);



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
    <div className={styles.container}>
      <h1>Escoje las características de tu mascota</h1>
      <div className={styles.selectoresWrapper}>
        <div className={styles.divSelector}>
          <label>Género:</label>
          <select value={generoFilter} onChange={handleGeneroFilter} className={styles.options}>
            <option value="">Todos</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
            <option value="Desconocido">Desconocido</option>
          </select>
        </div>

        <div className={styles.divSelector}>
          <label>Ordenar por nombre:</label>
          <button onClick={handleSortAsc}>A-Z</button>
          <button onClick={handleSortDesc}>Z-A</button>
        </div>
        <div>

          <div className={styles.divSelector}>
            <label htmlFor="especie">Especie:</label>
            <select id="especie" value={especie} onChange={handleEspecieFilter} className={styles.options}>
              <option value="">Perros y gatos</option>
              <option value="perro">Perros</option>
              <option value="gato">Gatos</option>
            </select>
          </div>

        </div>

        <div className={styles.divSelector}>
          <select className={styles.options}
            onChange={handleFundacion}
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
      </div>

      <div className={styles.divSelector}>
        <div>
          {
            currentPage === 1 ? (<span></span>) : (<button className="" onClick={e => paginationButtonPrev(e)}>Prev</button>)
          }
        </div>
        <div className={"container"}>
          {currentElements.map((mascota, indexMascota)=>{
              return(<CardAdop mascota={mascota} indexMascota={indexMascota}/>)
            })
          }
        </div>
        <div className={styles.divSelector}>
          <Pagination
            currentPage={currentPage}
            elementsPerPage={elementsPerPage}
            totalElements={allPets.length}
            onPageChange={handlePageCh}
          />
          <div>
            {
              Math.ceil(allPets.length / elementsPerPage) > currentPage ? (
                <button className={styles.pagination} onClick={e => paginationButtonNext(e)}>next</button>
              ) : (<span></span>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adopcion;

// =======
//       <div className={styles.cardContainer}>
//         {currentElements.map((mascota, indexMascota) => (
//           <Card key={indexMascota} style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={mascotas} alt="Mascota" className="card-image" />
//             <Card.Body>
//               <Card.Title>{mascota.nombre}</Card.Title>
//               <Card.Text>
//                 Género: {mascota.genero}
//                 <br />
//                 Temperamento: {mascota.temperamento}
//               </Card.Text>
//               <Link to={`/mascota/${mascota.id}`}><Button variant="primary">Ver más</Button></Link>
//             </Card.Body>
//           </Card>)
//         )
// >>>>>>> develop