import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Inicio from './Inicio/BienvenidaAdmin';
import NavBar from './NavBar/NavBarVertical';
import CrearAdmin from './CrearAdmin/CrearAdmin';

const DashboardRoutes = () => {
    return (
        <div>
            <NavBar />
                    <Route path="/DashboardAdmin" component={Dashboard} />
                    <Route path="/InicioAdmin" component={Inicio} />
                    <Route path="/crearAdmin" element={<CrearAdmin />} />
        </div>
    );
};

export default DashboardRoutes;