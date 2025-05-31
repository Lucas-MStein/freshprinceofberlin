import React from 'react';

const About = () => {
    return (
        <section id="about" className="bg-[#0b0f1a] py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Bild von Leo */}
                <div className="md:w-1/2">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0ZCr8nHDQEHzpmdtmVyJgIJU_uY67ss3Yw&s"
                        alt="Leo"
                        className="rounded-xl shadow-xl object-cover w-full h-auto"
                    />
                </div>

                {/* Textbereich */}
                <div className="md:w-1/2 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-500">Über mich</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                        Leo kombiniert authentischen Berliner Humor mit urbanem Style und
                        hat sich mit seinen viralen Comedy-Skits auf Social Media eine starke Community aufgebaut.
                        Seine Inhalte verbinden Entertainment mit einem Gespür für den Zeitgeist.
                    </p>
                    <p className="text-gray-400 italic">
                        „Lachen ist die Sprache, die jeder versteht.“ — Leo
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;