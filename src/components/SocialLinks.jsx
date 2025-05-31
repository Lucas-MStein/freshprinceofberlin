import React from 'react';
import { MdEmail } from 'react-icons/md';

const SocialLinks = () => {
    return (
        <section id="kontakt" className="bg-black text-white py-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-500">Kontakt & Kollaborationen</h2>
                <p className="text-gray-300 text-lg mb-8">
                    Für geschäftliche Anfragen, Kooperationen oder Pressekontakte schreib gerne eine E-Mail.
                </p>

                <div className="flex justify-center items-center gap-4 text-lg">
                    <MdEmail className="text-pink-500 text-2xl"/>
                    <a
                        href="mailto:business@freshprinceofberlin.de"
                        className="text-pink-400 hover:underline"
                    >
                        leobusinessrequests@gmail.com
                    </a>
                </div>

                <p className="mt-8 text-sm text-white">
                    Vielen Dank für deinen Besuch ✨
                </p>
            </div>
        </section>
    );
};

export default SocialLinks;