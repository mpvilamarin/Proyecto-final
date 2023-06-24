import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componentes/Home/home'
import Detalle from './componentes/Detalle/detalle';
import Fundacion from './componentes/Fundación/fundacion';


// const location = useLocation();

function App() {
  return (
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalle" element={<Detalle />} />
            <Route path="/fundacion" element={<Fundacion/>}/>
          </Routes>
      </div>
  );
}

export default App;


