import Logo from "../components/img/cartIcon.png"
import { useCartContext } from "./Context/CartContext";
export function CartIconLogo() {
    const { itemQuantity } = useCartContext();

    if (itemQuantity > 0) {
        return (
            <div className="container-cartWidget">
                <img src= {Logo} alt= "Carrito" />
                <p className="black">{itemQuantity}</p>
            </div>
        );
    }

    return <></>;
}
