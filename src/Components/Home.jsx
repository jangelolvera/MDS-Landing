import '../Styles/Home.css';
import backg from '../Images/backImg.jpg';

export const Home = () => {
  return (
    <>
       <div className='bg-image'>

        <p className='about'>
          Expertos en perforación direccional, sistemas de medición MWD,
          LWD, motores de fondo y equipos rotatorios de última generación.
        </p>

        <button type="button" className="btn btn-primary"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
          Custom button
        </button>

       </div>
    </>
  )
}
