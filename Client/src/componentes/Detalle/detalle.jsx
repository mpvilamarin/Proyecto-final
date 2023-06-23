import React from 'react';
import { Link } from 'react-router-dom';


export default function Detalle({ id = 0 }) {
  const objetoDetalle = {
    nombre: '',
    img: '',
    género: '',
    edad: 0,
    tamaño: 0,
    descripción: '',
    castrado: true,
    contacto: { fundación: '', email: '', teléfono: 0 },
    temperamento: [],
  }
  return (
    <div>
      <div>
        <h2>Nombre:</h2>
        <img src="" alt="" />
      </div>

      <div>
        <h4>Género:</h4>
      </div>

      <div>
        <h4>Edad:</h4>
      </div>

      <div>
        <h4>Tamaño:</h4>
      </div>

      <div>
        <h4>Temperamentos:</h4>
      </div>

      <div>
        <h4>Descripción:</h4>
      </div>

      <div>
        <h4>Esterilizado/Castrado</h4>
      </div>

      <div>
        <h4>Contacto:</h4>
      </div>

      <div>
        <Link to={`/adopción/${id}`}>
          <button>Adoptar</button>
        </Link>
      </div>

      <div>
        <Link to='/home'>Home</Link>
      </div>
    </div>
  )
}