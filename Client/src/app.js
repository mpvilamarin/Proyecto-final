import "./App.css";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Home from "./componentes/Home/home";
import Nosotros from "./componentes/Nosotros/nosotros";
import Adopcion from "./componentes/Adopcion/adopcion";
import NavBar from "./componentes/NavBar/navbar";
import Fundacion from "./componentes/Fundacion/Fundacion";
import Registro from "./componentes/Sesiones/registro/registro";
import Redirect from "./componentes/Redirect/Redirect";
import Footer from "./componentes/Footer/Footer";
import Dashboard from "./componentes/DashboardAdmin/Dashboard/Dashboard";
import BienvenidaAdmin from "./componentes/DashboardAdmin/Inicio/BienvenidaAdmin";
import CrearAdmin from "./componentes/DashboardAdmin/CrearAdmin/CrearAdmin";
import ModificarFundacion from "./componentes/DashboardAdmin/ManejoFundaciones/ManejoFundaciones";
import ModificarMascota from "./componentes/DashboardAdmin/ManejoMascotas/ManejoMascotas";
//import { RequireAuth } from "react-auth-kit";

import LogOut from "./componentes/Autenticacion/LogOut/logout";
import Perfil from "./componentes/Autenticacion/Perfil/perfil";
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
import DetalleFundacion from "./componentes/Fundacion/detailFundacion";
import LoadingSpinner from "./componentes/LoadingSpinner/LoadingSpinner";


import PerfilFund from "./componentes/Sesiones/perfilFun/perfilFund";


// import CardFundaciones from './componentes/Cartas/cardFundacion'

import "bootstrap/dist/css/bootstrap.min.css";

import DueñoResponsable from "./componentes/Informacion/DueñoResponsable/DueñoResponsable";
import { useEffect, useState } from "react";

function App() {
 axios.defaults.baseURL = "https://fundacion-mascotas-uz9u.onrender.com";

  const usuarioAdmin = useSelector((state) => state.usuarioAdmin);
  const [isLoading, setIsLoading] = useState(true);

  const usuarioFundacion = useSelector((state) => state.usuarioFundacion);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    },2000)
  }, [])

  return (
    <div>
      <NavBar />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Nosotros />} />
            <Route path="/fundaciones" element={<Fundacion />} />
            <Route path="/mascota/:id" element={<DetalleMascota />} />
            <Route path="/fundacion/:id" element={<DetalleFundacion />} />
            <Route path="/adopciones" element={<Adopcion />} />
            <Route
              path="/login"
              element={
                !isAuthenticated && !usuarioAdmin && !usuarioFundacion ? (
                  <Inicio />
                ) : (
                  <Navigate to="/error" />
                )
              }
            />
            <Route
              path="/logout"
              element={
                isAuthenticated ? (
                  <LogOut />
                ) : (
                  <Navigate to="/error" />
                )
              }
            />
            <Route
              path="/perfil"
              element={
                isAuthenticated && !usuarioAdmin && !usuarioFundacion ? (
                  <Perfil />
                ) : (
                  <Navigate to="/error" />
                )
              }
            />
            <Route path="/registro" element={<Registro />} />
            <Route path="/dueñoResponsable" element={<DueñoResponsable />} />
            <Route
              path="/perfilfund"
              element={
                !isAuthenticated &&
                isAuthenticated &&
                !usuarioAdmin &&
                usuarioFundacion ? (
                  <PerfilFund />
                ) : (
                  <Navigate to="/error" />
                )
              }
            />
            <Route
              path="/formMascota"
              element={
                !isAuthenticated &&
                isAuthenticated &&
                !usuarioAdmin &&
                usuarioFundacion ? (
                  <FormMascota />
                ) : (
                  <Navigate to="/error" />
                )
              }
            />
            <Route
              path="/formAdopcion"
              element={
                isAuthenticated &&
                !usuarioAdmin &&
                !usuarioFundacion ? (
                  <FormAdopcion />
                ) : (
                  <Navigate to="/error" />
                )
              }
            />
            <Route
              path="/donaciones"
              element={
                isAuthenticated &&
                !usuarioAdmin &&
                !usuarioFundacion ? (
                  <Donacion />
                ) : (
                  <Navigate to="/error" />
                )
              }
            />
            <Route path="/donaciones/feedback" element={<Feedback />} />
            <Route path="/donaciones/rejected" element={<Rejected />} />
            <Route
              path="/DashboardAdmin"
              element={
                isAuthenticated &&
                !isAuthenticated &&
                !usuarioFundacion &&
                usuarioAdmin ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/error" />
                )
              }
            />
            <Route path="*" element={<Navigate to="/error" />} />
            <Route path="/error" element={<Redirect />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;