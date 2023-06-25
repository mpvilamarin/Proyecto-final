import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { validate } from './validate';
import { Link } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {

    const [input, setInput] = useState({
        correo: '',
        contraseña: '',
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

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.get(`http://localhost:3001/usuarios/verificar/${input.correo}`);
                if (response.status === 200) {
                    // Usuario existe
                    setInput({
                        correo: '',
                        contraseña: '',
                    });
                } else {
                    // Usuario no existe
                    setErrors({
                        general: "Este usuario no existe"
                    });
                }
            } catch (error) {
                // Manejar el error de la solicitud
                setErrors({
                    general: "Error al verificar el usuario"
                });
            }
        }
    };

    useEffect(() => {
        setErrors((prevErrors) => ({
            ...prevErrors
        }));
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div>
                        <h1 className={styles.title}>Inicia sesión</h1>
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
                        {errors.general && <p className={styles.errors}>{errors.general}</p>}
                        <Link to="/registro" className={styles.link}>
                            ¿No estás registrado?
                        </Link>
                        <button type="submit" className={styles.sendButton}>
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;