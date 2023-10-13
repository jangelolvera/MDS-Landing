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
                <a href="https://tutsplus.com">
                    <img src={Palma}/>
                </a>

  
                <h1>Alejandro Palma</h1>

                <h2>Gerente de país</h2>

            </header>

            <div className="profile-bio">

                <p>Terence is an avid reader of science fiction, especially anything to do with aliens and tweed jackets. Most weekends, he can be found cataloguing his collection of rodent skeletons.</p>

            </div>

            <ul className="profile-social-links">
  
                <li>
                    <a href="https://twitter.com/tutsplus">
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
                <a href="https://tutsplus.com">
                    <img src={Olvera}/>
                </a>

  
                <h1>Jesús Olvera</h1>

                <h2>Gerente de operaciones</h2>

            </header>

            <div className="profile-bio">

                <p>Terence is an avid reader of science fiction, especially anything to do with aliens and tweed jackets. Most weekends, he can be found cataloguing his collection of rodent skeletons.</p>

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
