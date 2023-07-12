const Solicitudes = ({ nombreCompleto, motivoAdopcion }) =>{

    console.log(nombreCompleto)
    return(
        <div>
            <h1>{nombreCompleto}</h1>
            <h4>{motivoAdopcion}</h4>
        </div>
    )
}

export default Solicitudes