import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componentes/Home/home'
import Detalle from './componentes/Detalle/detalle';
import Nosotros from './componentes/Nosotros/nosotros';


// const location = useLocation();

function App() {
  return (
      <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/detalle" element={<Detalle />} />
            <Route path="/nosotros" element={<Nosotros />} />

            <Route path="/detalle/:id" element={<Detalle />} />

           
          </Routes>
      </div>
  );
}

export default App;


