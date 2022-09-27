import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

const Checkout = () => {

    


    const {cart,cartTotal,terminarCompra}=useCartContext()

    const [values, setValues] = useState({
        nombre: "",
        email: "",
        telefono:"",
        direccion: ""
    })

    const orden = {
        comprador: values,
        items:cart,
        total:cartTotal(),
        fecha:new Date().toString()

    }

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(orden)
        const ordenesRef= collection(db,"ordenes")
        addDoc(ordenesRef,orden)
        .then((doc)=>{
            terminarCompra(doc.id)
        })

    }

    if(cart.length === 0){
        return <Navigate to="/"/>
    }
    return (
        <div>
            <h2>Checkout</h2>

            <form onSubmit={handleSubmit} className="formulario">
                <input
                    name='nombre'
                    onChange={handleInputChange}
                    type={"text"}
                    value={values.nombre}
                    placeholder="Nombre"></input>
                <input
                    name='email'
                    onChange={handleInputChange}
                    type={"email"}
                    value={values.email}
                    placeholder="Email"></input>
                <input
                    name='telefono'
                    onChange={handleInputChange}
                    type={"text"}
                    value={values.telefono}
                    placeholder="Teléfono"></input>
                <input
                    name='direccion'
                    onChange={handleInputChange}
                    type={"text"}
                    value={values.direccion}
                    placeholder="Dirección"></input>
                <button type='submit' className='btn1'>Enviar</button>

            </form>
        </div>
    )
}

export default Checkout