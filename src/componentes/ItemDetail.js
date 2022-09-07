import './styles.css';
import Contador from './ItemCount';


const ItemDetail = ({item}) => {

    return (
        <div className="container container-details">
            <img alt={item.img} className="img-detail"/>
            <div className='description'>
            <h3>{item.nombre} </h3>
            <p>Descripcion: {item.desc}</p>
            <p>Categoria: {item.categoria}</p>
            <h4>Precio: ${item.precio}</h4>
            <Contador/>
            </div>
        </div>
    )
}

export default ItemDetail