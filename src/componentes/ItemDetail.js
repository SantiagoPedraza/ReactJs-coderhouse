

const ItemDetail = ({item}) => {

    return (
        <div className="container my-5">
            <img alt={item.img}/>
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>
        </div>
    )
}

export default ItemDetail