import React from 'react';
import LegalModal, { LegalLabel } from './LegalModal';

const DatenschutzModal = ({ isOpen, onClose }) => (
    <LegalModal
        isOpen={isOpen}
        onClose={onClose}
        title="Datenschutzerklärung"
        titleId="datenschutz-title"
    >
        <div>
            <LegalLabel>Verantwortlicher im Sinne der DSGVO</LegalLabel>
            <p>Lucas-Maurice Stein</p>
            <p className="break-all">
                E-Mail:{' '}
                <a
                    href="mailto:lucasmauricestein@gmail.com"
                    className="text-brand-yellow hover:underline"
                >
                    lucasmauricestein@gmail.com
                </a>
            </p>
        </div>

        <p>
            Diese Website dient ausschließlich der Information. Es werden keine personenbezogenen
            Daten aktiv erhoben.
        </p>

        <p>
            Beim Zugriff auf diese Website werden durch den Hosting-Anbieter (Vercel) technisch
            notwendige Zugriffsdaten (z.&nbsp;B. IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs)
            verarbeitet, um den sicheren Betrieb der Website zu gewährleisten.
        </p>

        <p className="font-inter text-xs font-bold uppercase tracking-widest text-brand-off/50 pt-2">
            Es werden keine Cookies zu Analyse- oder Marketingzwecken eingesetzt.
        </p>
    </LegalModal>
);

export default DatenschutzModal;
