import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./componentes/Home/home";
import Detalle from "./componentes/Detalle/detalle";
import NavBar from "./componentes/NavBar/navbar";

// const location = useLocation();

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle" element={<Detalle />} />
      </Routes>
    </div>
  );
}

export default App;
