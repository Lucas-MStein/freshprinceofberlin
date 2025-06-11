import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white shadow-md z-50">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">freshprinceofberlin</h1>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 text-sm font-medium">
                    <li><a href="#hero" className="hover:text-pink-400 transition">Start</a></li>
                    <li><a href="#videos" className="hover:text-pink-400 transition">Highlights</a></li>
                    <li><a href="#about" className="hover:text-pink-400 transition">Über mich</a></li>
                    <li><a href="#kontakt" className="hover:text-pink-400 transition">Kontakt</a></li>
                </ul>

                {/* Mobile Menu Icon */}
                <div className="md:hidden z-50">
                    {menuOpen ? (
                        <FaTimes onClick={() => setMenuOpen(false)} className="text-2xl cursor-pointer" />
                    ) : (
                        <FaBars onClick={() => setMenuOpen(true)} className="text-2xl cursor-pointer" />
                    )}
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 text-lg font-medium z-40">
                    <li><a href="#hero" onClick={handleLinkClick} className="hover:text-pink-400 transition">Start</a></li>
                    <li><a href="#videos" onClick={handleLinkClick} className="hover:text-pink-400 transition">Highlights</a></li>
                    <li><a href="#about" onClick={handleLinkClick} className="hover:text-pink-400 transition">Über mich</a></li>
                    <li><a href="#kontakt" onClick={handleLinkClick} className="hover:text-pink-400 transition">Kontakt</a></li>
                </ul>
            )}
        </header>
    );
};

export default Header;