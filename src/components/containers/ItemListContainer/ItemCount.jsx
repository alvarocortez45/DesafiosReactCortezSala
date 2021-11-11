import { useState } from "react";
export function ItemCount({ stock, initial, addToCart }) {
    let [count, setCount] = useState(initial);

    function increaseQty() {
        setCount(count + 1);
    }

    function decreaseQty() {
        setCount(count - 1);
    }

    const addToCartHandler = () => {
        addToCart(count);
    };

    return (
        <div className="centrar">
            <h4> STOCK: {stock} </h4>
            <h3> CANTIDAD: {count} </h3>
            <button onClick={increaseQty} disabled={count === stock}>
                +
            </button>
            <button onClick={decreaseQty} disabled={count < 1}>
                -
            </button>
            <button
                onClick={() =>
                    addToCartHandler(
                        console.log(
                            "capturo la cantidad en ItemCount y la llevo para mostrarla en itemDetail"
                        )
                    )
                }
            >
                AÑADIR AL CARRITO
            </button>
            {}
        </div>
    );
}