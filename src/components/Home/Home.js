import React from 'react';
import Accomplish from '../Accomplish/Accomplish';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import FunFacts from '../FunFacts/FunFacts';
import Projects from '../Projects/Projects';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Accomplish />
            <Projects />
            <FunFacts />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;