import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import WhyUs from './sections/WhyUs';
import Process from './sections/Process';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import CTA from './sections/CTA';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <WhyUs />
                <TechStack />
                <Projects />
                <Process />
                <Contact />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}

export default App;
