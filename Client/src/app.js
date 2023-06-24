import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componentes/Home/home'
import Detalle from './componentes/Detalle/detalle';
import Nosotros from './componentes/Nosotros/nosotros';
import Adopcion from './componentes/Adopción/adopcion';
import NavBar from './componentes/NavBar/navbar';


// const location = useLocation();

function App() {
  return (
      <div>
        <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/detalle" element={<Detalle />} />
            <Route path="/about" element={<Nosotros />} />
            <Route path="/detalle/:id" element={<Detalle />} />
            <Route path="/adopciones" element={<Adopcion />} />
           
          </Routes>
      </div>
  );
}

export default App;


