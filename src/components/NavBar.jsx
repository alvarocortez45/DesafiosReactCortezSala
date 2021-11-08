import React from "react";
import { Link } from "react-router-dom";
import { CartIconLogo } from "./CartWidget";
import logo from "../components/img/TODO TENIS.png";

export const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="NavBar-div">
                <Link to="/">
                    {" "}
                    <img className="logo" src={logo} alt="logo" />{" "}
                </Link>
            </div>
            <nav className="navegacion">
                <ul className="menu">
                    <li>
                        {" "}
                        <Link to="/">Home</Link>{" "}
                    </li>

                    <li>
                        {" "}
                        <Link to="/productos">Productos</Link>{" "}
                        <ul className="submenu">
                            
                            <li>
                                <Link to="/productos/raquetas">
                                    {" "}
                                    Raquetas
                                </Link>
                            </li>
                            <li>
                                <Link to="/productos/accesorios">
                                    {" "}
                                    Accesorios
                                </Link>
                            </li>
                            
                        </ul>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>

                    <li>
                        <Link
                            to="/cart"
                            className="Link cartLogo"
                            href="https://google.com"
                        >
                            <CartIconLogo />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
