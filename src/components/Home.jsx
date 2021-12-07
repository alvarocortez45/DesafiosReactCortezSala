import React from "react";
import { NavBar } from "./NavBar";
import "./style.css";

function Home(){
    return (
        <div>
                <NavBar />
                <div className="mainTitle">
                    <h2>BIENVENIDO A TODO TENIS</h2>
                    <h3>LA TIENDA DE TENIS MAS GRANDE DEL PAÍS</h3>
                </div>
        </div>
    );
}

export default Home;