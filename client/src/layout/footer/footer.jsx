import Logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'
import '../../assets/styles/footer.scss'
import whatsapp from '../../assets/images/whatsapp.svg'
import telegram from '../../assets/images/telegram.svg'
import instagram from '../../assets/images/instagram.svg'


const Footer = () => {
    return (
        <footer>
            <div>
                <nav className='container d-flex justify-content-between align-items-center'>
                    <div>
                        <Link to='/'>
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className='nav-center d-flex justify-content-between align-items-center'>
                        <div>
                            <Link to='/services'>Услуги</Link>
                        </div>
                        <div>
                            <Link to='/portfolio'>Портфолио</Link>
                        </div>
                        <div>
                            <Link to='/aboutus'>О нас</Link>
                        </div>
                        <div>
                            <Link to='/contacts'>Контакты</Link>
                        </div>
                    </div>
                    <div className='we-in-social'>
                        Мы с социальных сетях
                        <div className='social-link'>
                            <img src={telegram} alt="" />
                            <img src={instagram} alt="" />
                            <img src={whatsapp} alt="" />
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;