import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
    return(
        <div className="cart-widget">
            <div className="qty-display">
            <FontAwesomeIcon icon={faBagShopping} size="2x" color="red"/>
            </div>

        </div>

    );
    
};

export default CartWidget;