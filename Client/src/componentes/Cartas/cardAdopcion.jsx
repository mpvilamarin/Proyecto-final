import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFav } from "../../redux/Actions/post.js";
import { removeFav } from "../../redux/Actions/delete.js";
import Modal from "react-modal";
import huella from "../../assets/huellitabg.png";
import huellaoscura from "../../assets/huellitaOscurabg.png";
import style from "./cards.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Detalle from "../Mascota/detailMascota.jsx";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useAuth0 } from "@auth0/auth0-react";

// Configuración de estilos para el modal
Modal.setAppElement("#root");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "fit-content",
    maxWidth: "fit-content",
    overflow: "auto",
    padding: "20px",
    border: "none",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#ddd6ce"
  },
};

const CardAdop = ({ mascota, indexMascota }) => {
  const { isAuthenticated, user } = useAuth0();

  const [isFav, setIsFav] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleFavorite = () => {
    const email = user.email
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(indexMascota, email));
    } else {
      setIsFav(true);
      dispatch(addFav(mascota, indexMascota));
    }
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  if (mascota?.borrado === false) {
    return (
      <div>
        <Card key={indexMascota} style={{ width: "18rem" }}>
          <Button
            onClick={() => handleFavorite(mascota)}
            className={`btn btn-custom ${style.button1}`}
          >
            {isFav ? (
              <img
                src={huellaoscura}
                alt="Favorito"
                className={style.favoriteIcon}
              />
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
            <Button className={style.button1} onClick={handleOpenModal}>
              Ver más
            </Button>
          </Card.Body>
        </Card>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Detalles de Mascota"
          style={modalStyles}
        >
          <Detalle mascotaId={mascota?.id} />
        </Modal>
      </div>
    );
  } else {
    return null;
  }
};

export default CardAdop;
