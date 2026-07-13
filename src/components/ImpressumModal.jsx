import React from 'react';
import LegalModal, { LegalLabel } from './LegalModal';

const ImpressumModal = ({ isOpen, onClose }) => (
    <LegalModal
        isOpen={isOpen}
        onClose={onClose}
        title="Impressum"
        titleId="impressum-title"
    >
        <div>
            <LegalLabel>Angaben gemäß § 5 TMG</LegalLabel>
            <p>
                Lucas-Maurice Stein<br />
                Herrengarten 39<br />
                75365 Calw
            </p>
        </div>

        <div>
            <LegalLabel>Kontakt</LegalLabel>
            <p className="break-all">
                <a
                    href="mailto:lucasmauricestein@gmail.com"
                    className="text-brand-yellow hover:underline"
                >
                    lucasmauricestein@gmail.com
                </a>
            </p>
        </div>
    </LegalModal>
);

export default ImpressumModal;
