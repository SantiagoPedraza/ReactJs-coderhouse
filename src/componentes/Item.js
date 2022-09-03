import Contador from './ItemCount';
import './styles.css';
import Button from 'react-bootstrap/Button';
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
        <Button variant="primary">Ver Más</Button>
        <Contador/>
      </Card.Body>
    </Card>
  );
}

export default Item