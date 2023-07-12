import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { validate } from "./validate";
import { getAllMascotas } from "../../../redux/Actions/get";
import { updateMascota } from "../../../redux/Actions/update";
import UploadWidget from "../../Upload/UploadWidget";

import styles from "./ModificarFundacion.module.css";

const ModificarMascota = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allMascotas = useSelector((state) => state.mascotas);
  const [selectedMascotaIndex, setSelectedMascotaIndex] = useState(null); 
  const [showForm, setShowForm] = useState(true);
  
  useEffect(() => {
    dispatch(getAllMascotas());
  }, [dispatch]);

  const [input, setInput] = useState({
    nombre: '',
    especie: '',
    tamaño: '',
    edad: '',
    genero: '',
    temperamento: '',
    descripcion: '',
    castrado: '',
    image: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleEditClick = (index) => {
    setSelectedMascotaIndex(index);
    setShowForm((prevShowForm) => !prevShowForm);
    const selectedMascota = allMascotas[index];
    setInput(selectedMascota);
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

  const handleImageUpload = (url) => {
    setInput((prevMascota) => ({
      ...prevMascota,
      image: url
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (selectedMascotaIndex !== null) {
      setIsLoading(true);

      const selectedMascota = allMascotas[selectedMascotaIndex];
      const { id } = selectedMascota;
  
      await dispatch(updateMascota(
            id,
            input.nombre, 
            input.especie, 
            input.tamaño, 
            input.edad,
            input.genero, 
            input.temperamento, 
            input.descripcion,
            input.castrado,
            input.image
        ));
        
      
      setInput({
        nombre:"", 
        especie:"", 
        tamaño:"", 
        edad:"",
        genero:"", 
        temperamento:"", 
        descripcion:"",
        castrado:"",
        image:""
      });
      window.location.href = "/ModificarMascota";
      
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
        <h1>Mascotas:</h1>
        <div>
          {allMascotas &&
            allMascotas.map((mascota, index) => (
              <div key={index} className={styles.contendorFundacion} >
                <div className={styles.fundacion}>
                  <p>
                    <span key={index}>nombre: {mascota.nombre}</span>
                  </p>
                  <button key={index} onClick={() => handleEditClick(index)}>
                    editar
                  </button>
                </div>
                
                <div className={styles.contendorForm}>
                  {selectedMascotaIndex === index && showForm && (
                    <form className={styles.form} onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="nombre"
                        value={input.nombre}
                        placeholder={mascota.nombre}
                        onChange={handleChange}
                      />
                      

                      <select
                        name="especie"
                        value={input.especie}
                        onChange={handleChange}
                        placeholder={mascota.especie}
                      >
                        <option value="Perro">Perro</option>
                        <option value="Gato">Gato</option>
                      </select>

                      <select
                        name="tamaño"
                        value={input.tamaño}
                        onChange={handleChange}
                        placeholder={mascota.tamaño}
                      >
                        <option value="Grande">Grande</option>
                        <option value="Mediano">Mediano</option>
                        <option value="Pequeño">Pequeño</option>
                      </select>

                      <input
                        type="number"
                        name="edad"
                        value={input.edad}
                        placeholder={mascota.edad}
                        onChange={handleChange}
                      />

                      <div>
                      <label>
                          <input
                          type="radio"
                          name="genero"
                          value="Hembra"
                          checked={input.genero === "Hembra"}
                          onChange={handleChange}
                          />
                          Hembra
                      </label>  
                      <label>
                          <input
                          type="radio"
                          name="genero"
                          value="Macho"
                          checked={input.genero === "Macho"}
                          onChange={handleChange}
                          />
                          Macho
                      </label>
                      </div>
                      
                     
                      <input
                        name="temperamento"
                        type="text"
                        value={input.temperamento}
                        placeholder={mascota.temperamento}
                        onChange={handleChange}
                      />
                      <textarea
                        type="text"
                        name="descripcion"
                        value={input.descripcion}
                        placeholder={mascota.descripcion}
                        onChange={handleChange}
                      />


                       <div>
                           <label>
                           <input
                               type="radio"
                               id="castrado"
                               name="castrado"
                               value="castrado"
                               checked={input.castrado === 'castrado'}
                               onChange={handleChange}
                           />
                           Castrado/a
                           </label>      
                           <label>
                           <input
                               type="radio"
                               id="noCastrado"
                               name="castrado"
                               value="noCastrado"
                               checked={input.castrado === 'noCastrado'}
                               onChange={handleChange}
                           />
                           No castrado/a
                           </label>
                       </div>

                       <div>
                        {input.image && <img style={{width: "280px", height:"205px"}} src={input.image} alt="image"></img>}
                        <UploadWidget onImageUpload={handleImageUpload} />
                       </div>
                        
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

export default ModificarMascota;