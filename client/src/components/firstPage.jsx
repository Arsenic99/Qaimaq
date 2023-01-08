import Header from "../layout/header/header";
import Briefcase from '../assets/images/Briefcase.png'
import Arrow from '../assets/images/ArrowRight.svg'
import Img1 from '../assets/images/FirstSectionFooter1.png'
import Img2 from '../assets/images/FirstSectionFooter2.png'
import Img3 from '../assets/images/FirstSectionFooter3.png'
import Img4 from '../assets/images/FirstSectionFooter4.png'

const FirstPage = () => {
    return (
        <section className="first-section">
            <Header />
            <h1 className="title">Разрабатываем уникальные сайты и запускаем рекламу</h1>
            <p className="subtitle">С крутым дизайном и погружением в ваш бизнес, создавая постоянный поток клиентов</p>
            <div className="firstsection-btn">
                <img src={Briefcase} alt="Briefcase" />
                <span className="btn-text">Начать новый проект вместе с нами</span>
                <img src={Arrow} alt="Arrow Right" />
            </div>
            <div className="d-flex justify-content-center">
                <img className="firstsection-img" src={Img1} alt="Img1" />
                <img className="firstsection-img" src={Img2} alt="Img2" />
                <img className="firstsection-img" src={Img3} alt="Img3" />
                <img className="firstsection-img" src={Img4} alt="Img4" />
            </div>
        </section>
    );
}

export default FirstPage;