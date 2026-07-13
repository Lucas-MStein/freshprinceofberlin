import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Platforms from './components/Platforms';
import ImageGallery from './components/ImageGallery';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-brand-black text-brand-off font-inter antialiased overflow-x-hidden">
            <Header />
            <main>
                <Hero />
                <Platforms />
                <ImageGallery />
                <About />
                <SocialLinks />
            </main>
            <Footer />
        </div>
    );
}

export default App;
