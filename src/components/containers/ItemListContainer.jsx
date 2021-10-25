import React from "react";
import { ItemCount } from "./ItemCount";

export function ItemList({ greeting }) {
    function mostrarCantProd(total) {
        console.log(`TOTAL: ${total}`);
    }

    return (
        <div>
            <p> {greeting}</p>
            <ItemCount
                stock={5}
                initial={1}
                onAdd={mostrarCantProd}
            />
        </div>
    );
}