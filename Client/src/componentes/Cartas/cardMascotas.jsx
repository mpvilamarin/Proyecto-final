import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMascota } from "../../redux/Actions/delete";
import { getAllMascotas } from "../../redux/Actions/get";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function CardMascota() {
  const dispatch = useDispatch();
  const allMascotas = useSelector((state) => state.mascotas.slice(0, 4));


  useEffect(() => {
    dispatch(getAllMascotas());
  }, [dispatch]);

  return (
    <div className="wrapperMascota">
      <div className="titlemascotitas">
        <h1 className="card-title-highlight">Algunas de nuestras</h1>
        <h1 className="card-title-highlight">mascotas</h1>
      </div>


      <div className="card-container-mascota">
        {/* <div className="title-container">
        <h1 className="card-title-highlight">MASCOTAS</h1>
      </div> */}
        {allMascotas.map((mascota, index) => (
          <div key={index} className="card">
            <img src={mascota.image} alt={mascota.nombre} className="card-image" />
            <h2>{mascota.nombre}</h2>
            <p>{mascota.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
