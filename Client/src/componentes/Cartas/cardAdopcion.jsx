import mascotas from "../Cartas/perroGato.png";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from "react";
import { addFav } from "../../redux/Actions/post.js";

const CardAdop = ({mascota, indexMascota}) =>{

    const [isFav, setIsFav] = useState(false);
    console.log(mascota, indexMascota);

    const handleFavorite = (mascota) => {
        if(isFav){
           setIsFav(false);
        //  removeFav();
        }
        else {
           setIsFav(true);
          addFav(mascota)
          console.log(mascota)
        }
     }

    return(
        <div>
            <Card key={indexMascota} style={{ width: '18rem' }}>
            <Button onClick={() => handleFavorite(mascota)}>{isFav ? '❤️' : '🤍'}</Button>
            <Card.Img variant="top" src={mascotas} alt="Mascota" className="card-image" />
            <Card.Body>
              <Card.Title>{mascota?.nombre}</Card.Title>
              <Card.Text>
                Género: {mascota?.genero}
                <br />
                Temperamento: {mascota?.temperamento}
              </Card.Text>
              <Link to={`/mascota/${mascota?.id}`}><Button variant="primary">Ver más</Button></Link>
            </Card.Body>
          </Card>
        </div>
    )
}

export default CardAdop;