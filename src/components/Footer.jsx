import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ImpressumModal from './ImpressumModal';
import DatenschutzModal from './DatenschutzModal';
import { socials, nav } from '../data/siteConfig';

const Footer = () => {
    const [isImpressumOpen, setIsImpressumOpen] = useState(false);
    const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);
    const year = new Date().getFullYear();

    return (
        <footer className="bg-brand-black text-brand-off pt-24 md:pt-32 pb-8 px-6 md:px-12">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 md:gap-20 mb-20 md:mb-28">
                    <div className="max-w-xl">
                        <h2 className="font-anton text-4xl sm:text-5xl md:text-[5rem] uppercase tracking-wide mb-6 md:mb-8 leading-[0.9]">
                            Aus Berlin.<br />Im Internet.
                        </h2>
                        <p className="font-inter text-base text-brand-off/60 font-medium">
                            Comedy aus Berlin. Reactions, Skits und Streams — jederzeit erreichbar auf allen Plattformen.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 font-inter text-sm font-bold uppercase tracking-widest w-full lg:w-auto">
                        <div className="flex flex-col gap-5">
                            <span className="text-brand-red mb-2 border-b border-brand-grey pb-4">Navigation</span>
                            {nav.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="hover:text-brand-yellow transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a href="#kontakt" className="hover:text-brand-yellow transition-colors">
                                Business
                            </a>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span className="text-brand-red mb-2 border-b border-brand-grey pb-4">Socials</span>
                            {socials.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-brand-yellow transition-colors flex items-center gap-2"
                                >
                                    {s.name} <ArrowUpRight size={14} />
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col gap-5 col-span-2 md:col-span-1">
                            <span className="text-brand-red mb-2 border-b border-brand-grey pb-4">Legal</span>
                            <button
                                type="button"
                                onClick={() => setIsImpressumOpen(true)}
                                className="hover:text-brand-yellow transition-colors text-left"
                            >
                                Impressum
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsDatenschutzOpen(true)}
                                className="hover:text-brand-yellow transition-colors text-left"
                            >
                                Datenschutz
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-grey font-inter text-xs text-brand-off/50 uppercase tracking-widest gap-6 text-center md:text-left">
                    <p>© {year} freshprinceofberlin</p>
                    <a
                        href="#hero"
                        className="hover:text-brand-off transition-colors border border-brand-grey px-4 py-2 rounded-full flex items-center gap-2"
                    >
                        Back to Top <ArrowUpRight size={12} className="-rotate-45" />
                    </a>
                    <p>Erstellt in Berlin. Gesehen überall.</p>
                </div>
            </div>

            <ImpressumModal
                isOpen={isImpressumOpen}
                onClose={() => setIsImpressumOpen(false)}
            />
            <DatenschutzModal
                isOpen={isDatenschutzOpen}
                onClose={() => setIsDatenschutzOpen(false)}
            />
        </footer>
    );
};

export default Footer;
