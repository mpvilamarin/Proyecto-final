import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { postMascota } from '../../redux/Actions/post';
import { getAllFundaciones } from '../../redux/Actions/get';
import './stilosFormularioMascota.css';
import UploadWidget from "../../componentes/Upload/UploadWidget";

function FormMascota() {
  const fundaciones = useSelector((state) => state.fundaciones);
  const dispatch = useDispatch();

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
    imagen_url: '',
    fundacionId: [],
  });
  const [showAlert, setShowAlert] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);

  const handleChange = (e) => {
    setNewMascota({
      ...newMascota,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    if (e.target.checked) {
      setNewMascota({
        ...newMascota,
        fundacionId: [...newMascota.fundacionId, e.target.value],
      });
    } else {
      setNewMascota({
        ...newMascota,
        fundacionId: newMascota.fundacionId.filter(
          (fundacion) => fundacion !== e.target.value
        ),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log(newMascota)
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
        imagen_url: '',
        fundacionId: [],
      });
      setShowAlert(false);
      setInvalidFields([]);
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
    ];

    const invalidFields = requiredFields.filter(
      (field) => newMascota[field].trim() === ''
    );

    setInvalidFields(invalidFields);

    return invalidFields.length === 0 && newMascota.fundacionId.length > 0;
  };

  const sortedFundacion = fundaciones
    .slice()
    .sort((a, b) => a.nombre.localeCompare(b.nombre));

  return (
    <div className="form-container">
      <h1 className="title-form">FORMULARIO PARA MASCOTAS</h1>
      <Form className="custom-form">
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
          <Form.Control
            type="text"
            name="especie"
            value={newMascota.especie}
            onChange={handleChange}
            placeholder="Especie"
            className={
              invalidFields.includes('especie') ? 'is-invalid' : ''
            }
          />
        </Form.Group>

        <Form.Group controlId="formBasicTamaño">
          <Form.Label>Tamaño</Form.Label>
          <Form.Select
            name="tamaño"
            value={newMascota.tamaño}
            onChange={handleChange}
            className={invalidFields.includes('tamaño') ? 'is-invalid' : ''}
          >
            <option value="">Seleccionar tamaño</option>
            <option value="grande">Grande</option>
            <option value="mediano">Mediano</option>
            <option value="pequeño">Pequeño</option>
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
              value="hembra"
              checked={newMascota.genero === "hembra"}
              onChange={handleChange}
            />
            <Form.Check
              inline
              type="radio"
              id="generoMacho"
              name="genero"
              label="Macho"
              value="macho"
              checked={newMascota.genero === "macho"}
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
          <Form.Label>Opción de castración</Form.Label>
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
        <UploadWidget onImageUpload={(imageUrl) => setNewMascota({ ...newMascota, imagen_url: imageUrl })} />
        <div>
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
        </div>
        
        

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