import React, {useState} from 'react'; 
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {postFundaciones} from '../../redux/Actions/post';

function FormFundaciones(){ 

    const fundaciones = useSelector( state => state.fundaciones);
    const dispatch = useDispatch();

    const [newFundacion, setNewFundacion] = useState({
        nombre: '',
        ciudad: '',
        direccion: '',
        telefono: '',
        email: '',
        fundadaEn: '',
        mision: '',
        borrado: false
    })
 
    const handleChange = (e) => {
        setNewFundacion({
            ...newFundacion,
            [e.target.name] : e.target.value,
        })
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e.target.value)
        dispatch(postFundaciones(newFundacion))
        setNewFundacion({
            nombre:'', 
            ciudad: '', 
            direccion: '', 
            telefono: '',
            email: '',
            fundadaEn: '',
            mision:''
        })
    }
    return( 
    <Form> 
        <Form.Group controlId="formBasicNombre"> <Form.Label>Nombre</Form.Label> <Form.Control type="text" name="nombre" value={newFundacion.nombre} onChange={handleChange} placeholder="Nombre de la fundación" /> </Form.Group>
        <Form.Group controlId="formBasicCiudad"> <Form.Label>Ciudad</Form.Label> <Form.Control type="text" name= "ciudad" value={newFundacion.ciudad} onChange={handleChange} placeholder="Ciudad" /></Form.Group>
        <Form.Group controlId="formBasicDireccion"> <Form.Label>Dirección</Form.Label> <Form.Control type="text" name="direccion" value={newFundacion.direccion} onChange={handleChange} placeholder="Dirección" /> </Form.Group>
        <Form.Group controlId="formBasicTelefono"> <Form.Label>Telefono</Form.Label> <Form.Control type="text" name="telefono" value={newFundacion.telefono} onChange={handleChange} placeholder="Telefono" /> </Form.Group>
        <Form.Group controlId="formBasicEmail"> <Form.Label>Email</Form.Label> <Form.Control type="email" name="email" value={newFundacion.email} onChange={handleChange} placeholder="Enter email" /> </Form.Group>
        <Form.Group controlId="formBasicFundadaEn"> <Form.Label>Fundada en</Form.Label> <Form.Control type="text" name="fundadaEn" value={newFundacion.fundadaEn} onChange={handleChange} /> </Form.Group>
        <Form.Group controlId="formBasicMision"> <Form.Label>Mision</Form.Label> <Form.Control type="text" name="mision" value={newFundacion.mision} onChange={handleChange} /> </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}> Submit </Button>
               
        
    </Form>
); }

export default FormFundaciones;