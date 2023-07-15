import React, { useState, useEffect } from "react";
import Login from "../Autenticacion/LogIn/login";
import { Link } from "react-router-dom";
import styles from "./inicio.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  postLoginAdmin,
  logOut,
  postLoginFundacion,
} from "../../redux/Actions/post";
import { getAdmin, getAllFundaciones, resetDetail } from "../../redux/Actions/get";
import Usuario from "../../assets/User.png";

const Inicio = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Usuario");

  const usuario = useSelector((state) => state.usuarioAdmin);
  const usuarioFundacion = useSelector((state) => state.usuarioFundacion);
  const admin = useSelector((state) => state.admin);
  const fundacion = useSelector((state) => state.fundaciones);

  const adminMap = admin.map((e) => ({
    email: e.email,
    password: e.password,
  }));

  const fundacionMap = fundacion.map((e) => ({
    email: e.email,
    password: e.password,
  }));

  console.log(fundacionMap)
  useEffect(() => {
    dispatch(getAdmin());
    dispatch(getAllFundaciones())
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isAdmin = adminMap.find(
      (admin) =>
        admin.email === input.email && admin.password === input.password
    );
    const isFundacion = fundacionMap.find(
      (admin) =>
        admin.email === input.email && admin.password === input.password
    );

    if (isAdmin) {
      setIsLoading(true);
      await dispatch(postLoginAdmin(input));
      setIsLoading(false);
      navigate("/DashboardAdmin");
    } else if (isFundacion) {
      setIsLoading(true);
      await dispatch(postLoginAdmin(input));
      setIsLoading(true);
      navigate("/fundaciones");
    } else {
      alert("No tienes permisos para ingresar");
    }
  };

  return (
    <div className={styles.container}>
      {isLoading && (
        <div className={styles.overlay}>
          <p>Cargando...</p>
        </div>
      )}
      <div className={styles.loginbox}>
        <div className={styles.formContainer}>
          <div className={styles.toggleButton}>
            <button
              className={`${styles.toggleOption} ${selectedOption === "Usuario" ? styles.selectedOption : ""
                }`}
              onClick={() => setSelectedOption("Usuario")}
            >
              Usuario
            </button>
            <button
              className={`${styles.toggleOption} ${selectedOption === "Fundación" ? styles.selectedOption : ""
                }`}
              onClick={() => setSelectedOption("Fundación")}
            >
              Fundación
            </button>
          </div>
          {selectedOption === "Usuario" ? (
            <form className={styles.form}>
              <div className={styles.inicioAuth}>
                {/* <h1 className={styles.title}>INICIAR SESIÓN</h1>
                <h1 className={styles.subtitle}>Usuario</h1> */}
                <span className={styles.span}>
                  <img src={Usuario} className={styles.imgUser} />
                  <Login />
                </span>
              </div>
            </form>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div>
                {/* <h1 className={styles.title}>INICIAR SESIÓN</h1>
                <h1 className={styles.subtitle}>Fundación</h1> */}
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
                    value={input.password}
                    name="password"
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="password"
                  />
                </div>
                <div className={styles.divBtn}>
                  <button type="submit" className={styles.btn}>
                    Iniciar Sesión
                  </button>
                </div>
                <Link to="/registro" className={styles.link}>
                  ¿No estás registrado?
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
