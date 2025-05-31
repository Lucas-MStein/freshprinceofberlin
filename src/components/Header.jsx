import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white shadow-md z-50">
            <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold">freshprinceofberlin</h1>
                <ul className="flex space-x-6 text-sm font-medium">
                    <li>
                        <a href="#hero" className="hover:text-pink-400 transition">Start</a>
                    </li>
                    <li>
                        <a href="#videos" className="hover:text-pink-400 transition">Highlights</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-pink-400 transition">Über mich</a>
                    </li>
                    <li>
                        <a href="#kontakt" className="hover:text-pink-400 transition">Kontakt</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;