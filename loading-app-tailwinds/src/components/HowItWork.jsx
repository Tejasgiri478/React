import React from "react";
import milkShake from '../assets/images/milkShake.png'
import { FaIceCream, FaWeightHanging, FaHeart } from "react-icons/fa";

const HowItWork = () => {
    return (
        <section className="py-16 text-gray-900 text-center">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-8">
                {/* Left Side - Image */}
                <div className="flex justify-center">
                    <div className="relative">
                        <img src={milkShake} alt="Ice Cream" className="w-64 h-auto rounded-lg" />
                    </div>
                </div>

                {/* Right Side - Text */}
                <div className="text-left">
                    <h3 className="text-pink-500 font-bold text-lg">TRADITION AND LOVE</h3>
                    <h2 className="text-4xl font-extrabold text-yellow-600">HOW IT'S MADE?</h2>
                    <p className="mt-4 text-gray-700">
                        Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend erat at justo fringilla.
                    </p>
                    <p className="mt-2 text-gray-600">
                        Curabitur lacinia enim at ex blandit, vel pellentesque odio elementum. Mauris rhoncus orci in imperdiet placerat.
                    </p>
                    <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600">Read more →</button>
                </div>
            </div>

            {/* Bottom Section - Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 text-center">
                <div>
                    <FaIceCream className="text-5xl text-yellow-500 mx-auto" />
                    <h3 className="text-3xl font-extrabold text-yellow-600 mt-2">72l</h3>
                    <p className="text-gray-700">Aliquam ac dui vel dui vulputate consectetur. Mauris massa.</p>
                </div>
                <div>
                    <FaWeightHanging className="text-5xl text-yellow-500 mx-auto" />
                    <h3 className="text-3xl font-extrabold text-yellow-600 mt-2">16kg</h3>
                    <p className="text-gray-700">Aliquam ac dui vel dui vulputate consectetur. Mauris massa.</p>
                </div>
                <div>
                    <FaHeart className="text-5xl text-yellow-500 mx-auto" />
                    <h3 className="text-3xl font-extrabold text-yellow-600 mt-2">84</h3>
                    <p className="text-gray-700">Aliquam ac dui vel dui vulputate consectetur. Mauris massa.</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWork;