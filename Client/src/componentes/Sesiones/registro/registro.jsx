import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validate } from './validate';
import { postUsuario } from '../../../redux/Actions/post';
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
            <div className={styles.backgroundImage}>
                <div className={styles.formContainer}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div>
                            <h1 className={styles.title}>Regístrate como nuevo usuario</h1>
                            <div className={styles.field}>
                                <label className={styles.label}>Nombre:</label>
                                <input
                                    type="text"
                                    value={input.nombre}
                                    name="nombre"
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="Nombre"
                                />
                                {errors.nombre && <p className={styles.error}>{errors.nombre}</p>}
                            </div>
                            <div className={styles.field}>
                                <label className={styles.label}>Apellido:</label>
                                <input
                                    type="text"
                                    value={input.apellido}
                                    name="apellido"
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="Apellido"
                                />
                                {errors.apellido && <p className={styles.errors}>{errors.apellido}</p>}
                            </div>
                            <div className={styles.field}>
                                <label className={styles.label}>Edad:</label>
                                <input
                                    type="number"
                                    value={input.edad}
                                    name="edad"
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="Edad"
                                />
                                {errors.edad && <p className={styles.errors}>{errors.edad}</p>}
                            </div>
                            <div className={styles.field}>
                                <label className={styles.label}>Domicilio:</label>
                                <input
                                    type="text"
                                    value={input.domicilio}
                                    name="domicilio"
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="Domicilio"
                                />
                                {errors.domicilio && <p className={styles.errors}>{errors.domicilio}</p>}
                            </div>
                            <div className={styles.field}>
                                <label className={styles.label}>Telefono:</label>
                                <input
                                    type="text"
                                    value={input.telefono}
                                    name="telefono"
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="Teléfono"
                                />
                                {errors.telefono && <p className={styles.errors}>{errors.telefono}</p>}
                            </div>
                            <div className={styles.field}>
                                <label className={styles.label}>Correo:</label>
                                <input
                                    type="email"
                                    value={input.correo}
                                    name="correo"
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="Correo"
                                />
                            </div>
                            <div className={styles.field}>
                                <label className={styles.label}>Contraseña:</label>
                                <input
                                    type="password"
                                    value={input.contraseña}
                                    name="contraseña"
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="Contraseña"
                                />
                                {errors.contraseña && <p className={styles.errors}>{errors.contraseña}</p>}
                            </div>
                            <button type="submit" className={styles.sendButton}>
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;