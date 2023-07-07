import mascotas from "../Cartas/perroGato.png";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from "react";
import { addFav } from "../../redux/Actions/post.js";
import huella from '../../assets/huellitabg.png'
import huellaoscura from '../../assets/huellitaOscurabg.png'

const CardAdop = ({ mascota, indexMascota }) => {
  const [isFav, setIsFav] = useState(false);
  console.log(mascota, indexMascota);

  const handleFavorite = (mascota) => {
    if (isFav) {
      setIsFav(false);
      // removeFav();
    } else {
      setIsFav(true);
      addFav(mascota);
      console.log(mascota);
    }
  };

  return (
    <div>
      <Card key={indexMascota} style={{ width: '18rem' }}>
        <Button onClick={() => handleFavorite(mascota)} className="btn.btn-primary">
          {isFav ? (
            <img src={huellaoscura} alt="Favorito" className="favorite-icon" />
          ) : (
            <img src={huella} alt="No favorito" className="favorite-icon" />
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

export default CardAdop;
