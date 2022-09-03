import { useState } from "react";

const Contador = () => {
    //let counter = 1;
    const [counter, SetCounter] = useState(0)
    const [AddCart, SetAddCart] = useState(true)


    const handleSuma = () => {
        SetCounter(counter + 1)
    }

    const handleResta = () => {
        if (counter > 0) {
            SetCounter(counter - 1)
        }
    }
    const handleAddCart = () => {
        if(counter>0){
        SetAddCart()
        SetCounter(0)
        }
    }
    return (
        <div className="botton-producto">

            <hr />
            <button onClick={handleResta} className="btn btn-outline-danger">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSuma} className="btn btn-primary">+</button>
            <div>
                <button onClick={handleAddCart} className="btn btn-warning btnAddCart">{AddCart ? "Agregar al Carrito" : "Se agrego al Carrito "}</button>
            </div>
        </div>


    );


}
export default Contador;