import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import { ItemCount } from "../containers/ItemListContainer/ItemCount";

export const ItemDetail = ({ detail, AddedToCart }) => {
    const [quantity, setQuantity] = useState(0);
    const [purchaseQuantity, setPurchasequantity] = useState(false);
    const { addToCartList } = useCartContext();

    const addToCart = (quantityAdded) => {
        console.log(
            { detail, quantity: quantityAdded },
            " item y Cantidad desde itemDetail"
        );
        setQuantity(quantityAdded);
        addToCartList({ detail, quantity: quantityAdded });
        setPurchasequantity(true);
    };

    return (
        <div className="bkgc-detail">
            <div className="contain-cartDetail">
                <div className="div-detail1">
                    <h2 className="white">{detail.title}</h2>
                    <div className="contain-img-detail">
                        <img src={detail.photo} alt={detail.title} />
                    </div>
                    <p className="white">{detail.desc}</p>
                </div>
                <div className="div-detail2">
                    <h3 className="white price-detail">
                        Precio $ {detail.price}
                    </h3>
                    {purchaseQuantity ? (
                        <div>
                            <Link to="/cart">
                                {" "}
                                <button className="button-card-AddToCart-detail">
                                    {" "}
                                    FINALIZAR{" "}
                                </button>{" "}
                            </Link>
                            <Link to="/">
                                <button className="button-card">INICIO</button>
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
            </div>
        </div>
    );
};