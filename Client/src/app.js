
import "./App.css";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import axios from "axios";
import Home from "./componentes/Home/home";
import Nosotros from "./componentes/Nosotros/nosotros";
import Adopcion from "./componentes/Adopción/adopcion";
import NavBar from "./componentes/NavBar/navbar";
import Fundacion from "./componentes/Fundación/Fundacion";
import Registro from "./componentes/Sesiones/registro/registro";
import Redirect from "./componentes/Redirect/Redirect";

import Contacto from "./componentes/Contacto/contacto";
//import { RequireAuth } from "react-auth-kit";
import LogOut from "./componentes/Autenticación/LogOut/logout";
import Perfil from "./componentes/Autenticación/Perfil/perfil";
import { useAuth0 } from "@auth0/auth0-react";
import Inicio from "./componentes/Inicio/inicio";
import Login2 from "./componentes/Sesiones/sesion/login2";
// import Contacto from './componentes/Contacto/contacto';
import Donacion from "./componentes/Donaciones/donaciones";

import Feedback from "./componentes/Donaciones/feedback/Feedback";

// import { RequireAuth } from "react-auth-kit";

// const location = useLocation();
import FormFundaciones from "./componentes/Forms/FormFundaciones.jsx";
import FormMascota from "./componentes/Forms/FormMascota.jsx";
import DetalleMascota from "./componentes/Mascota/detailMascota";
import DetalleFundacion from "./componentes/Fundación/detailFundacion";
// import CardFundaciones from './componentes/Cartas/cardFundacion'

import "bootstrap/dist/css/bootstrap.min.css";

function App() {


  axios.defaults.baseURL = 'https://fundacion-mascotas-uz9u.onrender.com/';

  const location = useLocation();
  const { isAutheticated } = useAuth0();

  return (
    <div>
      <NavBar />
      <Routes>
        {/* <Route
          path="/"
          element={
          //  <RequireAuth loginPath="/login">
              <Home />
          //  </RequireAuth>
          }
        ></Route> */}
        {/* <Route exact path="/" element={<Landing/>}></Route> */}
        <Route path="/" element={<Adopcion />} />
        <Route path="/about" element={<Nosotros />} />
        <Route path="/fundaciones" element={<Fundacion />} />
        <Route path="/mascota/:id" element={<DetalleMascota />} />
        <Route path="/fundacion/:id" element={<DetalleFundacion />} />
        <Route path="/adopciones" element={<Adopcion />} />
        <Route path="/login" element={<Inicio />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/formFundaciones" element={<FormFundaciones />} />
        <Route path="/formMascota" element={<FormMascota />} />
        <Route path="/donaciones" element={<Donacion />} />
        <Route path="/donaciones/feedback" element={<Feedback />} />
        <Route path="*" element={<Navigate to="/error" />} />
        <Route path="/error" element={<Redirect />} />
      </Routes>
      <footer>
        <Contacto />
      </footer>
    </div>
  );
}

export default App;
