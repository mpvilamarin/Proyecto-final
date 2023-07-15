import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postAdmin } from "../../../redux/Actions/post";
import { getAdmin } from "../../../redux/Actions/get";
import { validate } from "./validate";
import styles from "./CrearAdmin.module.css"
import { useNavigate } from "react-router-dom";


function FormFundaciones() {

    const dispatch = useDispatch();
    const navigate =  useNavigate();

    const admin = useSelector((state) => state.admin)
    console.log(admin)

    useEffect(() =>{
        dispatch(getAdmin())
    },[dispatch])

    const [newAdmin, setNewAdmin] = useState({
        nombre:"",
        numeroIdentificacion:"",
        fechaNacimiento:"",
        email:"",
        contrasenia:"",
        tipo:"admin"
    });
console.log(newAdmin)
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        const error = validate(name, value);
        setNewAdmin((prevInput) => ({
          ...prevInput,
          [name]: value,
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error,
        }));
    };

  const handleSubmit = (e) => {
   
      dispatch(postAdmin(newAdmin));
     
      setNewAdmin({
        nombre:"",
        numeroIdentificacion:"",
        fechaNacimiento:"",
        email:"",
        contrasenia:"",
        tipo:"admin"
      });
     
  };
  
 

  return (
    <div>
    {isLoading && (
      <div className={styles.overlay}>
        <p>Cargando...</p>
      </div>
      )}

      <div className={styles.contenedorPadre}>
        <div className={styles.contenedorForm}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <p className={styles.heading}>Registra un Nuevo Admin</p>
                <input
                className={styles.input}
                type="text"
                value={newAdmin.nombre}
                name="nombre"
                onChange={handleChange}
                placeholder="Ej: Miguel Sanchez"
                />
                {errors.nombre && <p className={styles.errors}>{errors.nombre}</p>}

                <input
                className={styles.input}
                type="text"
                value={newAdmin.numeroIdentificacion}
                name="numeroIdentificacion"
                onChange={handleChange}
                placeholder="Ej: 109089765"
                />
                {errors.numeroIdentificacion && <p className={styles.errors}>{errors.numeroIdentificacion}</p>}
                
                <input
                className={styles.input}
                type="date"
                value={newAdmin.fechaNacimiento}
                name="fechaNacimiento"
                onChange={handleChange}
                placeholder=""
                />

                <input
                className={styles.input}
                type="text"
                value={newAdmin.email}
                name="email"
                onChange={handleChange}
                placeholder="Ej: Admin@gmail.com"
                />
                {errors.email && <p className={styles.errors}>{errors.email}</p>}
                
                <input
                className={styles.input}
                type="text"
                value={newAdmin.contrasenia}
                name="contrasenia"
                onChange={handleChange}
                placeholder="**********"
                />
                {/* {errors.contrasenia && <p className={styles.errors}>{errors.contrasenia}</p>} */}
                
                

                <button type="submit" className={styles.btn}>
                Registrar
                </button>
            </form>
        </div>
        
        <div className={styles.mostrarAdmins}>
            <h1>Admins Creados</h1>
            {
                admin && admin.map((e, index) => (
                    <div key={index} className={styles.datos}>
                        
                            <span>Nombre: {e.nombre}</span>
                            <span>Email: {e.email}</span>
                        
                    </div>
                ))
            }
        </div>

        
      </div>
      
    </div>
  );
}

export default FormFundaciones;
