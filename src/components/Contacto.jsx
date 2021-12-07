import React from "react";
import { NavBar } from "./NavBar";
import { Loader } from "./Loader";

export const Contacto = () => {
    return (
        <>
            <NavBar />

            <div className="container-contact">
                <div className="contact-content">
                    <ul>
                        <li>Mail: contacto@todotenis.com.ar</li>
                        <li>Teléfono: 0351-155123456</li>
                        <li>IG: TodoTenis</li>
                        <li>FB: TodoTenis</li>
                    </ul>
                </div>
                <div className="contact-loader">
                    <Loader />
                </div>
            </div>
        </>
    );
};