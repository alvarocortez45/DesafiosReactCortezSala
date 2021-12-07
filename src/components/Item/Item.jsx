import {Link} from "react-router-dom"

export const Item = ({ prod }) => {
    return (
        <div className="cards">
            <h3>{prod.title}</h3>
            <div className="contain-image-card">
                <img src={prod.photo} alt="raqueta" />
            </div>
            <h4>Precio: ${prod.price}</h4>
            <Link to={`/producto/${prod.id}`}>
                <button className="button-card">Detalle</button>{" "}
            </Link>
            <span>Stock: {prod.stock}</span>
        </div>
    );
};