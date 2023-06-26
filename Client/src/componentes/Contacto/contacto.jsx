import style from './contacto.module.css';

const contacto = () =>{
    return(
        <footer className={style.footer}>
        <div>
          <small>Ponte en contacto con nosotros:</small>
        </div>
        <div>
          <small>petconnect@gmail.com</small>
        </div>
        <div>
          <small>7-654-891</small>
        </div>
      </footer>
    )
}

export default contacto