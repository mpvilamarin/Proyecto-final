import React from 'react';
import style from './Redirect.module.css';
import { useNavigate } from 'react-router-dom';

function Redirect() {
    const Navigate = useNavigate();  

    const handleVolver = () => {
        Navigate('/'); // Redirige al inicio de la aplicación
    };

    return (
        <div>
            <h1>404Pagina Erronea</h1>
                <p className={style.zoomArea}><b>Ops!</b> La pagina que buscas no existe. </p>
                    <section className={style.errorContainer}>
                        <span className={style.four}><span className={style.screenReaderText}>4</span></span>
                        <span className={style.zero}><span className={style.screenReaderText}>0</span></span>
                        <span className={style.four}><span className={style.screenReaderText}>4</span></span>
                    </section>
            <div className={style.linkContainer}>
                <button target="_blank" onClick={handleVolver} className={style.moreLink}>Visit the original article</button>
            </div>
        </div>
    );
}

export default Redirect;