import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllMascotas, getAllFundaciones, getNameFundaciones, getReviews } from '../../redux/Actions/get';
import style from './cards.module.css'; // Ruta del archivo CSS
import fundaciones from './fundacion.png';
import Card from 'react-bootstrap/Card';
import FundacionesFilter from "../Fundacion/filterFundacion";
import SortFundaciones from "../Fundacion/sortFundacion";
import StarRating from "./StarRating";



export default function CardsFundacion() {
  const dispatch = useDispatch();
  const allFundaciones = useSelector(state => state.fundaciones);
  console.log(allFundaciones)
  useEffect(() => {
    dispatch(getAllMascotas());
    dispatch(getAllFundaciones());
  }, [dispatch]);

  return (
    <div className={style.fundacionesContainer}>
      <div className="title-container">

        {/* <h1 className="card-title-highlight">Algunas de nuestras</h1> */}


        {!allFundaciones ? (

          <h3>LOADING...</h3>
        ) : (
          <div className={style.cardsWrapper}>
            {allFundaciones && allFundaciones.map((fundacion, indexFundacion) => (

              fundacion.borrado === false && (
                <Card key={indexFundacion} className={style.card}>
                  <Card.Body>
                    <Card.Title className={style.cardTitle}>{fundacion?.nombre}</Card.Title>
                    <Card.Img variant="top" className={style.imgFund} src={fundacion.image || fundaciones} />
                    <Card.Text>
                      <h2 className={style.cardInfo}>Dirección: {fundacion?.direccion}</h2>
                      <h2 className={style.cardInfo}>Ciudad: {fundacion?.ciudad}</h2>
                      <h2 className={style.cardInfo}>Email: {fundacion?.email}</h2>
                      <h2 className={style.cardInfo}>Misión: {fundacion?.mision}</h2>
                      <div className={style.contButton}>
                      <Link to={`/fundacion/${fundacion.id}`}>
                        <button className={style.button3}>
                        Conocenos
                        </button>
                      </Link>
                      </div>
                      <StarRating rating={Number(fundacion.Reviews && fundacion.Reviews[0]?.calificacion)} />
                    </Card.Text>
                  </Card.Body>
                </Card>
              )

            ))}
          </div>
        )}
      </div>
    </div>
  );
}

