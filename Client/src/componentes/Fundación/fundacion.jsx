import Cards from '../Cartas/cards'

const Fundacion = () => {
// se extrae el nombre de la fundacion que deberia venir por la URL y ese nombre se usara en una action en
// un use effect, que deberia traerme la info de la fundacion cuando se le busca por nombre

const datosFundacion ={
    nombre: 'Peludos',
    imagen: '',
    peluditos: [],
    mision: 'Hola',
    correo: '1234@gmail.com',
    telefono:'312356485',
    direccion:'cll 8',
}

return(
    <div>
        <div>
            <img src={datosFundacion.imagen} alt="Fundacion"/>
        </div>
        <div>
            <h1>{datosFundacion.nombre}</h1>
            <h1><b>Mision</b></h1>
            <h2>{datosFundacion.mision}</h2>
            <h3>{datosFundacion.correo}</h3>
            <h3>{datosFundacion.telefono}</h3>
            <h3>{datosFundacion.direccion}</h3>
        </div>
        <div>{datosFundacion.peluditos.map((peludo)=>
        (<div key={peludo.id}>
            <Cards peludo={peludo}/>
        </div>))}
        </div>
    </div>
)
}

export default Fundacion