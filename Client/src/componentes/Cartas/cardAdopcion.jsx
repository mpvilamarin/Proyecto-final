import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from "react";
import { addFav } from "../../redux/Actions/post.js";
import { removeFav } from "../../redux/Actions/delete.js";
import { connect, useDispatch, useSelector } from 'react-redux'
import huella from '../../assets/huellitabg.png'
import huellaoscura from '../../assets/huellitaOscurabg.png'
import style from './cards.module.css'
import { useAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';

const CardAdop = ({ mascota, indexMascota }) => {
  const { isAuthenticated, user } = useAuth0();

  const [isFav, setIsFav] = useState(false);

  //const { user } = useAuth0();

  const dispatch = useDispatch();

 
  const handleFavorite = () => {
    const email = user.email
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(indexMascota, email));
    } else {
      setIsFav(true);
      dispatch(addFav(indexMascota, email));
      //console.log(mascota);
    }
  };


  if (mascota?.borrado === false) {
    return (
      <div>
        <Card key={indexMascota} style={{ width: '18rem' }}>

          {isAuthenticated &&(<Button onClick={() => handleFavorite(mascota)} className={`btn btn-custom ${style.button1}`} >
            {isFav ? (
              <img src={huellaoscura} alt="Favorito" className={style.favoriteIcon} />
            ) : (
              <img src={huella} alt="No favorito" className={style.favoriteIcon} />
            )}
          </Button>)}
          
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
  } else {
    return null;
  }
};

export default CardAdop