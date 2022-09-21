import React from "react";
import './styles.css';
import { useEffect,useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom'
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore"




const ItemListContainer = () => {
   
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()
  

  useEffect(() => {
      setLoading(true)

      const productosRef = collection(db, 'productos')
        const q = categoryId 
                    ? query(productosRef, where('category', '==', categoryId) )
                    : productosRef
    
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
                console.log(productosDB)

                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })
      

     
  }, [categoryId])


  return (
      <div>
          {
              loading 
              ? <h2>Cargando...</h2>
              : <ItemList productos={productos}/>
          }
      </div>
  )
}

export default ItemListContainer













