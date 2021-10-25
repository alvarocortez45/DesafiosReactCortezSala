import { useState } from "react";

export function ItemCount({ stock, initial, onAdd }) {
    let [count, setCount] = useState(initial);

    function sumarProducto() {
        setCount(count + 1);
    }

    function restarProducto() {
        setCount(count - 1);
    }

    return (
        <div >
            <h4>STOCK: {stock} </h4>
            <h3>Cantidad deseada : {count} </h3>
            <button onClick={sumarProducto} disabled={count === stock}>
                +
            </button>
            <button onClick={restarProducto} disabled={count < 1}>
                -
            </button>
            <button onClick={() => onAdd(count)}>AÑADIR AL CARRITO</button>
        </div>
    );
}