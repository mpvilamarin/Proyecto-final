import React, { useState, useEffect } from 'react';
import { validate } from './validate';
import { useSignIn } from 'react-auth-kit';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from 'axios';
import { Link } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {
    const navigate = useNavigate()
    //     const signIn = useSignIn();

    //     const [errors, setErrors] = useState("");




    //     const onSubmit = async (values) => {
    //         console.log("Values: ", values)

    //         try {
    //             const response = await axios.post(
    //                 'http://localhost:3001/usuarios/login',
    //                 values
    //                 );

    //             signIn({ 
    //                 token: response.data.token,
    //                 expiresIn: 3600,
    //                 tokenType: 'Bearer',
    //                 authState: { email: values.email}
    //             })
    //             navigate("/");
    //         } catch (err) {
    //             if (err && err instanceof AxiosError){
    //                 setErrors(err.response?.data.message);
    //             }

    //             else if (err && err instanceof Error) {
    //                 setErrors(err.message);
    //                 console.log(`error : ${err}`);
    //             }   

    //         }

    //     };

    //     const formik = useFormik({
    //         initialValues: {
    //           email: "",
    //           contraseña: "",
    //         },
    //         onSubmit,
    //       });

    //     return (
    //         <div className={styles.container}>
    //             <div className={styles.formContainer}>
    //                 <form className={styles.form} onSubmit={formik.handleSubmit}>
    //                     <div>
    //                         <h1 className={styles.title}>Inicia sesión</h1>
    //                         <div className={styles.field}>
    //                             <label className={styles.label}>Email:</label>
    //                             <input
    //                                 type="email"
    //                                 value={ formik.values.email }
    //                                 name="email"
    //                                 onChange={formik.handleChange}
    //                                 className={styles.input}
    //                                 placeholder="Email"
    //                                 />
    //                         </div>
    //                         <div className={styles.field}>
    //                             <label className={styles.label}>Password:</label>
    //                             <input
    //                                 type="password"
    //                                 value={formik.values.contraseña}
    //                                 name="contraseña"
    //                                 onChange={formik.handleChange}
    //                                 className={styles.input}
    //                                 placeholder="Password"
    //                             />
    //                             {errors.contraseña && <p className={styles.errors}>{errors.contraseña}</p>}
    //                         </div>
    //                         {errors.general && <p className={styles.errors}>{errors.general}</p>}
    //                         <Link to="/registro" className={styles.link}>
    //                             ¿No estás registrado?
    //                         </Link>
    //                         <button type="submit" className={styles.sendButton}>
    //                             Enviar
    //                         </button>
    //                     </div>
    //                 </form>
    //             </div>
    //         </div>
    //     );
};

export default Login;