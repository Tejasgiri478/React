import React from "react";
import { FaTwitter, FaFacebookF, FaSkype } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white py-10 text-gray-900 text-center">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Left Side Text */}
                <div className="text-left">
                    <h3 className="text-pink-500 font-bold text-lg">HOMEMADE ICE CREAM MADE</h3>
                    <h2 className="text-4xl font-extrabold text-red-600">WITH PASSION</h2>
                </div>
                
                {/* Right Side Contact and Icons */}
                <div className="text-right">
                    <p className="text-gray-700">Feel free to contact <span className="text-red-500 font-bold">+61(O) 383 766 284</span></p>
                    <div className="flex justify-end space-x-4 mt-3">
                        <FaTwitter className="text-pink-400 text-2xl cursor-pointer" />
                        <FaFacebookF className="text-pink-400 text-2xl cursor-pointer" />
                        <FaSkype className="text-pink-400 text-2xl cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="mt-6 border-t pt-4 text-gray-500 text-sm">
                &copy; 2024 Betheme by <span className="text-pink-500">Muffin group</span> | All Rights Reserved | Powered by <span className="text-pink-500">All Rights Reserved | Powered by</span>
            </div>
        </footer>
    );
};

export default Footer;