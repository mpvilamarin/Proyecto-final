import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { validate } from "./validate";
import { postFundaciones } from "../../../redux/Actions/post";
import styles from "../registro/registro.module.css";
import UploadWidget from "../../Upload/UploadWidget";

const Form = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    nombre: "",
    ciudad: "",
    direccion: "",
    telefono: "",
    email: "",
    contraseña: "",
    fundadaEn: "",
    mision: "",
    borrado: false,
    image: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
      image: url,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let validationErrors = {};
    for (const key in input) {
      const value = input[key];
      const error = validate(key, value, input);
      if (error) {
        validationErrors[key] = error;
      }
    }
    dispatch(postFundaciones());
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      await dispatch(postFundaciones(input));
      setIsLoading(false);
      setInput({
        nombre: "",
        ciudad: "",
        direccion: "",
        telefono: "",
        email: "",
        contraseña: "",
        fundadaEn: "",
        mision: "",
        borrado: false,
        image: "",
      });
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    }
  };
  useEffect(() => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      mascotas: "",
    }));
  }, []);

  return (
    <div className={styles.container}>
      {/* {isLoading && (
      <div className={styles.overlay}>
        <p>Cargando...</p>
      </div>
      )} */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.heading}>Regístro Nueva Fundacion</p>
        <div>
          {/* <button onClick={notify}>Notify!</button>*/}
          <ToastContainer autoClose={3000} />
        </div>
        <input
          className={styles.input}
          type="text"
          value={input.nombre}
          name="nombre"
          onChange={handleChange}
          placeholder="Nombre"
        />
        {errors.nombre && <p className={styles.errors}>{errors.nombre}</p>}
        <input
          className={styles.input}
          type="text"
          value={input.ciudad}
          name="ciudad"
          onChange={handleChange}
          placeholder="Ciudad"
        />
        {errors.ciudad && <p className={styles.errors}>{errors.ciudad}</p>}
        <input
          className={styles.input}
          type="text"
          value={input.direccion}
          name="direccion"
          onChange={handleChange}
          placeholder="Direccion"
        />
        {errors.direccion && (
          <p className={styles.errors}>{errors.direccion}</p>
        )}
        <input
          className={styles.input}
          type="text"
          value={input.telefono}
          name="telefono"
          onChange={handleChange}
          placeholder="Teléfono"
        />
        {errors.telefono && <p className={styles.errors}>{errors.telefono}</p>}
        <input
          className={styles.input}
          type="email"
          value={input.email}
          name="email"
          onChange={handleChange}
          placeholder="Correo"
        />
        {errors.email && <p className={styles.errors}>{errors.email}</p>}
        <input
          className={styles.input}
          type="password"
          value={input.contraseña}
          name="contraseña"
          onChange={handleChange}
          placeholder="Contraseña"
        />
        {/* {errors.contraseña && (
          <p className={styles.errors}>{errors.contraseña}</p>
        )} */}
        <input
          className={styles.input}
          type="date"
          value={input.fundadaEn}
          name="fundadaEn"
          onChange={handleChange}
          placeholder="Fundada en"
        />
        <textarea
          className={styles.input}
          value={input.mision}
          name="mision"
          onChange={handleChange}
          placeholder="Mision"
        />
        <div>
          {input.image && (
            <img
              style={{ width: "245px", height: "245px" }}
              src={input.image}
              alt="image"
            ></img>
          )}
          <UploadWidget onImageUpload={handleImageUpload} />
        </div>
        <button type="submit" className={styles.btn}>
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Form;
