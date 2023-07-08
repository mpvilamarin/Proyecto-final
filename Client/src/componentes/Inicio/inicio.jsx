import Login from "../Autenticación/LogIn/login"
import { Link } from "react-router-dom";
import styles from './inicio.module.css';
import Login2 from "../Sesiones/sesion/login2";


const inicio = () =>{
    return(
        <div className={styles.container}>
               <div className={styles.loginbox}>
                <form className={styles.form}>
                    <div className={styles.inicioAuth}>
                    <h1 className={styles.title}>Iniciar sesión</h1>
                        <h1 className={styles.title}>Usuario</h1>
                        <span className={styles.span}><Login/></span>
                    </div>
                </form>

                   <form className={styles.form} 
                   //onSubmit={formik.handleSubmit}
                   >
                       <div>
                           <h1 className={styles.title}>Iniciar sesión</h1>
                           <h1 className={styles.title}>Fundación</h1>
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
                               Iniciar sesión
                           </button>
                           </div>
                           <Link to="/registro" className={styles.link}>
                               ¿No estás registrado?
                           </Link>
                       </div>

//                    <Login2/>

               </div>
           </div>
    )
}

export default inicio;