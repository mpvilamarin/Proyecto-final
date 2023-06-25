import React, {useState} from 'react'; 
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { postMascota } from '../../redux/Actions/post';

function FormFundaciones(){ 

    const mascotas = useSelector( state => state.mascotas);
    const dispatch = useDispatch();

    const [newMascota, setNewMascota] = useState({
        nombre: '',
        especie: '',
        tamaño: '',
        edad: '',
        genero: '',
        temperamento: '',
        descripcion: '',
        castrado: '',
    })
 
    const handleChange = (e) => {
        setNewMascota({
            ...newMascota,
            [e.target.name] : e.target.value,
        })
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(newMascota);
        dispatch(postMascota(newMascota))
        setNewMascota({
            nombre:'', 
            especie: '', 
            tamaño: '', 
            edad: '',
            genero: '',
            temperamento: '',
            descripcion:'',
            castrado: '',
        })
    }
    return( 
    <Form> 
        <Form.Group controlId="formBasicNombre"> <Form.Label>Nombre</Form.Label> <Form.Control type="text" name="nombre" value={newMascota.nombre} onChange={handleChange} placeholder="Nombre de la mascota" /> </Form.Group>
        <Form.Group controlId="formBasicEspecie"> <Form.Label>Especie</Form.Label> <Form.Control type="text" name="especie" value={newMascota.especie} onChange={handleChange} placeholder="Especie" /> </Form.Group>
        <Form.Group controlId="formBasicTamaño"> <Form.Label>Tamaño</Form.Label> <Form.Control type="text" name="tamaño" value={newMascota.tamaño} onChange={handleChange} placeholder="Tamaño" /> </Form.Group>
        <Form.Group controlId="formBasicEdad"> <Form.Label>Edad</Form.Label> <Form.Control type="number" name="edad" value={newMascota.edad} onChange={handleChange} placeholder="Edad" /> </Form.Group>
        <Form.Group controlId="formBasicGenero"> <Form.Label>Genero</Form.Label> <Form.Control type="text" name="genero" value={newMascota.genero} onChange={handleChange} placeholder="Genero" /> </Form.Group>
        <Form.Group controlId="formBasicTemperamento"> <Form.Label>Temperamento</Form.Label> <Form.Control type="text" name="temperamento" value={newMascota.temperamento} placeholder="Temperamento" onChange={handleChange} /> </Form.Group>
        <Form.Group controlId="formBasicDescripcion"> <Form.Label>Descripcion</Form.Label> <Form.Control type="text" name="descripcion" value={newMascota.descripcion} placeholder="Descripcion" onChange={handleChange} /> </Form.Group>
        <Form.Group controlId="formBasicCastrado"> <Form.Label>Castrado</Form.Label> <Form.Control type="text" name="castrado" value={newMascota.castrado} onChange={handleChange} placeholder="Castrado" /> </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}> Submit </Button>
               
        
    </Form>
); }

export default FormFundaciones;