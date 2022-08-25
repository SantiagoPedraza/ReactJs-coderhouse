import Carousel from 'react-bootstrap/Carousel';
import './navstyle.css';




const IndividualIntervalsExample = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/img/vino1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Los mejores vinos de la region</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/img/vino4.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>De todas las variedades</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/vino3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Los mejores momentos</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;