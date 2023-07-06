import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { validate } from './validate';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { postLogin } from '../../../redux/Actions/post';
import styles from './login.module.css';

const Login2 = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

        const [input, setInput] = useState({
            email: "",
            contraseña: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(errors)

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
      dispatch(postLogin(input));
      navigate("/")
      setInput({
        email: "",
        contraseña: "",
      });
    }
  };

       return (
          <div className={styles.container}>
            <div className={styles.loginbox}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Inicia sesión como fundación</h1>
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
                  {errors.contraseña && <p className={styles.errors}>{errors.contraseña}</p>}
                </div>
                {errors.general && <p className={styles.errors}>{errors.general}</p>}
                <br></br>
                <div className={styles.divBtn}>
                  <button type="submit" className={styles.btn}>
                    Enviar
                  </button>
                </div>
                <Link to="/registro" className={styles.link}>
                  ¿No estás registrado?
                </Link>
              </form>
            </div>
          </div>
        );
        
};

export default Login2;