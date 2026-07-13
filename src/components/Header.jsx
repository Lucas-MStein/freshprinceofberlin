import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { nav } from '../data/siteConfig';

const useScrollSpy = () => {
    const [active, setActive] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            let current = '';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 160) {
                    current = section.getAttribute('id') || '';
                }
            });
            if (current) setActive(current);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return active;
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const activeSection = useScrollSpy();

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const close = () => setIsOpen(false);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-40 bg-brand-black/90 backdrop-blur-md border-b border-brand-grey">
                <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between font-inter text-xs md:text-sm font-bold uppercase tracking-widest text-brand-off">
                    <a
                        href="#hero"
                        aria-label="freshprinceofberlin – Startseite"
                        className="font-anton text-2xl tracking-wide flex items-center gap-2 relative z-50"
                    >
                        <span>FP.BLN</span>
                        <span className="hidden md:inline-block w-2 h-2 rounded-full bg-brand-red" />
                    </a>

                    <nav className="hidden lg:flex items-center gap-10" aria-label="Hauptnavigation">
                        {nav.map((link) => {
                            const id = link.href.substring(1);
                            const isActive = activeSection === id;
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`relative transition-colors duration-300 hover:text-brand-red ${
                                        isActive ? 'text-brand-red' : ''
                                    }`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-indicator"
                                            className="absolute -bottom-2 left-0 right-0 h-[2px] bg-brand-red"
                                        />
                                    )}
                                </a>
                            );
                        })}
                        <a
                            href="#kontakt"
                            className="bg-brand-off text-brand-black px-5 py-2 hover:bg-brand-red hover:text-brand-off transition-colors duration-300 flex items-center gap-2"
                        >
                            Business <ArrowUpRight size={16} />
                        </a>
                    </nav>

                    <button
                        type="button"
                        className="lg:hidden relative z-[60] text-brand-off p-2 -mr-2"
                        onClick={() => setIsOpen(true)}
                        aria-label="Menü öffnen"
                        aria-expanded={isOpen}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 bg-brand-black text-brand-off z-50 flex flex-col px-6 pt-24 pb-10 overflow-y-auto"
                    >
                        <button
                            type="button"
                            className="absolute top-6 right-6 z-[60] text-brand-off p-2"
                            onClick={close}
                            aria-label="Menü schließen"
                        >
                            <X size={32} />
                        </button>
                        <nav
                            className="flex flex-col gap-2 font-anton text-5xl sm:text-6xl uppercase tracking-tight mt-8"
                            aria-label="Hauptnavigation mobil"
                        >
                            {nav.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={close}
                                    className="hover:text-brand-red transition-colors flex items-center justify-between gap-4 border-b border-brand-grey py-5"
                                >
                                    <span>{link.label}</span>
                                    <ArrowUpRight size={32} />
                                </a>
                            ))}
                            <a
                                href="#kontakt"
                                onClick={close}
                                className="text-brand-yellow flex items-center justify-between gap-4 py-6"
                            >
                                <span>Business</span>
                                <ArrowUpRight size={40} />
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
