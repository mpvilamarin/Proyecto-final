import './App.css';
import { Route, Routes , useLocation} from 'react-router-dom';
import Home from './componentes/Home/home'
import DetalleMascota from './componentes/Mascota/detailMascota';
import Nosotros from './componentes/Nosotros/nosotros';
import Adopcion from './componentes/Adopción/adopcion';
import NavBar from './componentes/NavBar/navbar';
import FormFundaciones from './componentes/Forms/FormFundaciones.jsx'
import FormMascota from './componentes/Forms/FormMascota.jsx'
import CardFundaciones from './componentes/Cartas/cardFundacion'
import DetalleFundacion from './componentes/Fundación/detailFundacion'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const location = useLocation();
  return (
      <div>
            {location.pathname !== "/" && <NavBar/>}
          <Routes>
            {/* <Route exact path="/" element={<Landing/>}></Route> */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<Nosotros />} />
            <Route path="/fundaciones" element={<CardFundaciones/>} />
            <Route path="/mascota/:id" element={<DetalleMascota/>} />
            <Route path="/fundacion/:id" element={<DetalleFundacion/>} />
            <Route path="/adopciones" element={<Adopcion />} />
            <Route path="/formFundaciones" element={<FormFundaciones/>}/>
            <Route path="/formMascota" element={<FormMascota/>}/>
            {/* <Route path='*' element={<Navigate to='/error'/>}/>
            <Route path="/error" element={< Redirect/>} /> */}
          </Routes>
      </div>
  );
}

export default App;


