import React, { useState, useEffect } from 'react';
import { validate } from './validate';
import { useSignIn } from 'react-auth-kit';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from 'axios';
import { Link } from 'react-router-dom';
import styles from './login.module.css';

const Login2 = () => {
//   const navigate = useNavigate()
//        const signIn = useSignIn();

//        const [errors, setErrors] = useState("");




//        const onSubmit = async (values) => {
//            console.log("Values: ", values)

//            try {
//                const response = await axios.post(
//                    'http://localhost:3001/usuarios/login',
//                    values
//                    );

//                signIn({ 
//                    token: response.data.token,
//                    expiresIn: 3600,
//                    tokenType: 'Bearer',
//                    authState: { email: values.email}
//                })
//                navigate("/");
//            } catch (err) {
//                if (err && err instanceof AxiosError){
//                    setErrors(err.response?.data.message);
//                }

//                else if (err && err instanceof Error) {
//                    setErrors(err.message);
//                    console.log(`error : ${err}`);
//                }   

//            }

//        };

//        const formik = useFormik({
//            initialValues: {
//              email: "",
//              contraseña: "",
//            },
//            onSubmit,
//          });

       return (
           <div className={styles.container}>
               <div className={styles.loginbox}>
                   <form className={styles.form} 
                   //onSubmit={formik.handleSubmit}
                   >
                       <div>
                           <h1 className={styles.title}>Inicia sesión como fundación</h1>
                           <div className={styles.field}>
                               
                               <input
                                   type="email"
                                 //  value={ formik.values.email }
                                   name="email"
                                 //  onChange={formik.handleChange}
                                   className={styles.input}
                                   placeholder="Email"
                                   />
                           </div>
                           <div className={styles.field}>
                              
                               <input
                                   type="password"
                                //   value={formik.values.contraseña}
                                   name="contraseña"
                                 //  onChange={formik.handleChange}
                                   className={styles.input}
                                   placeholder="Password"
                               />
                               {/*errors.contraseña && <p className={styles.errors}>{errors.contraseña}</p>*/}
                           </div>
                           {/*errors.general && <p className={styles.errors}>{errors.general}</p>*/}
                           <br></br>
                           <div className={styles.divBtn}>
                           <button type="submit" className={styles.btn}>
                               Enviar
                           </button>
                           </div>
                           <Link to="/registro" className={styles.link}>
                               ¿No estás registrado?
                           </Link>
                       </div>
{/* <div class="login-box">
  <p>Login</p>
  <form>
    <div class="user-box">
      <input required="" name="" type="text">
      <label>Email</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="password">
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
  <p>Don't have an account? <a href="" class="a2">Sign up!</a></p>
</div> */}
                   </form>
               </div>
           </div>
       );
};

export default Login2;