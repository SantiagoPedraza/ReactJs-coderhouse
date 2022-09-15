import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function CartWidget() {
    
    return(
        <Link to="/cart">
            <FontAwesomeIcon icon={faBagShopping} size="2x" color="red"/>
             <span>0</span>
         </Link>
    );
    
};

export default CartWidget;