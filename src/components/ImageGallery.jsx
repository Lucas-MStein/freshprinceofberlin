import React from 'react';
import { motion } from 'motion/react';
import leo8 from '../assets/gallery/Leo8.webp';
import leo3 from '../assets/gallery/Leo3.webp';
import leo11 from '../assets/gallery/Leo11.webp';

const images = [
    { src: leo8, alt: 'Leo Portrait Highlight 1' },
    { src: leo3, alt: 'Leo Portrait Highlight 2' },
    { src: leo11, alt: 'Leo Portrait Highlight 3' },
];

const ImageGallery = () => {
    return (
        <section
            id="highlights"
            className="py-24 md:py-32 px-6 md:px-12 bg-brand-black"
            aria-labelledby="gallery-heading"
        >
            <div className="max-w-[1440px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-14 md:mb-20"
                >
                    <span className="text-brand-red font-inter text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                        Ausgewählte Aufnahmen
                    </span>
                    <h2
                        id="gallery-heading"
                        className="font-anton text-5xl sm:text-6xl md:text-[5.5rem] leading-[0.9] uppercase tracking-wide text-brand-off"
                    >
                        Gallery
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:col-span-7 group relative"
                    >
                        <div className="relative aspect-[3/4] bg-brand-grey overflow-hidden">
                            <img
                                src={images[0].src}
                                alt={images[0].alt}
                                loading="lazy"
                                className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </motion.div>

                    <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
                        {images.slice(1).map((image, idx) => (
                            <motion.div
                                key={image.src}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: idx * 0.15 }}
                                className="group relative aspect-[4/3] lg:flex-1 bg-brand-grey overflow-hidden"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                    className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageGallery;
