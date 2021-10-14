import React from 'react'

function NavBar() {
    return (
        <div>
                    <div className="container-fluid">
                        <h1>TODO TENIS</h1>
                        
                
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Raquetas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Indumentaria</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Accesorios</a>
                            </li>
                        </ul>
                    </div>   
        </div>   
    )
}

export default NavBar
