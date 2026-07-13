import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { socials } from '../data/siteConfig';

const Platforms = () => {
    return (
        <section
            id="platforms"
            className="relative py-20 md:py-24 border-y border-brand-grey overflow-hidden bg-brand-black"
            aria-labelledby="platforms-heading"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12 md:mb-16">
                <h2
                    id="platforms-heading"
                    className="font-anton text-4xl md:text-6xl uppercase tracking-wide text-brand-off"
                >
                    Auf mehreren<br />Bildschirmen zu Hause
                </h2>
            </div>

            <div className="relative flex overflow-hidden">
                <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ repeat: Infinity, ease: 'linear', duration: 28 }}
                    className="flex whitespace-nowrap will-change-transform"
                >
                    {[0, 1].map((copy) => (
                        <div key={copy} className="flex items-center gap-10 md:gap-16 px-6 md:px-8" aria-hidden={copy === 1}>
                            {socials.map((platform) => (
                                <a
                                    key={`${copy}-${platform.name}`}
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 md:gap-6 text-brand-grey hover:text-brand-off transition-colors duration-300"
                                >
                                    <span className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] uppercase tracking-tighter">
                                        {platform.name}
                                    </span>
                                    <ArrowUpRight className="opacity-60 shrink-0 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                                </a>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Platforms;
