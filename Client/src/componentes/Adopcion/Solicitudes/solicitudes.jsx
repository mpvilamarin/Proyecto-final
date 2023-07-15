import React, { useState } from "react";
import Modal from "react-modal";
import DetalleAdopcion from "../Detalle/detalleAdopcion"

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

const Solicitudes = ({adopcion}) =>{
  console.log(adopcion)

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = () => {
        setModalIsOpen(true);
      };
    
      const handleCloseModal = () => {
        setModalIsOpen(false);
      };


    return(
        <div style={{ border: '1px solid black' }}>
            <h1>{adopcion.nombreCompleto}</h1>
            <h3>Motivos de Adopcion</h3>
            <h4>{adopcion.motivoAdopcion}</h4>
            <button  onClick={handleOpenModal}>
              Ver más
            </button>
            <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Detalles de Mascota"
          style={modalStyles}
        >
            <DetalleAdopcion adopcion={adopcion}/>
        </Modal>

        </div>
    )
}

export default Solicitudes