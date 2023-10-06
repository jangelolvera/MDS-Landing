import Carousel from 'react-bootstrap/Carousel';
import barrena from '../Images/barrena.jpg';
import barco from '../Images/barco.jpg';
import workers from '../Images/workers.png';
import pozo from '../Images/pozo.jpg';
import '../Styles/AcercaDe.css';

export const AcercaDe = () => {
  return (

    <div className="slider">

      <Carousel fade>
        <Carousel.Item>
          <img className="slideImgs" src={barrena} alt="First slide" />
          <Carousel.Caption>
            <h3 className="captionSlide">Contamos con una gran variedad tecnologías de alto desempeño, disponibilidad de diferentes 
              tipos de herramientas y proveedores que se adaptan a las necesidades del cliente.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slideImgs" src={barco} alt="First slide" />
          <Carousel.Caption>
            <h3 className="captionSlide">Contamos con un sistema de logística personalizado a las operaciones, minimizando los 
            procedimientos administrativos o burocráticos que pudieran hacer más lenta la adquisición de alguna herramienta, personal o equipo.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slideImgs" src={workers} alt="First slide" />
          <Carousel.Caption>
            <h3 className="captionSlide">Coordinación en sitio y con  el cliente con personal en oficina
             con más de 15 años de experiencia en campo.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slideImgs" src={pozo} alt="First slide" />
          <Carousel.Caption>
            <h3 className="captionSlide">Disponibilidad de todas las herramientas en sitio: 3 sets de 
            herramientas para la perforación de cada etapa.</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>

  );
};
