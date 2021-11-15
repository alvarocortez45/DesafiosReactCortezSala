import React from "react";
import { useState, useEffect } from "react";
import { ItemDetail } from "../../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Loader } from "../../Loader";
// import { getFetchDetail } from "../../services/getFetchDetail";
import { getFirestore } from "../../services/getFirestore";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    const { prodId } = useParams();

    useEffect(() => {
        const dataBase = getFirestore();

        const dataBaseQuery = dataBase.collection("items").doc(prodId).get();

        dataBaseQuery
            .then((item) => setDetail({ id: item.id, ...item.data() }))
            .catch((error) => alert("Error:", error))
            .finally(() => setLoading(false));
    }, [prodId]);

   
    return (
        <>
            {/* <NavBar /> */}
            {loading ? <Loader /> : <ItemDetail detail={detail} />}
        </>
    );
};

