import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllMascotas } from "../../redux/Actions/get";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./cards.css";
import mascotas from "./perroGato.png";

export default function CardMascota() {
  const dispatch = useDispatch();
  const allMascotas = useSelector((state) => state.mascotas);
  console.log(allMascotas);
  useEffect(() => {
    dispatch(getAllMascotas());
  }, [dispatch]);

  return (
    <div>
      <div className="title-container">
        <h1 className="card-title-highlight">MASCOTAS</h1>
      </div>
      {allMascotas && allMascotas.length > 0 ? (
        <Carousel
          showThumbs={false}
          showArrows={true}
          showStatus={false}
          centerMode={true}
          centerSlidePercentage={33.33}
          infiniteLoop={false} // Cambio realizado aquí
          emulateTouch={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                className="control-arrow control-prev"
                onClick={onClickHandler}
                title={label}
              />
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                className="control-arrow control-next"
                onClick={onClickHandler}
                title={label}
              />
            )
          }
        >
          {allMascotas.map((mascota, indexMascota) => (
            <div key={indexMascota} className="card-carousel">
              <div className="image-container">
                <Link to={`/mascota/${mascota.id}`}>
                  <img
                    src={mascotas}
                    alt="Mascota"
                    className="card-image"
                  />
                </Link>
              </div>
              <div className="card-caption">
                <Link to={`/mascota/${mascota.id}`}>
                  <h2 className="card-title">{mascota.nombre}</h2>
                </Link>
                <div className="card-info">
                  <h4>Género: {mascota.genero}</h4>
                  <h4>Temperamento: {mascota.temperamento}</h4>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <h3>No hay mascotas disponibles.</h3>
      )}
    </div>
  );
}

