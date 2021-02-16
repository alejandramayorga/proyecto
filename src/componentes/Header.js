import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return(
        <header className = "header">
        <h1 className = "header__titulo">Lista Tareas</h1>
        <button className="header__boton">No mostrar completadas</button>
             <FontAwesomeIcon icon = {faEyeSlash} className = "header__icono-boton" />
        </header>
    )
}

export default Header;