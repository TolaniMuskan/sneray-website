import React from 'react';

function Hero()
{
    return (
        <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 flex items-center justify-center pt-20">
            <div className="text-center px-6 max-w-4xl mx-auto">

                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                    Internship Opportunites for <span className="text-blue-300">B.Tech & MBA Students</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    SneRay IT Solutions Pvt. Ltd. provides Industry-Oriented Internships, Live Projects Exposure, Skill Development Programs, and Professional Guidance to help students become Corporate-Ready and Industry-Ready.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a href="#internships" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-lg transition duration-300">
                        Apply For Internship
                    </a>

                    <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg transition duration-300">
                        Explore IT Services
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Hero;