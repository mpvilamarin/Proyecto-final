import './App.css';
import { Route, Routes , useLocation} from 'react-router-dom';
import Home from './componentes/Home/home'
import Nosotros from './componentes/Nosotros/nosotros';
import Adopcion from './componentes/Adopción/adopcion';
import NavBar from './componentes/NavBar/navbar';
import Fundacion from './componentes/Fundación/Fundacion';
import Registro from './componentes/Sesiones/registro/registro';
import Login from './componentes/Sesiones/sesion/login';
import Contacto from './componentes/Contacto/contacto'
import { RequireAuth } from "react-auth-kit";

// const location = useLocation();
import FormFundaciones from './componentes/Forms/FormFundaciones.jsx'
import FormMascota from './componentes/Forms/FormMascota.jsx'
import DetalleMascota from './componentes/Mascota/detailMascota';
import DetalleFundacion from './componentes/Fundación/detailFundacion'
// import CardFundaciones from './componentes/Cartas/cardFundacion'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const location = useLocation();
  return (

      <div>
            <NavBar/>
          <Routes>
          <Route
          path="/"
          element={
            <RequireAuth loginPath="/login">
              <Home />
            </RequireAuth>
          }
        ></Route>
            {/* <Route exact path="/" element={<Landing/>}></Route> */}
            <Route path="/" element={<Home />} />            
            <Route path="/about" element={<Nosotros />} />
            <Route path="/fundaciones" element={<Fundacion/>} />
            <Route path="/mascota/:id" element={<DetalleMascota/>} />
            <Route path="/fundacion/:id" element={<DetalleFundacion/>} />
            <Route path="/adopciones" element={<Adopcion />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/formFundaciones" element={<FormFundaciones/>}/>
            <Route path="/formMascota" element={<FormMascota/>}/>
            {/* <Route path='*' element={<Navigate to='/error'/>}/>
            <Route path="/error" element={< Redirect/>} /> */}
          </Routes> 
          <Contacto/>
        </div>
  );
}

export default App;
