import React from 'react'; 
import { Form, Button } from 'react-bootstrap';

function FormFundaciones(){ 
    return( 
    <Form> 
        <Form.Group controlId="formBasicNombre"> <Form.Label>Nombre</Form.Label> <Form.Control type="text" placeholder="Nombre de la fundación" /> </Form.Group>
        <Form.Group controlId="formBasicCiudad"> <Form.Label>Ciudad</Form.Label> <Form.Control type="text" placeholder="Ciudad" />
        </Form.Group>
        <Form.Group controlId="formBasicDireccion"> <Form.Label>Dirección</Form.Label> <Form.Control type="text" placeholder="Dirección" /> </Form.Group>
        <Form.Group controlId="formBasicTelefono"> <Form.Label>Telefono</Form.Label> <Form.Control type="text" placeholder="Telefono" /> </Form.Group>
        <Form.Group controlId="formBasicEmail"> <Form.Label>Email</Form.Label> <Form.Control type="email" placeholder="Enter email" /> </Form.Group>
        <Form.Group controlId="formBasicFundadaEn"> <Form.Label>Fundada en</Form.Label> <Form.Control type="date" /> </Form.Group>
        <Form.Group controlId="formBasicMision"> <Form.Label>Mision</Form.Label> <Form.Control as="textarea" rows={3} /> </Form.Group>
        <Button variant="primary" type="submit"> Submit </Button>
    </Form>
); }

export default FormFundaciones;