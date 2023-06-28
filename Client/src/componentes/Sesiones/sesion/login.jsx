import React, { useState, useEffect } from 'react';
import { validate } from './validate';
import { useSignIn } from 'react-auth-kit'; 
import { useFormik } from "formik";
import axios, {AxiosError} from 'axios';
import { Link } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {
    const signIn = useSignIn();
    
    const [errors, setErrors] = useState("");

    
    const onSubmit = async (event) => {
        event.preventDefault();
        console.log("Values: ", event)
        
        try {
            const response = await axios.post(
                'http://localhost:3001/usuarios/login',
                event
                );
            signIn({
                token: response.data.token,
                expiresIn: 3600,
                tokenType: 'Bearer',
                authState: { email: event.email}
            })
        } catch (err) {
            if (err && err instanceof AxiosError){
                setErrors(err.response?.data.message);
            }
            
            else if (err && err instanceof Error) {
                setErrors(err.message);
                console.log("Error: ", err);
            }   
      
        }
        
    };

    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        onSubmit,
      });
    
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={formik.handleSubmit}>
                    <div>
                        <h1 className={styles.title}>Inicia sesión</h1>
                        <div className={styles.field}>
                            <label className={styles.label}>Email:</label>
                            <input
                                type="email"
                                value={`${input.email} ${formik.values.email}` }
                                name="email"
                                onChange={formik.handleChange}
                                className={styles.input}
                                placeholder="Email"
                                />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Password:</label>
                            <input
                                type="password"
                                value={`${input.contraseña} ${formik.values.contraseña}`}
                                name="contraseña"
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Password"
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

        // const handleChange = (event) => {
        //     const { name, value } = event.target;
        //     const error = validate(name, value);
        //     setInput((prevInput) => ({
        //         ...prevInput,
        //         [name]: value,
        //     }));
        //     setErrors((prevErrors) => ({
            //         ...prevErrors,
            //         [name]: error,
        //     }));
        // };
            // const [input, setInput] = useState({
            //     email: '',  
            //     contraseña: '',
            // });