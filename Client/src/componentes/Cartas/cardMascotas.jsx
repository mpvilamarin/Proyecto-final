import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMascota } from "../../redux/Actions/delete";
import { getAllMascotas } from "../../redux/Actions/get";

export default function CardMascota() {
  const dispatch = useDispatch();
  const allMascotas = useSelector((state) => state.mascotas);

  useEffect(() => {
    dispatch(getAllMascotas());
  }, [dispatch]);

  const handleAdoptar = (nombre) => {
    dispatch(deleteMascota(nombre));
  };

  return (
    <div className="card-container">
      {allMascotas.map((mascota, index) => (
        <div key={index} className="card">
          <img src={mascota.image} alt={mascota.nombre} />
          <h2>{mascota.nombre}</h2>
          <p>{mascota.descripcion}</p>
          <button
            onClick={() => handleAdoptar(mascota.nombre)}
            disabled={mascota.adoptado}
          >
            {mascota.adoptado ? "Adoptado" : "Adoptar"}
          </button>
        </div>
      ))}
    </div>
  );
}
