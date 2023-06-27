import React, { useState, useEffect } from 'react';
import { validate } from './validate';
import { postUsuario } from '../../../redux/Actions/post'
import { useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {
    const dispatch = useDispatch();
   
    const [input, setInput] = useState({
        email: '',
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
        dispatch(postUsuario(input));

    };

    // if (Object.keys(validationErrors).length === 0) {
    //     try {
    //       const response = await axios.post('localhost:3001/usuarios/login', input);
    //       const { token } = response.data;
  
    //       localStorage.setItem('token', token);
  
    //       history.push('/home');
    //     } catch (error) {
    //       console.error('Error al iniciar sesión:', error);
    //       setErrors({ general: 'Error al iniciar sesión. Inténtalo de nuevo.' });
    //     }
    //   }
    
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
                            <label className={styles.label}>Email:</label>
                            <input
                                type="email"
                                value={input.email}
                                name="email"
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Email"
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
