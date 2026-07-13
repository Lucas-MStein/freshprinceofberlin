import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import HeroImage from '../assets/Leo5.webp';

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-end pt-40 md:pt-48 pb-24 md:pb-32 px-6 md:px-12"
        >
            <div className="absolute inset-0 z-0">
                <img
                    src={HeroImage}
                    alt="Leo, Fresh Prince of Berlin, in urbaner Kulisse"
                    className="w-full h-full object-cover opacity-70"
                    loading="eager"
                    fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/10" />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-anton text-[3.75rem] sm:text-7xl md:text-[8rem] lg:text-[11rem] leading-[0.85] uppercase tracking-tight text-brand-off"
                >
                    Fresh Prince<br />
                    <span className="text-brand-yellow">Of Berlin</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 mt-12 md:mt-20"
                >
                    <p className="font-inter text-lg sm:text-xl md:text-2xl text-brand-off/90 max-w-md font-medium leading-relaxed border-l-4 border-brand-red pl-5 md:pl-8">
                        Comedy aus Berlin. Direkt, echt und für sehr viele Bildschirme.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#highlights"
                            className="bg-brand-off text-brand-black px-8 py-5 md:px-10 md:py-6 font-inter font-bold tracking-widest text-sm md:text-base uppercase hover:bg-brand-yellow transition-colors flex items-center justify-center gap-3"
                        >
                            Galerie ansehen <ArrowRight size={20} />
                        </a>
                        <a
                            href="#kontakt"
                            className="border-2 border-brand-off text-brand-off px-8 py-5 md:px-10 md:py-6 font-inter font-bold tracking-widest text-sm md:text-base uppercase hover:bg-brand-off hover:text-brand-black transition-colors flex items-center justify-center"
                        >
                            Business anfragen
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
