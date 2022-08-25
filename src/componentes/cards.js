import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const GridExample = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img src="/img/al1.jpg" />
            <Card.Body>
              <Card.Title>Los mejores vodkas</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        
      ))}
      <Col>
          <Card>
            <Card.Img src="/img/al2.jpg" />
            <Card.Body>
              <Card.Title>Los gins mas exclusivos</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src="/img/al3.jpg" />
            <Card.Body>
              <Card.Title>Los whiskys mas deliciosos</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src="/img/licores.jpg" />
            <Card.Body>
              <Card.Title>Entre otra gran variedad</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
    </Row>
    
  );
}

export default GridExample;