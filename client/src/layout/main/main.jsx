import '../../assets/styles/main.scss'
import Footer from "../footer/footer";
import FirstPage from '../../components/firstPage'
import Advertisement from '../../components/advertisement'
import OurProjects from '../../components/whatwedid';
import {ServicesContainer} from '../../components/servicesContainer';
import { RequestContainer } from '../../components/requestContainer';

const Main = () => {
    return (
        <>
            <main id='main'>
                <FirstPage />
                <Advertisement />
                <ServicesContainer />
                <OurProjects />
                <RequestContainer />
            </main>
            <Footer />
        </>
    );
}

export default Main;