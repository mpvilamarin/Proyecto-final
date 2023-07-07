import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { validate } from "./validate";
import { postUsuario } from "../../../redux/Actions/post";
import styles from "../registro/registro.module.css";

const Form = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    domicilio: "",
    telefono: "",
    correo: "",
    contraseña: "",
  });

  const [errors, setErrors] = useState({});

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

  const handleSubmit = (event) => {
    event.preventDefault();

    let validationErrors = {};

    for (const key in input) {
      const value = input[key];
      const error = validate(key, value, input);
      if (error) {
        validationErrors[key] = error;
      }
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(postUsuario(input));
      setInput({
        nombre: "",
        apellido: "",
        edad: "",
        domicilio: "",
        telefono: "",
        correo: "",
        contraseña: "",
      });
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
      <form className={styles.form}>
        <p className={styles.heading}>Regístro Nuevo Usuario</p>
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
          value={input.apellido}
          name="apellido"
          onChange={handleChange}
          placeholder="Apellido"
        />
        {errors.apellido && <p className={styles.errors}>{errors.apellido}</p>}
        <input
          className={styles.input}
          type="number"
          value={input.edad}
          name="edad"
          onChange={handleChange}
          placeholder="Edad"
        />
        {errors.edad && <p className={styles.errors}>{errors.edad}</p>}
        <input
          className={styles.input}
          type="text"
          value={input.domicilio}
          name="domicilio"
          onChange={handleChange}
          placeholder="Domicilio"
        />
        {errors.domicilio && <p className={styles.errors}>{errors.domicilio}</p>}
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
          value={input.correo}
          name="correo"
          onChange={handleChange}
          placeholder="Correo"
        />
        <input
          className={styles.input}
          type="password"
          value={input.contraseña}
          name="contraseña"
          onChange={handleChange}
          placeholder="Contraseña"
        />
        {errors.contraseña && (
          <p className={styles.errors}>{errors.contraseña}</p>
        )}
        <button type="submit" className={styles.btn}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;