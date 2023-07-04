import Login from "../Autenticación/LogIn/login"
import { Link } from "react-router-dom";
import styles from './inicio.module.css'


const inicio = () =>{
    return(
        // <div className={styles.container}>
        //     <div className={styles.inicioAuth}>
        //         <h1>Inicia sesion</h1>
        //         <h1>como usuario</h1>
        //         <Login/>
        //     </div>
        //     <div className={styles.inicioFundacion}>
        //         <h1>Inicia sesion</h1>
        //         <h1>Como fundacion</h1>
        //         <Link to="/login2" className={styles.link}>Log in</Link>
        //     </div>
        // </div>
        <div className={styles.container}>
               <div className={styles.loginbox}>
                <form className={styles.form}>
                    <div className={styles.inicioAuth}>
                    <h1 className={styles.title}>Login</h1>
                        <h1 className={styles.title}>user</h1>
                        <span className={styles.span}><Login/></span>
                    </div>
                </form>
                   <form className={styles.form} 
                   //onSubmit={formik.handleSubmit}
                   >
                       <div>
                           <h1 className={styles.title}>Login</h1>
                           <h1 className={styles.title}>fundation</h1>
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
                   </form>
               </div>
           </div>
    )
}

export default inicio;