import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postMascota } from '../../redux/Actions/post';
import { getAllFundaciones } from '../../redux/Actions/get';
import { ToastContainer, toast} from 'react-toastify';
import './stilosFormularioMascota.css';
import UploadWidget from "../../componentes/Upload/UploadWidget";

function FormMascota() {
  const fundaciones = useSelector((state) => state.fundaciones);
  const info = useSelector((state) => state.sesion)
  const { nombre } = info
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllFundaciones());
  }, [dispatch]);

  const [newMascota, setNewMascota] = useState({
    nombre: '',
    especie: '',
    tamaño: '',
    edad: '',
    genero: '',
    temperamento: '',
    descripcion: '',
    castrado: '',
    image: '',
    fundacionId: nombre,
  });
  const [showAlert, setShowAlert] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value)
    console.log(newMascota)
    setNewMascota({
      ...newMascota,
      [e.target.name]: e.target.value,
    });
  };

  // const handleChecked = (e) => {
  //   if (e.target.checked) {
  //     setNewMascota({
  //       ...newMascota,
  //       fundacionId: [...newMascota.fundacionId, e.target.value],
  //     });
  //   } else {
  //     setNewMascota({
  //       ...newMascota,
  //       fundacionId: newMascota.fundacionId.filter(
  //         (fundacion) => fundacion !== e.target.value
  //       ),
  //     });
  //   }
  // };

  const handleImageUpload = (url) => {
    setNewMascota((prevMascota) => ({
      ...prevMascota,
      image: url
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      dispatch(postMascota(newMascota));
      setNewMascota({
        nombre: '',
        especie: '',
        tamaño: '',
        edad: '',
        genero: '',
        temperamento: '',
        descripcion: '',
        castrado: '',
        image: '',
        fundacionId: nombre
      });
      setShowAlert(false);
      setInvalidFields([]);
      setTimeout(() => {
        navigate('/adopciones') 
       }, 2500)
    } else {
      setShowAlert(true);
    }
  };

  const isFormValid = () => {
    const requiredFields = [
      'nombre',
      'especie',
      'tamaño',
      'edad',
      'genero',
      'temperamento',
      'descripcion',
      'castrado',
      'image',
    ];

    const invalidFields = requiredFields.filter((field) => {
      if (field === 'image') {
        return newMascota[field] === ''
      } else {
        return newMascota[field].trim() === ''
      }
    }
    );

    setInvalidFields(invalidFields);
  };

  const sortedFundacion = fundaciones
    .slice()
    .sort((a, b) => a.nombre.localeCompare(b.nombre));


  return (
    <div className="form-container">
      <h1 className="title-form">FORMULARIO PARA MASCOTAS</h1>
      <Form className="custom-form">
        <ToastContainer autoClose={2500}></ToastContainer>
        {showAlert && (
          <Alert variant="danger">Por favor, completa todos los campos.</Alert>
        )}
        <Form.Group controlId="formBasicNombre">
          <Form.Label className="form-label">Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={newMascota.nombre}
            onChange={handleChange}
            placeholder="Nombre de la mascota"
            className={
              invalidFields.includes('nombre') ? 'is-invalid' : ''
            }
          />
        </Form.Group>

        <Form.Group controlId="formBasicEspecie">
          <Form.Label>Especie</Form.Label>
          <Form.Select
            name="especie"
            value={newMascota.especie}
            onChange={handleChange}
            className={invalidFields.includes('especie') ? 'is-invalid' : ''}
          >
            <option value="">Seleccionar especie</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
          </Form.Select>
        </Form.Group>



        <Form.Group controlId="formBasicTamaño">
          <Form.Label>Tamaño</Form.Label>
          <Form.Select
            name="tamaño"
            value={newMascota.tamaño}
            onChange={handleChange}
            className={invalidFields.includes('tamaño') ? 'is-invalid' : ''}
          >
            <option value="">Seleccionar </option>
            <option value="Grande">Grande</option>
            <option value="Mediano">Mediano</option>
            <option value="Pequeño">Pequeño</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formBasicEdad">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="number"
            name="edad"
            value={newMascota.edad}
            onChange={handleChange}
            placeholder="Edad"
            className={
              invalidFields.includes('edad') ? 'is-invalid' : ''
            }
          />
        </Form.Group>

        <Form.Group controlId="formBasicGenero">
          <Form.Label>Genero</Form.Label>
          <div>
            <Form.Check
              inline
              type="radio"
              id="generoHembra"
              name="genero"
              label="Hembra"
              value="Hembra"
              checked={newMascota.genero === "Hembra"}
              onChange={handleChange}
            />
            <Form.Check
              inline
              type="radio"
              id="generoMacho"
              name="genero"
              label="Macho"
              value="Macho"
              checked={newMascota.genero === "Macho"}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Form.Group controlId="formBasicTemperamento">
          <Form.Label>Temperamento</Form.Label>
          <Form.Control
            type="text"
            name="temperamento"
            value={newMascota.temperamento}
            placeholder="Temperamento"
            onChange={handleChange}
            className={
              invalidFields.includes('temperamento') ? 'is-invalid' : ''
            }
          />

        </Form.Group>
        <Form.Group controlId="formBasicDescripcion">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            name="descripcion"
            value={newMascota.descripcion}
            placeholder="Descripcion"
            onChange={handleChange}
            className={
              invalidFields.includes('descripcion') ? 'is-invalid' : ''
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicCastrado">
          <Form.Label>Castrado</Form.Label>
          <div>
            <Form.Check
              inline
              type="radio"
              id="castrado"
              name="castrado"
              label="Castrado/a"
              value="castrado"
              checked={newMascota.castrado === 'castrado'}
              onChange={handleChange}
            />
            <Form.Check
              inline
              type="radio"
              id="noCastrado"
              name="castrado"
              label="No castrado/a"
              value="noCastrado"
              checked={newMascota.castrado === 'noCastrado'}
              onChange={handleChange}
            />


          </div>
        </Form.Group>

        <div>
          {newMascota.image && <img style={{width: "280px", height:"205px"}} src={newMascota.image} alt="image"></img>}
          <UploadWidget onImageUpload={handleImageUpload} />
        </div>

        {/* <div>
          <div>
            {sortedFundacion.length >= 1 ? (
              sortedFundacion?.map((elem, index) => (
                <div key={index}>
                  <label htmlFor={`fundacionId_${index}`} key={index}>
                    <input
                      type="checkbox"
                      name={`fundacionId_${index}`}
                      value={elem.nombre}
                      key={index}
                      onChange={handleChecked}
                    />
                    {elem.nombre}
                  </label>
                </div>
              ))
            ) : (
              undefined
            )}
          </div>
        </div> */}



        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Enviar
        </Button>
      </Form>
    </div>

  );
}

export default FormMascota;