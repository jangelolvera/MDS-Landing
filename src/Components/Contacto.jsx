import '../Styles/Contacto.css';
import Palma from '../Images/alexPalma.png';
import Olvera from '../Images/olvera.jpg';
import linkedIn from '../Images/linkedin.png';
import MailLogo from '../Images/mail.png';
import Celular from '../Images/llamada.png';


export const Contacto = () => {
  return (
    <div id='contactBox'>

        <div id='dudaTxt'>
            <h3>¿Tienes alguna duda? </h3>
            <h2>¡Contactanos!</h2>
        </div>


        <aside className="profile-card">

            <header>
                <a href="https://www.linkedin.com/in/arturo-alejandro/">
                    <img src={Palma}/>
                </a>

  
                <h1>Alejandro Palma</h1>

                <h2>Gerente de país</h2>

            </header>

            <div className="profile-bio">

                <p>
                    20 años Experiencia en puestos directivos del ramo energético para diversas empresas internacionales.
                </p>

            </div>

            <ul className="profile-social-links">
  
                <li>
                    <a href="https://www.linkedin.com/in/arturo-alejandro/">
                        <img src={linkedIn} />
                    </a>
                </li>

                <li>
                    <a href="mailto: alejandro.palma@mdrills.com">
                        <img src={MailLogo}/>
                    </a>
                </li>

                <li>
                    <a href="tel:527821689698">
                        <img src={Celular}/>
                    </a>
                </li>
            </ul>

        </aside>

        <aside className="profile-card">

            <header>
                <a href="https://www.linkedin.com/in/jjolveram/">
                    <img src={Olvera}/>
                </a>

  
                <h1>Jesús Olvera</h1>

                <h2>Gerente de operaciones</h2>

            </header>

            <div className="profile-bio">

                <p>
                20 años de experiencia en perforación direccional en México, Sudamérica y E.U. Trabajando para empresas globales como, 
                Schlumberger, Baker Hughes y Halliburton.
                </p>

            </div>

            <ul className="profile-social-links">
  
                <li>
                    <a href="https://www.linkedin.com/in/jjolveram/">
                        <img src={linkedIn} />
                    </a>
                </li>

                <li>
                    <a href="mailto:jesus.olvera2@mdrills.com">
                        <img src={MailLogo}/>
                    </a>
                </li>

                <li>
                    <a href="tel:527737364394">
                        <img src={Celular}/>
                    </a>
                </li>
            </ul>

        </aside>
    
    </div>
  )
}
