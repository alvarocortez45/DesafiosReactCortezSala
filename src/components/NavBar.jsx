import React from 'react'
import "./style.css"
import { CartWidget } from './CartWidget'

function NavBar() {
    const objStyle= {backgroundColor: 'grey'}
    return (
        <div>
                    <div className="container-fluid" style={objStyle}>
                        
                        <img className="imgLogo" src="./assets/img/TODO TENIS.png" alt="todoTENIS" />
                
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="www.google.com">Tienda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="www.google.com">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="www.google.com">Contacto</a>
                            </li>
                            <li className="nav-item justify-content-right">
                                <a className= "cartLogo" href="www.google.com"><CartWidget/></a>
                            </li>
                        </ul>
                        
                    </div>   
        </div>   
    )
}

export default NavBar
