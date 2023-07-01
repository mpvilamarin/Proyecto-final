import Login from "../Autenticación/LogIn/login"
import { Link } from "react-router-dom";


const inicio = () =>{
    return(
        <div>
            <div>
                <h1>Inicia sesion</h1>
                <h1>como usuario</h1>
                <Login/>
            </div>
            <div style={{ paddingLeft: '60%' }}>
                <h1>Inicia sesion</h1>
                <h1>Como fundacion</h1>
                <Link to="/login2" className="nav-link">Log in</Link>
            </div>
        </div>
    )
}

export default inicio;