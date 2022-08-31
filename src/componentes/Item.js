const Item = ( {producto} ) => {

    return (
        <div>
            <img alt={producto.img}/>
            <h4>{producto.nombre}</h4>
            <p>Precio: {producto.precio}</p>
            <small>Stock disponible: {producto.stock}</small>
            <p>{producto.desc}</p>
            
        </div>
    )
}

export default Item