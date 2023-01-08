import ServiceWebComputer from '../assets/images/ServiceWebComputer.png'
import ServiceWebComputerGray from '../assets/images/ServiceWebComputerGray.svg'
import ServiceAdv from '../assets/images/ServiceAdv.png'
import ServiceAdvGray from '../assets/images/ServiceAdvGray.png'
import ServiceDesignGray from '../assets/images/ServiceDesignGray.png'

import Service from './service'

const Services = () => {
    const services = [
        {id:1, title: 'Сайт под ключ', subtitle: 'Разработаем современный сайт, с четким повествованием и привлекательным дизайном', img: ServiceWebComputerGray, hoverImg: ServiceWebComputer},
        {id:2, title: 'Запуск рекламы', subtitle: 'Запустим контекстную/таргетированную рекламу, оптимизируем ее и создадим поток клиентов по лучшей цене', img: ServiceAdvGray, hoverImg: ServiceAdv},
        {id:3, title: 'Графический дизайн', subtitle: 'Разработаем фирменный стиль, презентации, рекламные баннеры, шаблоны для постов и многое другое', img: ServiceDesignGray, hoverImg: ServiceDesignGray},
    ]
    return (
        <section className="third-section" id='service'>
            <h3>Услуги</h3>
            <div className="services">
                {services.map(item=><Service key={item.id} service = {item}/>)}
            </div>
        </section>
    );
}

export default Services;