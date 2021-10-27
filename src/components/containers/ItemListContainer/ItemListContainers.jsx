import React from "react";
import { useState, useEffect } from "react";
import { getFetch } from "../../services/getFetch.js";
import { ItemList } from "../../ItemList/ItemList";

export function ItemListContainer() {
    
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getFetch
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <ItemList product={product} />
            
        </>
    );
}