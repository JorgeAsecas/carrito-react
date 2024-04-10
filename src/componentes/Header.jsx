import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
    return(
        <header>
        <nav>


        <Link to={"/"}>
            <a><img src="src/assets/logo.png" alt="Animales Sanlucar logo" width="70"
                    height="70"/></a>
                    </Link>
            <ul>
            <Link to={"/"}>
                <li><a>Inicio</a></li>
                </Link>
                <Link to={"/adopta"}>
                <li><a>Adopta</a></li>
                </Link>
                <Link to={"/finalesfelices"}>
                <li><a>Finales Felices</a></li>
                </Link>
                <Link to={"/contacto"}>
                <li><a>Contacto</a></li>
                </Link>
                <Link to={"/nosotros"}>
                <li><a>Sobre nosotros</a></li>
                </Link>
            </ul>
        </nav>

    </header>

    )

}
