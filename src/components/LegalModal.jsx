import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const LegalModal = ({ isOpen, onClose, title, titleId, children }) => {
    useEffect(() => {
        if (!isOpen) return undefined;
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-0 z-[70] flex items-start md:items-center justify-center bg-brand-black/85 backdrop-blur-sm px-4 py-10 overflow-y-auto"
            onClick={onClose}
        >
            <div
                className="relative bg-brand-black text-brand-off border border-brand-grey shadow-2xl p-8 md:p-10 max-w-xl w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-brand-off hover:text-brand-red transition-colors"
                    aria-label={`${title} schließen`}
                >
                    <X size={22} />
                </button>

                <h2
                    id={titleId}
                    className="font-anton text-3xl md:text-4xl uppercase tracking-wide mb-8 text-brand-off pr-10"
                >
                    {title}
                </h2>

                <div className="font-inter text-base md:text-lg leading-relaxed text-brand-off/90 space-y-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const LegalLabel = ({ children }) => (
    <p className="font-inter text-xs font-bold uppercase tracking-widest text-brand-off/50 mb-2">
        {children}
    </p>
);

export default LegalModal;
