import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postAdopciones } from "../../redux/Actions/post";
import { useLocation } from "react-router-dom";

function FormAdopciones() {
  const dispatch = useDispatch();
  const adopcionStatus = useSelector((state) => state.adopciones.status);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mascotaId = searchParams.get("mascotaId");
  const fundacionId = searchParams.get("fundacionId");

  const [formData, setFormData] = useState({
    nombreCompleto: "",
    email: "",
    direccion: "",
    ciudad: "",
    pais: "",
    telefono: "",
    ocupacion: "",
    fechaNacimiento: "",
    motivoAdopcion: "",
    compromiso: false,
  });

  const [showAlert, setShowAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      const dataToSend = {
        ...formData,
        mascotaId: mascotaId,
        fundacionId: fundacionId,
      };

      dispatch(postAdopciones(dataToSend));
      setFormData({
        nombreCompleto: "",
        email: "",
        direccion: "",
        ciudad: "",
        pais: "",
        telefono: "",
        ocupacion: "",
        fechaNacimiento: "",
        motivoAdopcion: "",
        compromiso: false,
      });
      setShowAlert(false);
      setErrorMsg("");
    } else {
      setShowAlert(true);
      setErrorMsg("Por favor, completa todos los campos.");
    }
  };

  const isFormValid = () => {
    const {
      nombreCompleto,
      email,
      direccion,
      ciudad,
      pais,
      telefono,
      ocupacion,
      fechaNacimiento,
      motivoAdopcion,
      compromiso,
    } = formData;

    if (
      !nombreCompleto ||
      !email ||
      !direccion ||
      !ciudad ||
      !pais ||
      !telefono ||
      !ocupacion ||
      !fechaNacimiento ||
      !motivoAdopcion ||
      !compromiso
    ) {
      return false;
    }

    return true;
  };

  return (
    <div className="form-container">
      <h1 className="title-form">FORMULARIO DE ADOPCIÓN</h1>
      <Form className="custom-form" onSubmit={handleSubmit}>
        {showAlert && <Alert variant="danger">{errorMsg}</Alert>}
        {adopcionStatus === "success" && (
          <Alert variant="success">
            ¡La solicitud de adopción se ha enviado con éxito!
          </Alert>
        )}
        <Form.Group controlId="formBasicNombreCompleto">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            type="text"
            name="nombreCompleto"
            value={formData.nombreCompleto}
            onChange={handleChange}
            placeholder="Nombre Completo"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicDireccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            placeholder="Dirección"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicCiudad">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            placeholder="Ciudad"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPais">
          <Form.Label>País</Form.Label>
          <Form.Control
            type="text"
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            placeholder="País"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicOcupacion">
          <Form.Label>Ocupación</Form.Label>
          <Form.Control
            type="text"
            name="ocupacion"
            value={formData.ocupacion}
            onChange={handleChange}
            placeholder="Ocupación"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicFechaNacimiento">
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control
            type="date"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicMotivoAdopcion">
          <Form.Label>¿Por qué quieres adoptar?</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="motivoAdopcion"
            value={formData.motivoAdopcion}
            onChange={handleChange}
            placeholder="Motivo de adopción"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicCompromiso">
          <Form.Check
            type="checkbox"
            name="compromiso"
            checked={formData.compromiso}
            onChange={handleChange}
            label="Me comprometo completamente a cuidarlo y amarlo"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar Solicitud de Adopción
        </Button>
      </Form>
    </div>
  );
}

export default FormAdopciones;