import { Link } from 'react-router-dom'
import React from 'react';
import '../../assets/styles/header.scss'
import '../../assets/styles/mystyles.scss'
import Logo from '../../assets/images/Logo.png'
import Gift from '../../assets/images/Gift.png'

const Header = () => {
    return (
        <header>
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
                    <div className='nav-btn-audit'>
                        <img className='nav-btn-img' src={Gift} alt="Gift" />
                        Бесплатный аудит
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;