import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componentes/Home/home'
import Detalle from './componentes/Detalle/detalle';


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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalle" element={<Detalle />} />
           
          </Routes>
      </div>
  );
}

export default App;
