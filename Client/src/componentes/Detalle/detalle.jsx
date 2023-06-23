import React, { useEffect , useParams} from 'react';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux'
import { getAllMascotas } from '../../redux/Actions';

export default function Detalle() {
  const {id} = useParams();
  console.log(id)
  const allMascotas = useSelector((state) => state.mascotas)
  console.log(allMascotas)
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(allMascotas)
    dispatch(getAllMascotas(id))
  }, [dispatch, id])


  // const objetoDetalle = {
  //   nombre: '',
  //   img: '',
  //   género: '',
  //   edad: 0,
  //   tamaño: 0,
  //   descripción: '',
  //   castrado: true,
  //   temperamento: "",
  //   // contacto: { fundación: '', email: '', teléfono: 0 },
  // }


  return (
    <div>
      <div>
        <h2>Nombre:{allMascotas.nombre}</h2>
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