import WhatWeDid from '../assets/images/whatwedid.png'
import WhatWeDid1 from '../assets/images/whatwedid1.png'
import WhatWeDid2 from '../assets/images/whatwedid2.png'

const OurProjects = () => {
    return (
        <section className="forth-section" id='portfolio'>
            <h3>Что мы уже сделали</h3>
            <div>
                <div className="d-grid whatwedid">
                    <div className="whatwedid-heading">
                        <h5>Derzhava IT</h5>
                        <p>Брендбук / UX / UI / Разработка</p>
                    </div>
                    <div className="whatwedid-tag">
                        <span>Образовательная</span>
                        <span>События</span>
                    </div>
                    <div className="whatwedid-img">
                        <img src={WhatWeDid} alt="WhatWeDid" />
                    </div>
                    <div className="whatwedid-btn">
                        <span>Изучить кейс →</span>
                    </div>
                </div>
                <div className="d-grid whatwedid">
                    <div className="whatwedid-heading">
                        <h5>Digital Regata</h5>
                        <p>Брендбук / UX / UI / Разработка</p>
                    </div>
                    <div className="whatwedid-tag">
                        <span>Мероприятия</span>
                    </div>
                    <div className="whatwedid-img">
                        <img src={WhatWeDid1} alt="WhatWeDid1" />
                    </div>
                    <div className="whatwedid-btn">
                        <span>Изучить кейс →</span>
                    </div>
                </div>
                <div className="d-grid whatwedid">
                    <div className="whatwedid-heading">
                        <h5>YARP</h5>
                        <p>Брендбук / UX / UI / Разработка</p>
                    </div>
                    <div className="whatwedid-tag">
                        <span>Разработка</span>
                        <span>Аутстафф</span>
                    </div>
                    <div className="whatwedid-img">
                        <img src={WhatWeDid2} alt="WhatWeDid2" />
                    </div>
                    <div className="whatwedid-btn">
                        <span>Изучить кейс →</span>
                    </div>
                </div>
            </div>
            <div className="yourproject d-flex justify-content-between align-items-center">
                <div>Место для вашего будущего проекта</div>
                <div>Начать работу →</div>
            </div>
        </section>
    );
}

export default OurProjects;