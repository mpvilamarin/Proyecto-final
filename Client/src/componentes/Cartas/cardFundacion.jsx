import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllMascotas, getAllFundaciones, getNameFundaciones } from '../../redux/Actions/get';
import './cards.css'; // Ruta del archivo CSS
import fundaciones from './fundacion.png';
import Card from 'react-bootstrap/Card';
import FundacionesFilter from "../Fundación/filterFundacion";
import SortFundaciones from "../Fundación/sortFundacion";
import { useNavigate } from 'react-router-dom';



export default function CardsFundacion() {
  const dispatch = useDispatch();
  const allFundaciones = useSelector(state => state.fundaciones);
  const navigate = useNavigate();

  const redirectToDonationForm = (fundacionId) => {
    navigate(`/donation-form/${fundacionId}`);
  };
  useEffect(() => {
    dispatch(getAllMascotas());
    dispatch(getAllFundaciones());
  }, [dispatch]);

  return (
    <div className="fundaciones-container">
      <div className="title-container">
        <h1 className="card-title-highlight">FUNDACIONES</h1>
      </div>

      {!allFundaciones ? (

        <h3>LOADING...</h3>
      ) : (
        <div className="cards-wrapper">
          {allFundaciones && allFundaciones.map((fundacion, indexFundacion) => (
            <Card key={indexFundacion} className="card">
              <Card.Body>
                <Link to={`/fundacion/${fundacion.id}`}>
                  <Card.Title className="card-title">{fundacion?.nombre}</Card.Title>
                </Link>
                <Card.Img variant="top" className="imgFund" src={fundaciones} />
                <Card.Text>
                  <h2 className="card-info">Dirección: {fundacion?.direccion}</h2>
                  <h2 className="card-info">Ciudad: {fundacion?.ciudad}</h2>
                  <h2 className="card-info">Email: {fundacion?.email}</h2>
                  <h2 className="card-info">Misión: {fundacion?.mision}</h2>
                  <button onClick={() => redirectToDonationForm(fundacion.id)}>Donar</button>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
