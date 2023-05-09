import { Footer } from '../components/Footer';
import { About } from '../components/homeComponents/AboutMeSection';
import { Contact } from '../components/homeComponents/ContactInfo';
import { Hero } from '../components/homeComponents/HeroSection';
import { Projects } from '../components/homeComponents/ProjectsSection';
import { Services } from '../components/homeComponents/ServicesSection';
import { Header } from './../components/Header';

export const HomeScreen = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header />
            <Hero />
            <About title={'About Me'} />
            <Services title={'Services'} />
            <Projects title={'Projects'} />
            {/* <Contact title={'Contact'} /> */}
            <Footer />
        </>
    );
};
