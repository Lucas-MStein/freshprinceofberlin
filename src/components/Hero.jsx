import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaTwitch } from 'react-icons/fa';
import Logo from '../assets/freshprinceofberlin_logo.png';

const Hero = () => {
    return (
        <section id="hero" className="relative w-full h-screen">
            <img
                src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVybGlufGVufDB8fDB8fHww"
                alt="Berlin"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-4xl sm:text-6xl font-bold text-blue-400 drop-shadow-md">
                    Der Berliner, der das Internet zum Lachen bringt.
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-gray-100">
                    Leo aka freshprinceofberlin – bekannt für virale Comedy-Skits und Urban Culture.
                </p>
                <img
                    src={Logo}
                    alt="freshprinceofberlin Logo"
                    className="w-32 md:w-40 mb-6 mt-6 drop-shadow-lg"
                />
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                        href="#"
                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-pink-500 text-white
                                   hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
                    >
                        <FaInstagram/> Instagram
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white
                                   hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
                    >
                        <FaTiktok/> TikTok
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-600 text-white
                                   hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
                    >
                        <FaYoutube/> YouTube
                    </a>
                    <a
                        href="https://www.twitch.tv/leoausberlin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-600 text-white
                                  hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 text-sm"
                    >
                        <FaTwitch/> Twitch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;