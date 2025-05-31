import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center text-sm text-gray-500 py-10 border-t border-gray-700 mt-16">
            <p>
                &copy; {new Date().getFullYear()} <span className="text-white font-medium">freshprinceofberlin</span>. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-gray-600">
                Berlin • Urban Culture • Comedy Content
            </p>
        </footer>
    );
};

export default Footer;