import { FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
    return (
        <footer id="contact" className="scroll-mt-24 bg-[#0B0B0B] text-white py-10 px-6 border-t border-gray-700">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold">
                        SneRay IT Solutions Pvt. Ltd
                    </h2>
                    <p className="text-gray-400 mt-2">
                        Email:{" "}
                        <a href="mailto:contact@SneRay.com"
                        className="text-blue-400 hover:underline">
                            hr@snerayitsolution.com
                        </a>
                        </p>
                        <p className="text-gray-400 mt-1">
                            Phone:7517984316
                            </p>
                            <p className="text-gray-400 mt-1">
                                Address: B4, Sheikh, Safa Complex, 2, Waghmare Rd, Shankar Kalat Nagar, Wakad, Pune, Pimpri-Chinchwad, Maharashtra 411057
                            </p>
                            <div className="flex gap-4 mt-3 text-xl">
                                <a href="https://www.instagram.com/snerayitsolutions/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="cursor-pointer hover:text-pink-500"/>
                                </a>
                                <a href="https://www.linkedin.com/company/sneray-it-solutions-pvt-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="cursor-pointer hover:text-blue-400"/>
                                </a>
                            </div>
                            </div>
                            <div className="w-full md:w-1/3">
                            <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
                            />
                            <textarea
                            placeholder="Enter your message"
                            rows="4"
                            className="w-full px-4 py-2 mt-2 rounded-md text-black focus:outline-none"
                            />
                            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600">
                                Send
                                </button>
                                </div>

                                </div>
                                <div className="text-center text-gray-400 mt-4">
                                    &copy; 2026 SneRay IT Solutions Pvt. Ltd. All Rights Reserved.
                                    </div>
                                    </footer>
    );
}


export default Footer;

