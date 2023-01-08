import '../../assets/styles/main.scss'
import Footer from "../footer/footer";
import FirstPage from '../../components/firstPage'
import Advertisement from '../../components/advertisement'
import Services from '../../components/services';
import OurProjects from '../../components/whatwedid';
import Request from '../../components/request';

const Main = () => {
    return (
        <>
            <main>
                <FirstPage />
                <Advertisement />
                <Services />
                <OurProjects />
                <Request />
            </main>
            <Footer />
        </>
    );
}

export default Main;