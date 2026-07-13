import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import AboutImage from '../assets/Leo15.webp';

const steckbrief = [
    { label: 'Name', value: 'Leo' },
    { label: 'Standort', value: 'Berlin' },
    { label: 'Content', value: 'Comedy, Skits & Reactions' },
    { label: 'Schwerpunkt', value: 'Alltag, Urban Culture, Community' },
];

const quotes = [
    { text: 'Wenn wir alle mehr wären wie Leo, wäre die Welt ein besserer Ort.', author: 'Mutter Theresa' },
    { text: 'Der Grund, warum ich mit Fitness angefangen habe.', author: 'Markus Rühl' },
    { text: 'Leo ist mein Lieblingsstreamer.', author: 'Kai Cenat' },
];

const About = () => {
    return (
        <section
            id="about"
            className="py-24 md:py-32 border-t border-brand-grey bg-brand-off text-brand-black"
            aria-labelledby="about-heading"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="lg:col-span-7"
                >
                    <span className="text-brand-red font-inter text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 block">
                        Wer steckt dahinter?
                    </span>
                    <h2
                        id="about-heading"
                        className="font-anton text-5xl sm:text-6xl md:text-[7rem] leading-[0.9] uppercase tracking-wide mb-10"
                    >
                        Über Leo
                    </h2>
                    <p className="font-inter text-lg md:text-2xl text-brand-grey font-medium leading-relaxed mb-10 md:mb-14 max-w-2xl">
                        Leo kombiniert authentischen Berliner Humor mit urbanem Style und hat sich mit viralen
                        Comedy-Skits auf Social Media eine starke Community aufgebaut. Seine Inhalte verbinden
                        Entertainment mit einem Gespür für den Zeitgeist.
                    </p>

                    <div className="border-2 border-brand-black p-6 sm:p-8 md:p-10 relative bg-white mb-12">
                        <div className="absolute -top-4 left-6 sm:left-8 bg-brand-off px-3 sm:px-4 font-anton text-lg sm:text-xl uppercase tracking-wider text-brand-red">
                            Steckbrief
                        </div>
                        <ul className="font-inter text-xs sm:text-sm md:text-base flex flex-col gap-4 sm:gap-5 font-bold uppercase tracking-widest">
                            {steckbrief.map((row, i) => (
                                <li
                                    key={row.label}
                                    className={`flex items-start gap-4 ${
                                        i < steckbrief.length - 1 ? 'border-b border-brand-black/10 pb-3 sm:pb-4' : ''
                                    }`}
                                >
                                    <span className="w-1/3 text-brand-grey/70">{row.label}</span>
                                    <span className="w-2/3">{row.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        {quotes.map((q) => (
                            <blockquote key={q.author} className="font-inter">
                                <p className="italic text-brand-grey text-base md:text-lg leading-relaxed">
                                    „{q.text}“
                                </p>
                                <footer className="mt-1 text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-red">
                                    — {q.author}
                                </footer>
                            </blockquote>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="lg:col-span-5 relative"
                >
                    <div className="aspect-[4/5] bg-brand-grey overflow-hidden relative">
                        <img
                            src={AboutImage}
                            alt="Leo Portrait"
                            loading="lazy"
                            className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="pointer-events-none absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-brand-off z-10 mix-blend-difference" />
                        <div className="pointer-events-none absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-brand-off z-10 mix-blend-difference" />
                    </div>

                    <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 md:-bottom-12 md:-left-12 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-brand-blue p-5 sm:p-6 md:p-8 flex flex-col justify-between text-brand-off shadow-2xl">
                        <span className="font-anton text-2xl sm:text-3xl md:text-4xl uppercase leading-[0.9]">
                            Creator<br />aus Berlin
                        </span>
                        <div className="flex justify-end">
                            <ArrowUpRight className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
