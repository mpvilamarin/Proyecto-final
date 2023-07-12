import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMascota } from "../../redux/Actions/delete";
import { getAllMascotas } from "../../redux/Actions/get";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { updateMascota } from "../../redux/Actions/update";

const CardMascota = ({ mascota, indexMascota}) => {

  const [adop, setIsAdop] = useState(mascota.activo);

  const dispatch = useDispatch();

  const clickAdoptado = () =>{
    if(adop){
     dispatch(updateMascota(mascota.nombre, false))
     setIsAdop(false)
    }
    else{
      dispatch(updateMascota(mascota.nombre, true))
      setIsAdop(true)
    }
  }

  return (
    <div>
      <Card key={indexMascota} style={{ width: '18rem' }}>
      <Button onClick={() => clickAdoptado()} className="btn.btn-primary">
          {adop ? (
            <h2>Adoptado</h2>
          ) : (
            <h2>Sin adoptar</h2>
          )}
        </Button>
        <Card.Img variant="top" src={mascota?.image} alt="Mascota" className="card-image" />
        <Card.Body>
          <Card.Title className="card-title">{mascota?.nombre}</Card.Title>
          <Card.Text className="card-text">
            Género: {mascota?.genero}
            <br />
            Temperamento: {mascota?.temperamento}
          </Card.Text>
          <Link to={`/mascota/${mascota?.id}`}>
            <Button variant="primary">Ver más</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};



export default CardMascota
