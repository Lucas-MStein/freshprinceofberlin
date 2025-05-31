import React from 'react';
import TikTokEmbed from './TikTokEmbed';

const TikTokGallery = () => {
    const tiktoks = [
        'https://www.tiktok.com/@freshprinceofberlin/video/7497685163598531862?lang=de-DE',
        'https://www.tiktok.com/@freshprinceofberlin/video/7500531228639005974?lang=de-DE',
        'https://www.tiktok.com/@freshprinceofberlin/video/7505353538743143703?lang=de-DE'
    ];

    return (
        <section id="videos" className="bg-gray-900 py-16 px-6 md:px-12 text-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-sky-500">Highlights</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {tiktoks.map((url, idx) => (
                        <div key={idx} className="bg-black rounded-xl shadow-lg p-2">
                            <TikTokEmbed url={url} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TikTokGallery;