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
import Dashboard from "./componentes/DashboardAdmin/Dashboard/Dashboard";
import BienvenidaAdmin from "./componentes/DashboardAdmin/Inicio/BienvenidaAdmin";
import  CrearAdmin  from "./componentes/DashboardAdmin/CrearAdmin/CrearAdmin";
import ModificarFundacion from "./componentes/DashboardAdmin/ModificarFundacion/ModificarFundacion";
import ModificarMascota from "./componentes/DashboardAdmin/ModificarMascota/ModificarMascota";
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


import PerfilFund from "./componentes/Sesiones/perfilFun/perfilFund";


// import CardFundaciones from './componentes/Cartas/cardFundacion'

import "bootstrap/dist/css/bootstrap.min.css";
import DueñoResponsable from "./componentes/Información/DueñoResponsable/DueñoResponsable";

function App() {
  axios.defaults.baseURL = "http://localhost:3001/";

  const location = useLocation();
  const { isAuthenticated, user } = useAuth0();

  return (
    <div>
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
        <Route path="/dueñoResponsable" element={<DueñoResponsable />} />

        <Route path="/perfilfund" element={<PerfilFund />} />

        {/* <Route
          path="/formFundaciones"
          element={
            isAuthenticated && user && user.role === "Fundacion" ? (
              <FormFundaciones user={user} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/formMascota"
          element={
            isAuthenticated && user && user.role === "Fundacion" ? (
              <FormMascota user={user} />
            ) : (
              <Navigate to="/login" />
            )
          }
        /> */}
        <Route path="/formMascota" element={<FormMascota />} />
        <Route path="/formFundaciones" element={<FormFundaciones />} />
        <Route path="/formAdopcion" element={<FormAdopcion />} />

        <Route path="/donaciones" element={<Donacion />} />
        <Route path="/formAdopcion" element={<FormAdopcion />} />
        <Route path="/donaciones/feedback" element={<Feedback />} />
        <Route path="/donaciones/rejected" element={<Rejected />} />
        <Route path="/DashboardAdmin" element={<Dashboard />} />
        <Route path="/InicioAdmin" element={<BienvenidaAdmin />} />

        <Route path="*" element={<Navigate to="/error" />} />
        <Route path="/error" element={<Redirect />} />
      
        {/* A PARTIR DE ACA VAN LAS RUTAS PARA LA DASHBOARD */}
        <Route path="/crearAdmin" element={<CrearAdmin />} />
        <Route path="/ModificarFundacion" element={<ModificarFundacion />} />
        <Route path="/ModificarMascota" element={<ModificarMascota/>} />
        
      
      
      </Routes>
      <Footer />
      </div>
        
      {/* <footer>
        <Contacto />
      </footer> */}
      <div> 
      </div>
   </div>
  );
}

export default App;