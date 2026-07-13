import React from 'react';
import { motion } from 'motion/react';
import { Mail, Play, MapPin } from 'lucide-react';
import { FaTiktok, FaInstagram } from 'react-icons/fa';
import { contact } from '../data/siteConfig';

const stats = [
    { value: '362.8K', label: 'TikTok', icon: FaTiktok, accent: 'text-brand-yellow' },
    { value: '58.3K', label: 'Instagram', icon: FaInstagram, accent: 'text-brand-off' },
    { value: '7.5M', label: 'Bestes Video', icon: Play, accent: 'text-brand-off' },
    { value: 'DACH', label: 'Zielgruppe', icon: MapPin, accent: 'text-brand-yellow' },
];

const SocialLinks = () => {
    return (
        <section
            id="kontakt"
            className="py-24 md:py-32 bg-brand-red text-brand-off px-6 md:px-12"
            aria-labelledby="business-heading"
        >
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="inline-block bg-brand-black text-brand-off px-3 py-1 font-inter text-xs font-bold tracking-widest uppercase mb-8">
                        Business & Kollaborationen
                    </div>
                    <h2
                        id="business-heading"
                        className="font-anton text-5xl sm:text-6xl md:text-[7rem] uppercase tracking-tight mb-8 md:mb-10 leading-[0.85]"
                    >
                        Let&apos;s Work<br />Together
                    </h2>
                    <p className="font-inter text-lg md:text-2xl font-medium leading-relaxed max-w-lg mb-10 md:mb-12">
                        Für Kampagnen, Brand Integrations, Events und langfristige Partnerschaften geht die
                        Business-Anfrage direkt an das Postfach.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href={`mailto:${contact.business}`}
                            className="bg-brand-black text-brand-off px-7 py-5 md:px-8 font-inter font-bold tracking-widest text-sm uppercase hover:bg-brand-yellow hover:text-brand-black transition-colors flex items-center justify-center gap-3"
                        >
                            Business anfragen <Mail size={18} />
                        </a>
                        <a
                            href={`mailto:${contact.business}`}
                            className="font-inter text-sm md:text-base font-medium underline underline-offset-4 self-center break-all"
                        >
                            {contact.business}
                        </a>
                    </div>
                </motion.div>

                <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    aria-label="Reichweite und Kennzahlen"
                >
                    {stats.map((s) => {
                        const Icon = s.icon;
                        return (
                            <li
                                key={s.label}
                                className="relative bg-brand-black p-6 md:p-8 flex flex-col justify-between min-h-[10rem] md:min-h-[12rem] overflow-hidden"
                            >
                                <Icon
                                    className={`${s.accent} w-6 h-6 md:w-7 md:h-7`}
                                    aria-hidden="true"
                                />
                                <div className="mt-6">
                                    <div
                                        className={`font-anton text-5xl sm:text-6xl md:text-[4.5rem] leading-none uppercase tracking-tight ${s.accent}`}
                                    >
                                        {s.value}
                                    </div>
                                    <div className="font-inter text-xs md:text-sm font-bold uppercase tracking-widest opacity-80 mt-3">
                                        {s.label}
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </motion.ul>
            </div>
        </section>
    );
};

export default SocialLinks;
