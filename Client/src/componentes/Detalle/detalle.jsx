import React, { useEffect, useParams } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getAllMascotas, getDetailMascota } from '../../redux/Actions';



export default function Detalle() {
  // const { id } = useParams();
  const detail = useSelector((state) => state.mascotas)
  console.log(detail)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMascotas())
    // dispatch(getDetailMascota(id))
  }, []);


  return (
    <div>
      <div>
        <h2>Nombre: {detail.nombre}</h2>
        <img src={detail.imagen} alt={detail.nombre} />
      </div>
      <br />

      <div>
        <h4>Especie: {detail.especie}</h4>
      </div>
      <br />

      <div>
        <h4>Género: {detail.genero}</h4>
      </div>
      <br />

      <div>
        <h4>Edad: {detail.edad}</h4>
      </div>
      <br />

      <div>
        <h4>Tamaño: {detail.tamaño}</h4>
      </div>
      <br />

      <div>
        <h4>Temperamento: {detail.temperamento}</h4>
      </div>
      <br />

      <div>
        <h4>Descripción: {detail.descripcion}</h4>
      </div>
      <br />

      <div>
        <h4>Esterilizado/Castrado: {detail.castrado}</h4>
      </div>
      {/* <div>
        <h4>Contacto:</h4>
      </div> */}
      <div>
        <Link to={`/adopcion/`}>
          <button>Adoptar</button>
        </Link>
      </div>

      <div>
        <Link to='/home'>Home</Link>
      </div>
    </div>
  )
}