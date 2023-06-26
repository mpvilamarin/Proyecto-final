import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { postMascota } from '../../redux/Actions/post';
import { getAllFundaciones } from '../../redux/Actions/get';

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
    <Form>
      {showAlert && (
        <Alert variant="danger">Por favor, completa todos los campos.</Alert>
      )}
      <Form.Group controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
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
        <Form.Control
          type="text"
          name="tamaño"
          value={newMascota.tamaño}
          onChange={handleChange}
          placeholder="Tamaño"
          className={
            invalidFields.includes('tamaño') ? 'is-invalid' : ''
          }
        />
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
        <Form.Control
          type="text"
          name="genero"
          value={newMascota.genero}
          onChange={handleChange}
          placeholder="Genero"
          className={
            invalidFields.includes('genero') ? 'is-invalid' : ''
          }
        />
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
        <Form.Control
          type="text"
          name="castrado"
          value={newMascota.castrado}
          onChange={handleChange}
          placeholder="Castrado"
          className={
            invalidFields.includes('castrado') ? 'is-invalid' : ''
          }
        />
      </Form.Group>

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
        Submit
      </Button>
    </Form>
  );
} 

export default FormMascota;