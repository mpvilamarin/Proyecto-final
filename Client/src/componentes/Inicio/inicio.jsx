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
                    <h1 className={styles.title}>Login</h1>
                        <h1 className={styles.title}>user</h1>
                        <span className={styles.span}><Login/></span>
                    </div>
                </form>
                   <Login2/>
               </div>
           </div>
    )
}

export default inicio;