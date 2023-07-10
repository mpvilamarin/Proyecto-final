import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validate } from './validate';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { postLoginAdmin,logOut, postLoginFundacion } from '../../../redux/Actions/post';
import styles from './login.module.css';

const Login2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();




  const [input, setInput] = useState({
    email: '',
    contraseña: '',
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  
  

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
    
    if(isAdmin || isFundacion){
        setIsLoading(true);
        await dispatch(postLoginAdmin(input))
        setIsLoading(false);
        navigate('/')
        }else{
          alert("No tienes permisos para ingresar")
        } 
    

  };
  

  const handleLogOut = () => {
    navigate("/login");
    dispatch(logOut());
    
  };

  return (
    <div className={styles.container}>
      {isLoading && (
      <div className={styles.overlay}>
        <p>Cargando...</p>
      </div>
      )}
      <div className={styles.loginbox}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Inicia sesión</h1>
          <h1>como fundacion</h1>
          <div className={styles.field}>
            <input
              type="email"
              value={input.email}
              name="email"
              onChange={handleChange}
              className={styles.input}
              placeholder="Email"
            />
            {errors.email && <p className={styles.errors}>{errors.email}</p>}
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
            {errors.contraseña && (
              <p className={styles.errors}>{errors.contraseña}</p>
            )}
          </div>
          {loginError && <p className={styles.errors}>{loginError}</p>}

          <br></br>
          <div className={styles.divBtn}>
            <button type="submit" className={styles.btn}>
              Enviar
            </button>
          </div>
          {usuario || usuarioFundacion? (
    <button onClick={handleLogOut}>Cerrar sesión</button>
  ) : (
    <Link to="/registro" className={styles.link}>
      ¿No estás registrado?
    </Link>
  )}
        </form>
      </div>
    </div>
  );
};

export default Login2;