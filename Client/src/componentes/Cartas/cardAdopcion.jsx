import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/Actions/post.js";
import { connect, useDispatch } from 'react-redux'
import huella from '../../assets/huellitabg.png'
import huellaoscura from '../../assets/huellitaOscurabg.png'
import style from './cards.module.css'
const CardAdop = ({ mascota, indexMascota}) => {
  const [isFav, setIsFav] = useState(false);
  
  const dispatch = useDispatch();
  console.log(mascota);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(indexMascota));
    } else {
      setIsFav(true);
      dispatch(addFav(mascota, indexMascota));
      //console.log(mascota);
    }
  };


  return (
    <div>
      <Card key={indexMascota} style={{ width: '18rem' }}>
        <Button onClick={() => handleFavorite(mascota)} className={style.button1} >
          {isFav ? (
            <img src={huellaoscura} alt="Favorito" className={style.favoriteIcon} />
          ) : (
            <img src={huella} alt="No favorito" className={style.favoriteIcon} />
          )}
        </Button>
        <Card.Img variant="top" src={mascota?.image} alt="Mascota" className={style.image} />
        <Card.Body>
          <Card.Title className="card-title">{mascota?.nombre}</Card.Title>
          <Card.Text className="card-text">
            Género: {mascota?.genero}
            <br />
            Temperamento: {mascota?.temperamento}
          </Card.Text>
          <Link to={`/mascota/${mascota?.id}`}>
            <Button className={style.button1}>Ver más</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardAdop