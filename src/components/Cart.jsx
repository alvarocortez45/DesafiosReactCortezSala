import React from "react";
import { useCartContext } from "./Context/CartContext";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

export const Cart = () => {
    const { cartList, removeItem, clearCart } = useCartContext();

    console.log(cartList, "cartList desde cart");

    return (
        <div>
            <NavBar />
            <p className="App">CARRITO</p>

            {cartList.length ? (
                <div>
                    <button onClick={() => clearCart()}>VACIAR</button>
                    <button>PAGAR</button>
                </div>
            ) : (
                <div>
                    <p>El carrito está vacío</p>
                    <Link to="/"> INICIO</Link>
                </div>
            )}
            {cartList.map((itemAdded) => (
                <div key={itemAdded.detail.id}>
                    <img
                        src={itemAdded.detail.img}
                        alt={itemAdded.detail.title}
                    />
                    <div>
                        <h5>{itemAdded.detail.title}</h5>

                        <p>{itemAdded.detail.desc}</p>
                        <p>$ {itemAdded.detail.price}</p>
                        <p>Cantidad: {itemAdded.quantity}</p>
                    </div>
                    <button onClick={() => removeItem(itemAdded.detail.id)}>
                        ELIMINAR
                    </button>
                </div>
            ))}
        </div>
    );
};