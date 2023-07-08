import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { postFundaciones } from '../../redux/Actions/post';
import './stilosFormularioMascota.css';
import { useAuth0 } from '@auth0/auth0-react';
function FormFundaciones() {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const [newFundacion, setNewFundacion] = useState({
    nombre: '',
    ciudad: '',
    direccion: '',
    telefono: '',
    email: '',
    contraseña: '',
    fundadaEn: '',
    mision: '',
    borrado: false
  });

  const [showAlert, setShowAlert] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);

  const handleChange = (e) => {
    setNewFundacion({
      ...newFundacion,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(postFundaciones(newFundacion));
      setNewFundacion({
        nombre: '',
        ciudad: '',
        direccion: '',
        telefono: '',
        email: '',
        contraseña: '',
        fundadaEn: '',
        mision: '',
        borrado: false
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
      'ciudad',
      'direccion',
      'telefono',
      'email',
      'contraseña',
      'fundadaEn',
      'mision'
    ];

    const invalidFields = requiredFields.filter(
      (field) => newFundacion[field].trim() === ''
    );

    setInvalidFields(invalidFields);

    return invalidFields.length === 0;
  };

  return (
    <div className="form-container">
     
        <>
            <h1 className="title-form">FORMULARIO PARA FUNDACIONES</h1>
      <Form className="custom-form">
        {showAlert && (
          <Alert variant="danger">Por favor, completa todos los campos.</Alert>
        )}
        <Form.Group controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={newFundacion.nombre}
            onChange={handleChange}
            placeholder="Nombre de la fundación"
            className={invalidFields.includes('nombre') ? 'is-invalid' : ''}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCiudad">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            name="ciudad"
            value={newFundacion.ciudad}
            onChange={handleChange}
            placeholder="Ciudad"
            className={invalidFields.includes('ciudad') ? 'is-invalid' : ''}
          />
        </Form.Group>
        <Form.Group controlId="formBasicDireccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            name="direccion"
            value={newFundacion.direccion}
            onChange={handleChange}
            placeholder="Dirección"
            className={invalidFields.includes('direccion') ? 'is-invalid' : ''}
          />
        </Form.Group>
        <Form.Group controlId="formBasicTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            name="telefono"
            value={newFundacion.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
            className={invalidFields.includes('telefono') ? 'is-invalid' : ''}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={newFundacion.email}
            onChange={handleChange}
            placeholder="Email"
            className={invalidFields.includes('email') ? 'is-invalid' : ''}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="contraseña"
            name="contraseña"
            value={newFundacion.contraseña}
            onChange={handleChange}
            placeholder="contraseña"
            className={invalidFields.includes('contraseña') ? 'is-invalid' : ''}
          />
        </Form.Group>
        <Form.Group controlId="formBasicFundadaEn">
          <Form.Label>Fundada en</Form.Label>
          <Form.Control
            type="text"
            name="fundadaEn"
            value={newFundacion.fundadaEn}
            onChange={handleChange}
            className={invalidFields.includes('fundadaEn') ? 'is-invalid' : ''}
          />
        </Form.Group>
        <Form.Group controlId="formBasicMision">
          <Form.Label>Misión</Form.Label>
          <Form.Control
            type="text"
            name="mision"
            value={newFundacion.mision}
            onChange={handleChange}
            className={invalidFields.includes('mision') ? 'is-invalid' : ''}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Enviar
        </Button>
      </Form>
        </>

      
    </div>
  );
}

export default FormFundaciones;

