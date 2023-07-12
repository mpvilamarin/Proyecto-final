import React, { useEffect } from "react";
import style from "./home.module.css";
import Info from "../Información/Info";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch} from "react-redux";
import { postUsuario } from "../../redux/Actions/post";

const Home = () => {

  const { user, isAuthenticated} = useAuth0();
  const dispatch = useDispatch();

  const usuarios = useSelector((state) => state.usuarios)


  useEffect(() => {
    if(isAuthenticated){
      const usuarioExistente = usuarios.find((usuario) => usuario.email === user.email);

    if (!usuarioExistente) {
      dispatch(postUsuario(user));
    }}
  }, [user, usuarios, dispatch]);


  return (
    <div className='container'>
      <div className={style.cardContainer}>
        <div>
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Home;
