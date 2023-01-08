import { useState } from "react";
import RequestService from "./requestservice";

const RequestServices = [
    {id:1, service: 'Разработка сайта'},
    {id:2, service: 'Продвижение и реклама'},
    {id:3, service: 'Графический дизайн'},
    {id:4, service: 'Другое'},
];
const RequestPrice = [
    {id:1, service: 'Ниже 100 тыс'},
    {id:2, service: '100 - 200 тыс'},
    {id:3, service: '200 - 500 тыс'},
    {id:4, service: 'От 500 тыс'},
];
const Request = () => {
    const [activeService, setActiveService] = useState(0);
    const setService = (e) => {
        setActiveService(e);
    }
    const [activePrice, setActivePrice] = useState(0);
    const setPrice = (e) => {
        setActivePrice(e);
    }
    return (
        <section className="fifth-section" id="contacts">
            <h3>Оставьте заявку</h3>
            <p>Мы свяжемся с вами, ответим на интересующие вопросы и подготовим коммерческое предложение</p>
            <div className="leave-request">
                <div className="request-services">
                    <h5>Услуги:</h5>
                    <RequestService services={RequestServices} active={activeService} setActive={setService}/>
                </div>
                <div className="request-budget">
                    <h5>Бюджет:</h5>
                    <RequestService services={RequestPrice} active={activePrice} setActive={setPrice}/>
                </div>
                <div className="request-contacts">
                    <h5>Контакты:</h5>
                    <input type="text" placeholder="Ваше имя" />
                    <input type="tel" placeholder="Ваш телефон" />
                    <button>Оставить заявку →</button>
                </div>
            </div>
        </section>
    );
}

export default Request;