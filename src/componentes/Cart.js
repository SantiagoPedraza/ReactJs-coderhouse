import { useCartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"


const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    

    return (
        <div className="container my-5">
            <h2>Tu carrito</h2>
            <hr/>

            { cart.map((item) => (
                // <CartItem key={} item={item}/>
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <p>Precio: {item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <small>Color: {item.color}</small>
                    <small>Talle: {item.talle}</small>
                    <button onClick={() => removeItem(item.id)} className="btn btn-danger mx-2"> <FontAwesomeIcon icon={faTrash} size="2x" color="red"/></button>
                    <hr/>
                </div>
            ))}


            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
            <Link className="btn btn-success mx-3" to="/checkout">Terminar mi compra</Link> 
        </div>
    )
}

export default Cart