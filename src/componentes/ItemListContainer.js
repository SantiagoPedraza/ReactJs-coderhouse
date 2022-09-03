import React from "react";
import './styles.css';
import { useEffect,useState } from "react";
import { pedirDatos } from "../helper/pedirDatos";
import ItemList from "./ItemList";



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
           .then( (res) => {
                setProductos(res)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                 console.log("Fin del proceso")
            })
    }, [])
  return (
    <div>
     
    

      <h2 className="productos-h2">Nuestros Productos</h2>
      <div className="productos-flex container">
        
  
        
      <ItemList productos={productos}/>
        

      </div>
    </div>

  )
}

export default ItemListContainer;













