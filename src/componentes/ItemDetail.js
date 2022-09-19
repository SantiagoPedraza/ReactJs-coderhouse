import {  useState } from "react"
import './styles.css';
import Contador from './ItemCount';
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({item}) => {

    const { cart, addToCart, isInCart } = useCartContext()
    console.log(cart)

    const [cantidad, setCantidad] = useState(1)
   

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            cantidad,
        
        }

        addToCart(itemToCart)
    }

    return (
        <div className="container my-5">
            <img src={item.img}/>
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>
            
            

            {
                 isInCart(item.id)
                 ?   <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                 :   <Contador 
                         max={item.stock}
                         counter={cantidad}
                         setCounter={setCantidad}
                         handleAgregar={handleAgregar}
                     />
            }
          

        </div>
    )
}

export default ItemDetail