import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 py-10 text-center">
            <p className="mb-4">© 2024 Studio Tributario Amoroso. Tutti i diritti riservati.</p>
            <ul className="flex justify-center space-x-6">
                <li><a href="https://www.facebook.com" className="text-blue-700 hover:underline">Facebook</a></li>
                <li><a href="https://www.twitter.com" className="text-blue-700 hover:underline">Twitter</a></li>
                <li><a href="https://www.linkedin.com" className="text-blue-700 hover:underline">LinkedIn</a></li>
            </ul>
        </footer>
    );
}

export default Footer;
