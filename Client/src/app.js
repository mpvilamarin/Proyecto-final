import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componentes/Home/home'
import Detalle from './componentes/Detalle/detalle';
import Nosotros from './componentes/Nosotros/nosotros';
import Adopcion from './componentes/Adopción/adopcion';
import NavBar from './componentes/NavBar/navbar';
import Registro from './componentes/Sesiones/registro/registro';
import Login from './componentes/Sesiones/sesion/login';
import 'bootstrap/dist/css/bootstrap.min.css';



// const location = useLocation();

function App() {
  return (
      <div>
        <NavBar />
          <Routes>
            {/* <Route exact path="/" element={<Landing/>}></Route> */}
            <Route path="/home" element={<Home />} />
            <Route path="/detalle" element={<Detalle />} />
            <Route path="/about" element={<Nosotros />} />
            <Route path="/detalle/:id" element={<Detalle />} />
            <Route path="/adopciones" element={<Adopcion />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
           
          </Routes>
      </div>
  );
}

export default App;


