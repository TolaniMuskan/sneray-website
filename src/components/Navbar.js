import React, { useState } from 'react';

function Navbar()
{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-slate-900/90 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center fixed w-full top 0 z-50 border-b border-slate-700">
            <div className="text-xl font-bold tracking-wide">
                SneRay IT Solutions Pvt. Ltd.
            </div>

            <ul className="hidden md:flex gap-8 font-medium">
                <li><a href = "#home" className= "hover:text-blue-300 transition">Home</a></li>
                <li><a href = "#about" className= "hover:text-blue-300 transition">About</a></li>
                <li><a href = "#internships" className= "hover:text-blue-300 transition">Internships</a></li>
                <li><a href = "#services" className= "hover:text-blue-300 transition">Services</a></li>
                <li><a href = "#contact" className= "hover:text-blue-300 transition">Contact</a></li>
            </ul>

            <button
                className="md:hidden text-white text-2xl"
                onClick= {() => setIsOpen(!isOpen)}
            >
                ☰
            </button>

            {
                isOpen && 
                (
                    <ul className="absolute top-16 left-0 w-full bg-blue-900 flex flex-col items-center gap-4 py-4 md:hidden">
                        <li><a href = "#home" onClick={() => setIsOpen(false)}>Home</a></li>
                        <li><a href = "#about" onClick={() => setIsOpen(false)}>About</a></li>
                        <li><a href = "#internships" onClick={() => setIsOpen(false)}>Internships</a></li>
                        <li><a href = "#services" onClick={() => setIsOpen(false)}>Services</a></li>
                        <li><a href = "#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    </ul>

                )
            }
        </nav>
    );
}

export default Navbar;