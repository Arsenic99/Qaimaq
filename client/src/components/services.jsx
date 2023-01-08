import ServiceWebComputer from '../assets/images/ServiceWebComputer.png'
import ServiceWebComputerGray from '../assets/images/ServiceWebComputerGray.svg'
import ServiceAdv from '../assets/images/ServiceAdv.png'
import ServiceAdvGray from '../assets/images/ServiceAdvGray.png'
import ServiceDesignGray from '../assets/images/ServiceDesignGray.png'
import ServiceArrow from '../assets/images/ServiceArrow.svg'

import { useState } from "react";

const Services = () => {
    const [webhover, setWebHover] = useState(false)
    const [service, setService] = useState()
        const hover = (e) => {
            e.stopPropagation();
            setWebHover(true);
            if(e.target.classList[0] === 'web'){
                return setService(1)
            }
            if(e.target.classList[0] === 'adv'){
                return setService(2)
            }
            if(e.target.classList[0] === 'design'){
                return setService(3)
            }
        }
        const unhover = (e) => {
            setWebHover(false);
        }
    return (
        <section className="third-section">
            <h3>Услуги</h3>
            <div className="services">
                <div className="web service" onMouseOver={(e) => hover(e)} onMouseOut={(e) => unhover(e)}>
                    <h5>Сайт под ключ</h5>
                    <p>Разработаем современный сайт, с четким повествованием и привлекательным дизайном</p>
                    <div className="d-flex justify-content-between">
                        <img src={webhover && service === 1 ? ServiceWebComputer : ServiceWebComputerGray} alt="ServiceWebComputer" />
                    </div>
                    <span style={{ display: webhover && service === 1 ? "block" : "none" }}>
                        <img src={ServiceArrow} alt="" />
                    </span>
                </div>
                <div className="adv service" onMouseOver={(e) => hover(e)} onMouseOut={(e) => unhover(e)}>
                    <h5>Запуск рекламы</h5>
                    <p>Запустим контекстную/таргетированную рекламу, оптимизируем ее и создадим поток клиентов по лучшей цене</p>
                    <div className="d-flex justify-content-between">
                        <img src={webhover && service === 2 ? ServiceAdv : ServiceAdvGray} alt="ServiceAdvGoogle" />
                    </div>
                    <span style={{ display: webhover && service === 2 ? "block" : "none" }}>
                        <img src={ServiceArrow} alt="" />
                    </span>
                </div>
                <div className="design service" onMouseOver={(e) => hover(e)} onMouseOut={(e) => unhover(e)}>
                    <h5>Графический дизайн</h5>
                    <p>Разработаем фирменный стиль, презентации, рекламные баннеры, шаблоны для постов и многое другое</p>
                    <div className="service-design">
                        <img src={webhover && service === 3 ? ServiceDesignGray : ServiceDesignGray} alt="ServiceDesign1" />
                    </div>
                    <span style={{ display: webhover && service === 3 ? "block" : "none" }}>
                        <img src={ServiceArrow} alt="" />
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Services;