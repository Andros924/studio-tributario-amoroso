import React from 'react';

const Navbar = () => {
    return (
        <header className="bg-blue-700 text-white p-5 flex justify-between items-center">
            <div className="text-2xl font-bold">Studio Tributario Amoroso</div>
            <nav>
                <ul className="flex space-x-6">
                    <li><a href="#services" className="hover:underline">Servizi</a></li>
                    <li><a href="#about" className="hover:underline">Chi Siamo</a></li>
                    <li><a href="#blog" className="hover:underline">Blog</a></li>
                    <li><a href="#contact" className="hover:underline">Contatti</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
