import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { validate } from "./validate";
import { getAllFundaciones, getDetailFundacion } from "../../../redux/Actions/get";
import { updateFundacion } from "../../../redux/Actions/update";

import styles from "./ModificarFundacion.module.css";

const ModificarFundacion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allFundaciones = useSelector((state) => state.fundaciones);
  const [selectedFundacionIndex, setSelectedFundacionIndex] = useState(null); 
  const [showForm, setShowForm] = useState(true);
  
  useEffect(() => {
    dispatch(getAllFundaciones());
  }, [dispatch]);

  const [input, setInput] = useState({
    nombre: "",
    ciudad: "",
    direccion: "",
    telefono: "",
    email: "",
    fundadaEn: "",
    mision:"",
    borrado: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
  
      await dispatch(updateFundacion(
        id, 
        input.nombre, 
        input.ciudad, 
        input.direccion, 
        input.telefono, 
        input.email, 
        input.fundadaEn, 
        input.mision));
    
      
      setInput({
        nombre: "",
        ciudad: "",
        direccion: "",
        telefono: "",
        email: "",
        fundadaEn: "",
        mision: "",
        borrado: false,
      });
      window.location.href = "/ModificarFundacion";
      
    }
  };
  
  return (
    <div>
      {isLoading && (
        <div className={styles.overlay}>
          <p>Cargando...</p>
        </div>
      )}

      <div>
        <h1>Fundaciones:</h1>
        <div>
          {allFundaciones &&
            allFundaciones.map((fundacion, index) => (
              <div key={index} className={styles.contendorFundacion} >
                <div className={styles.fundacion}>
                  <p>
                    <span key={index}>nombre: {fundacion.nombre}</span>
                  </p>
                  <button key={index} onClick={() => handleEditClick(index)}>
                    editar
                  </button>
                </div>
                
                <div className={styles.contendorForm}>
                  {selectedFundacionIndex === index && showForm && (
                    <form className={styles.form} onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="nombre"
                        value={input.nombre}
                        placeholder={fundacion.nombre}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="ciudad"
                        value={input.ciudad}
                        placeholder={fundacion.ciudad}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="direccion"
                        value={input.direccion}
                        placeholder={fundacion.direccion}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="telefono"
                        value={input.telefono}
                        placeholder={fundacion.telefono}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="email"
                        value={input.email}
                        placeholder={fundacion.email}
                        onChange={handleChange}
                      />
                      <input
                        name="fundadaEn"
                        type="date"
                        value={input.fundadaEn}
                        placeholder={fundacion.fundadaEn}
                        onChange={handleChange}
                      />
                      <textarea
                        type="text"
                        name="mision"
                        value={input.mision}
                        placeholder={fundacion.mision}
                        onChange={handleChange}
                      />
                      <div>
                        <button>Aceptar Cambios</button>
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