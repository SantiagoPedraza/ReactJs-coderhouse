import { useEffect, useState } from "react"
import { pedirDatos } from "../helper/pedirDatos"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = ({idProducto}) => {

    const [item,setItem] = useState(null)
    



  

    useEffect(() => {
        //pedirDatos()
           
        

    }, [])

    return (
        <div>
            {
                //<ItemDetail item={item} />
            }
            

        </div>
    )
}

export default ItemDetailContainer