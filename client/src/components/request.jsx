import { useState } from "react";
import RequestService from "./requestservice";

const Request = (props) => {
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
            {console.log(props)}
            <h3>Оставьте заявку</h3>
            <p>Мы свяжемся с вами, ответим на интересующие вопросы и подготовим коммерческое предложение</p>
            <div className="leave-request">
                <div className="request-services">
                    <h5>Услуги:</h5>
                    <RequestService services={props.service} active={activeService} setActive={setService}/>
                </div>
                <div className="request-budget">
                    <h5>Бюджет:</h5>
                    <RequestService services={props.price} active={activePrice} setActive={setPrice}/>
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