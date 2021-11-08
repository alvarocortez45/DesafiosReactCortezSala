import React from "react";
import { ItemCount } from "../containers/ItemListContainer/ItemCount"
import { Link } from "react-router-dom";
import { useState } from "react";

export const ItemDetail = ({ detail }) => {
    const [quantity, setQuantity] = useState(1);
    const [purchaseQuantity, setPurchasequantity] = useState(false);

    const onAdd = (count) => {
        setQuantity(count);
        console.log({ count }, "Cantidad desde itemDetail");
        setPurchasequantity(true);
    };

    return (
        <div className="contain-cartDetail">
            <h2>{detail.title}</h2>
            <img src={detail.photo} alt={detail.title} />
            <p>{detail.desc}</p>
            <p>Cantidad: {quantity} unidad(es)</p>
            <h3>$ {detail.price}</h3>
            {purchaseQuantity ? (
                <Link to="/cart">
                    {" "}
                    <button> TERMINAR </button>{" "}
                </Link>
            ) : (
                <ItemCount
                    stock={detail.stock}
                    initial={quantity}
                    onAdd={onAdd}
                />
            )}
            <Link to="/productos">
                <button>VOLVER</button>
            </Link>
        </div>
    );
};