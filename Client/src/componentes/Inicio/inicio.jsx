import React, { useState, useEffect} from 'react';
import Login from "../Autenticación/LogIn/login"
import { Link } from "react-router-dom";
import styles from './inicio.module.css';
import Login2 from "../Sesiones/sesion/login2";
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { postLoginAdmin,logOut, postLoginFundacion } from '../../redux/Actions/post';
import { getAdmin, resetDetail } from '../../redux/Actions/get';


const Inicio = () =>{

 const dispatch = useDispatch();
  const navigate = useNavigate();





  const [input, setInput] = useState({
    email: '',
    contraseña: '',
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  
  

  const usuario = useSelector((state) => state.usuarioAdmin);


  const usuarioFundacion = useSelector((state) => state.usuarioFundacion);
 console.log(usuarioFundacion)

  const admin = useSelector((state) => state.admin);

  const adminMap = admin.map((e) => ({
    email: e.email,
    contraseña: e.contraseña
  }));

  const fundacion = useSelector((state) => state.fundaciones)

  const fundacionMap = fundacion.map((e) => ({
    email: e.email,
    contraseña: e.contraseña
  }));

 console.log(fundacionMap)
  console.log(adminMap);

  useEffect(() =>{
    dispatch(getAdmin());
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    const isAdmin = adminMap.find((admin) => admin.email === input.email && admin.contraseña === input.contraseña);
    const isFundacion = fundacionMap.find((admin) => admin.email === input.email && admin.contraseña === input.contraseña);
    
    if(isAdmin ){

        dispatch(postLoginAdmin(input))
        navigate('/InicioAdmin')
        }else if(isFundacion ){

            dispatch(postLoginAdmin(input))
            navigate('/perfilfund')
            }else{
          alert("No tienes permisos para ingresar")
        } 
    

  };
  

  


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

                   {/* FORM FUNDACION Y ADMIN */}
                   <form className={styles.form }
                   onSubmit={handleSubmit}
                   >
                       <div>
                           <h1 className={styles.title}>Iniciar sesión</h1>
                           <h1 className={styles.title}>Fundación</h1>
                           <div className={styles.field}>
                               
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
                              
                               <input
                                   type="password"
                                   value={input.contraseña}
                                   name="contraseña"
                                   onChange={handleChange}
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
                       </form>
                 {/* <Login2> */}

               </div>
           </div>
    )
}

export default Inicio;