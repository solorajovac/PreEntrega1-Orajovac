import "./styles/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {cartWidget} from "./cartWidget"

const NavBar = ({background}) => {
    return(
        <>
        <header className={'header brackground--${background}'}>
        <div className="header-container">

            {/* Botón menú */}
            <div className="menu-button">
                <FontAwesomeIcon icon={faBars} size="lg" color="black"/>
                <small>Menú</small>
            </div>


            {/* Links de navegación */}
            <nav>
                <ul className="nav-container">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Nosotros</a></li>
                    <li><a href="/">Motos <span className="arrow"></span></a></li>
                    <li><a href="/">Contacto</a></li>
                </ul>
            </nav>

            {/* Logo de la marca */}
            <div className="logo-container">
                {/* <img src={logo} alt="Logo" */}
            </div>
        </div>

        {/* Cart-widget */}
        <div>
            <cartWidget/>
        </div>
        </header>
        </>
    )
}

export default NavBar; 