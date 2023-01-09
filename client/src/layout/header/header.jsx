
import React from 'react';
import '../../assets/styles/header.scss'
import '../../assets/styles/mystyles.scss'
import Logo from '../../assets/images/Logo.png'
import Gift from '../../assets/images/Gift.png'
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return (
        <header>
            <div>
                <nav className='container d-flex justify-content-between align-items-center'>
                    <div>
                        <Link to='#main'>
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className='nav-center d-flex justify-content-between align-items-center'>
                        <div>
                            <Link to='#service'>Услуги</Link>
                        </div>
                        <div>
                            <Link to='#portfolio'>Портфолио</Link>
                        </div>
                        <div>
                            <Link>О нас</Link>
                        </div>
                        <div>
                            <Link to='#contacts'>Контакты</Link>
                        </div>
                    </div>
                    <div className='nav-btn-audit'>
                        <img className='nav-btn-img' src={Gift} alt="Gift" />
                        Бесплатный аудит
                    </div>
                </nav>
            </div>
            <div className='scroll'>
                <Link to='#main'>
                ↑
                </Link>
            </div>
        </header>
    );
}

export default Header;