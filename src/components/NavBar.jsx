import React from 'react'
import "./style.css"
import { CartWidget } from './CartWidget'

function NavBar() {
    const objStyle= {backgroundColor: 'lightblue'}
    return (
        <div>
                    <div className="container-fluid" style={objStyle}>
                        <h1>TODO TENIS</h1>
                        
                
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="www.google.com">Raquetas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="www.google.com">Indumentaria</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="www.google.com">Accesorios</a>
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
