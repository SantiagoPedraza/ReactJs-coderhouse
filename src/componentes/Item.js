import Contador from './ItemCount';
import './styles.css';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const Item = ({ producto }) => {

  return (
    <Card className="" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} className="img-producto"  />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
        <p>Precio: ${producto.precio}</p>
          <p>Categoria: {producto.categoria}</p>
        </Card.Text>
        <Link to={`/item/${producto.id}`} className="btn btn-primary " >Ver Más</Link>
        <Contador/>
      </Card.Body>
    </Card>
  );
}

export default Item