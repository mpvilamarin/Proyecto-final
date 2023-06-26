import React, {useState, useEffect} from 'react'; 
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { postMascota } from '../../redux/Actions/post';
import { getAllFundaciones } from '../../redux/Actions/get'

function FormFundaciones(){ 

    const fundaciones = useSelector( state => state.fundaciones);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllFundaciones())
    },[dispatch])


    const [newMascota, setNewMascota] = useState({
        nombre: '',
        especie: '',
        tamaño: '',
        edad: '',
        genero: '',
        temperamento: '',
        descripcion: '',
        castrado: '',
        fundacionId: []
    })
 
    const handleChange = (e) => {
        setNewMascota({
            ...newMascota,
            [e.target.name] : e.target.value,
        })
    }

    const handleChecked = (e) =>{
        if( e.target.checked){
            setNewMascota({
                ...newMascota,
                fundacionId: [...newMascota.fundacionId, e.target.value ]
            })
        }else{
            setNewMascota({
                ...newMascota,
                fundacionId: newMascota.fundacionId.filter((fundacion) => fundacion !== e.target.value)
            })
        }
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
            fundacionId: []
        })
    }


    const sortedFundacion = fundaciones.slice().sort((a,b) => {
        return a.nombre.localCompare(b.nombre);
    })

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
        
        <div >
            <div>
                {
                    sortedFundacion.length >= 1 ?
                        sortedFundacion?.map((elem, index) => (
                        <div key={index}>
                            <label htmlFor={`fundacionId_${index}`} key={index}>
                                <input type="checkbox" name={`fundacionId_${index}`} value={elem.nombre} key={index} onChange={handleChecked}/>
                                {elem.nombre}
                            </label>
                        </div>
                    ))
                    :undefined
                }
            </div>
        </div>
        
        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}> Submit </Button>
               
        
    </Form>
); }

export default FormFundaciones;