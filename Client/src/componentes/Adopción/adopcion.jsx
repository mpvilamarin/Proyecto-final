import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { filterMascotaByEspecie } from "../../redux/Actions/filtroAndOrdenamiento";
import { getAllMascotas } from '../../redux/Actions/get.js'
import mascotas from "../Cartas/perroGato.png";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './adopcion.css'
import MascotasFilter from "./MascotasFilterByEspecie.jsx";

const Adopcion = () => {
  const dispatch = useDispatch();
  const petsFilter = useSelector((state) => state.filtroMascotas);

  useEffect(() => {
    dispatch(getAllMascotas());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Mascotas en adopción</h2>
      <div className="container">
        <MascotasFilter />
        {petsFilter.map((mascota, indexMascota) => (
          <Card key={indexMascota} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={mascotas} alt="Mascota" className="card-image" />
            <Card.Body>
              <Link to={`/mascota/${mascota.id}`}>
                <Card.Title>{mascota.nombre}</Card.Title>
              </Link>
              <Card.Text>
                Género: {mascota.genero}
                <br />
                Temperamento: {mascota.temperamento}
              </Card.Text>
              <Link to={`/mascota/${mascota.id}`}>
                <Button variant="primary">Ver más</Button>
              </Link>
            </Card.Body>
          </Card>)
        )
        }
      </div>
    </div>
  );
};

export default Adopcion;
