const Request = () => {
    return (
        <section className="fifth-section">
            <h3>Оставьте заявку</h3>
            <p>Мы свяжемся с вами, ответим на интересующие вопросы и подготовим коммерческое предложение</p>
            <div className="leave-request">
                <div className="request-services">
                    <h5>Услуги:</h5>
                    <div>
                        <span className="request-active">Разработка сайта</span>
                        <span>Продвижение и реклама</span>
                    </div>
                    <div>
                        <span>Графический дизайн</span>
                        <span>Другое</span>
                    </div>
                </div>
                <div className="request-budget">
                    <h5>Бюджет:</h5>
                    <div>
                        <span className="request-active">Ниже 100 тыс</span>
                        <span>100 - 200 тыс</span>
                    </div>
                    <div>
                        <span>200 - 500 тыс</span>
                        <span>От 500 тыс</span>
                    </div>

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