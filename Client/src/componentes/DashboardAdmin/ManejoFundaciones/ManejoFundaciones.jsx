import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { validate } from "./validate";
import { getAllFundaciones, getDetailFundacion } from "../../../redux/Actions/get";
import { deleteFundacion } from "../../../redux/Actions/delete";
import { updateFundacion } from "../../../redux/Actions/update";
import { Link } from "react-router-dom";

import styles from "./ManejoFundaciones.module.css";

const ModificarFundacion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allFundaciones = useSelector((state) => state.fundaciones);
  const [selectedFundacionIndex, setSelectedFundacionIndex] = useState(null);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    dispatch(getAllFundaciones());
  }, [dispatch, selectedFundacionIndex]);

  const [input, setInput] = useState({
    nombre: "",
    ciudad: "",
    direccion: "",
    telefono: "",
    email: "",
    fundadaEn: "",
    mision: "",
    borrado: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const storedActivo = localStorage.getItem('activo');
  const initialActivo = storedActivo ? JSON.parse(storedActivo) : true;
  const [activo, setActivo] = useState(initialActivo);

  const handleDeleteClick = async (id, nombre) => {
    const confirmacion = window.confirm(`¿Estás seguro de ${activo[id] ? 'activar' : 'desactivar'} la Fundacion ${nombre}?`);
    if (confirmacion) {
      try {
        await dispatch(deleteFundacion(id, nombre));
        setActivo((prevActivo) => ({
          ...prevActivo,
          [id]: !prevActivo[id], // Alternar el estado de la Fundacion específica
        }));
        alert(`La Fundacion ${nombre} fue ${activo[id] ? 'desactivada' : 'activada'} con éxito`);
      } catch (error) {
        alert(`Error al ${activo[id] ? 'desactivar' : 'activar'} la Fundacion ${nombre}: ${error}`);
      }
    }
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('activo', JSON.stringify(activo));
    };
  }, [activo]);


  const handleEditClick = (index) => {
    setSelectedFundacionIndex(index);
    setShowForm((prevShowForm) => !prevShowForm);
    const selectedFundacion = allFundaciones[index];
    setInput(selectedFundacion);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const error = validate(name, value);
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedFundacionIndex !== null) {

      setIsLoading(true);

      const selectedFundacion = allFundaciones[selectedFundacionIndex];
      const { id } = selectedFundacion;



      setTimeout(() => {
        dispatch(updateFundacion(
          id,
          input.nombre,
          input.ciudad,
          input.direccion,
          input.telefono,
          input.email,
          input.fundadaEn,
          input.mision));
        setSelectedFundacionIndex(null)
      }, 1800)
    }
    setTimeout(() => {
      alert('Cambios exitosos');
    }, 1000);
  };

  return (
    <div>

      <div className={styles.container}>
        <h1 className={styles.title}>Fundaciones</h1>
        <div>
          <div className={styles.contButton}>
            <Link to="/fundaciones" >
              <button className={styles.funButton}>
                Ver Fundaciones
              </button>
            </Link>
          </div>
          {allFundaciones &&
            allFundaciones.map((fundacion, index) => (
              <div key={index} className={styles.contendorFundacion} >
                <div className={styles.fundacion}>
                  <p>
                    <span key={index} className={styles.sub}>Fundacion: {fundacion.nombre}</span>
                  </p>


                  <div className={styles.buttonSend} key={index}>
                    <button key={index} onClick={() => handleEditClick(index)} className={styles.button}>
                      editar
                    </button>
                    <button
                      key={index}
                      onClick={() => handleDeleteClick(fundacion.id, fundacion.nombre)}
                      className={`${styles.button2} ${activo[fundacion.id] ? styles['button2-activar'] : styles['button2-desactivar']}`}
                    >
                      {activo[fundacion.id] ? 'Activar' : 'Desactivar'}
                    </button>

                  </div>
                </div>

                <div className={styles.contendorForm}>
                  {selectedFundacionIndex === index && showForm && (
                    <form className={styles.form} onSubmit={handleSubmit}>
                      <input
                        className={styles.input}
                        type="text"
                        name="nombre"
                        value={input.nombre}
                        placeholder={fundacion.nombre}
                        onChange={handleChange}
                      />
                      <input
                        className={styles.input}
                        type="text"
                        name="ciudad"
                        value={input.ciudad}
                        placeholder={fundacion.ciudad}
                        onChange={handleChange}
                      />
                      <input
                        className={styles.input}
                        type="text"
                        name="direccion"
                        value={input.direccion}
                        placeholder={fundacion.direccion}
                        onChange={handleChange}
                      />
                      <input
                        className={styles.input}
                        type="text"
                        name="telefono"
                        value={input.telefono}
                        placeholder={fundacion.telefono}
                        onChange={handleChange}
                      />
                      <input
                        className={styles.input}
                        type="text"
                        name="email"
                        value={input.email}
                        placeholder={fundacion.email}
                        onChange={handleChange}
                      />
                      <input
                        className={styles.input}
                        name="fundadaEn"
                        type="date"
                        value={input.fundadaEn}
                        placeholder={fundacion.fundadaEn}
                        onChange={handleChange}
                      />
                      <textarea
                        className={styles.text}
                        type="text"
                        name="mision"
                        value={input.mision}
                        placeholder={fundacion.mision}
                        onChange={handleChange}
                      />
                      <div className={styles.buttonSend}>
                        <button className={styles.button3}>Aceptar Cambios</button>
                      </div>




                    </form>
                  )}
                </div>

              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ModificarFundacion;