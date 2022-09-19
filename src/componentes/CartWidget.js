import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";



function CartWidget() {

    const { cartQuantity } = useContext(CartContext)
    
    return(
        <Link to="/cart">
            <FontAwesomeIcon icon={faBagShopping} size="2x" color="red"/>
             <span>{cartQuantity()}</span>
         </Link>
    );
    
};

export default CartWidget;