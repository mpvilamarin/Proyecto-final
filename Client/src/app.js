
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
import Footer from "./componentes/Footer/Footer";
import Dashboard from "./componentes/DashboardAdmin/Dashboard";

//import { RequireAuth } from "react-auth-kit";

import LogOut from "./componentes/Autenticación/LogOut/logout";
import Perfil from "./componentes/Autenticación/Perfil/perfil";
import { useAuth0 } from "@auth0/auth0-react";
import Inicio from "./componentes/Inicio/inicio";
import Login2 from "./componentes/Sesiones/sesion/login2";

import Donacion from "./componentes/Donaciones/donaciones";
import Rejected from "./componentes/Donaciones/Rejected/Rejected";
import Feedback from "./componentes/Donaciones/feedback/Feedback";

// import { RequireAuth } from "react-auth-kit";

// const location = useLocation();

import FormFundaciones from "./componentes/Forms/FormFundaciones.jsx";
import FormMascota from "./componentes/Forms/FormMascota.jsx";
import FormAdopcion from "./componentes/Forms/FormAdopcion.jsx";
import DetalleMascota from "./componentes/Mascota/detailMascota";
import DetalleFundacion from "./componentes/Fundación/detailFundacion";



// import CardFundaciones from './componentes/Cartas/cardFundacion'



import "bootstrap/dist/css/bootstrap.min.css";

function App() {


  axios.defaults.baseURL = 'https://fundacion-mascotas-uz9u.onrender.com/';

  const location = useLocation();
  const { isAuthenticated, user } = useAuth0();


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
        <Route path="/" element={<Home />} />
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
<<<<<<< HEAD
        <Route path="/formFundaciones" element={<FormFundaciones />} />
        <Route path="/formMascota" element={<FormMascota />} />
        <Route path="/formAdopcion" element={<FormAdopcion />} />
=======
        <Route path="/formFundaciones" element={isAuthenticated && user && user.role === "Fundacion" ? (
          <FormFundaciones user={user} />
        ):(<Navigate to="/login"/>)} />
        <Route path="/formMascota" element={isAuthenticated && user && user.role === "Fundacion" ? (
          <FormMascota user={user} />
        ):(<Navigate to="/login"/>)} />
>>>>>>> 4fd8851fefe13ee7b89af4ec24761743a10ee8a7
        <Route path="/donaciones" element={<Donacion />} />
        <Route path="/donaciones/feedback" element={<Feedback />} />
        <Route path="/donaciones/rejected" element={<Rejected />} />
        <Route path="/DashboardAdmin" element={<Dashboard/>}/>
        <Route path="*" element={<Navigate to="/error" />} />
        <Route path="/error" element={<Redirect />} />
        


      </Routes>
      <Footer/>
      {/* <footer>
        <Contacto />
      </footer> */}
    </div>
  );
}

export default App;
