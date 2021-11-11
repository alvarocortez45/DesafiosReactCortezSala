import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import { ItemCount } from "../containers/ItemListContainer/ItemCount";

export const ItemDetail = ({ detail }) => {
    const [quantity, setQuantity] = useState(0);
    const [purchaseQuantity, setPurchasequantity] = useState(false);
    const { addToCartList } = useCartContext();
    
    const addToCart = (quantityAdded) => {
        console.log(
            { detail, quantity: quantityAdded },
            " item y cantidad desde itemDetail"
        );
        setQuantity(quantityAdded);
        addToCartList({ detail, quantity: quantityAdded });
        setPurchasequantity(true);
    };

    return (
        <div className="contain-cartDetail">
            <h2>{detail.title}</h2>
            <img src={detail.photo} alt={detail.title} />
            <p>{detail.desc}</p>
            <p>Cantidad seleccionada {quantity} unidad(es)</p>
            <h3>$ {detail.price}</h3>
            {purchaseQuantity ? (
                <div>
                    <Link to="/cart">
                        {" "}
                        <button> TERMINAR COMPRA </button>{" "}
                    </Link>
                    <Link to="/">
                        <button>INICIO</button>
                    </Link>
                    <Link to="/productos">
                        <button>CONTINUAR COMPRANDO</button>
                    </Link>
                </div>
            ) : (
                <ItemCount
                    stock={detail.stock}
                    initial={quantity}
                    addToCart={addToCart}
                />
            )}
        </div>
    );
};