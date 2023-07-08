import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/Actions/post.js";
import { connect } from 'react-redux'
import huella from '../../assets/huellitabg.png'
import huellaoscura from '../../assets/huellitaOscurabg.png'

const CardAdop = ({ mascota, indexMascota, addFav, removeFav, favoritos }) => {
  const [isFav, setIsFav] = useState(false);
  

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(indexMascota);
    } else {
      setIsFav(true);
      addFav(mascota, indexMascota);
      //console.log(mascota);
    }
  };

  useEffect(() => {
    favoritos.forEach((fav) => {
      if (fav.indexMascota == indexMascota) {
        setIsFav(true);
      }
    });
  }, [favoritos])

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

const mapStateToProps = (state) => {
  return {
    favoritos: state.favoritos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (mascota) => { dispatch(addFav(mascota)) },
    removeFav: (indexMascota) => { dispatch(removeFav(indexMascota)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardAdop);