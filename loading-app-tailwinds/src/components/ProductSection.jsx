import React from "react";
import iceCreamImg from "../assets/images/our-card-one.png";
import iceCoffeeImg from "../assets/images/card-three-img.png";
import milkshakeImg from "../assets/images/milkshake.png";

const ProductSection = () => {
    return (
        <div className="bg-white py-16 text-gray-900 text-center">
            {/* Section Title */}
            <h3 className="text-pink-500 font-bold text-lg">100% NATURAL</h3>
            <h2 className="text-4xl font-extrabold text-yellow-500">PRODUCTS</h2>
            
            {/* Product Cards */}
            <div className="mt-10 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
                {/* Ice Cream Card */}
                <div className="rounded-lg p-6 flex flex-col items-center">
                    <div className="flex items-center justify-center -mt-20">
                        <img src={iceCreamImg} alt="Ice Cream" className="w-1/2" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold">ICE CREAM</h3>
                    <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius blandit.</p>
                </div>
                
                {/* Ice Coffee Card */}
                <div className="rounded-lg p-6 flex flex-col items-center">
                    <div className="flex items-center justify-center -mt-20">
                        <img src={iceCoffeeImg} alt="Ice Coffee" className="w-1/2" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold">ICE COFFEE</h3>
                    <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius blandit.</p>
                </div>
                
                {/* Milkshake Card */}
                <div className="rounded-lg p-6 flex flex-col items-center">
                    <div className="flex items-center justify-center -mt-20">
                        <img src={milkshakeImg} alt="Milkshake" className="w-1/2" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold">MILKSHAKES</h3>
                    <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius blandit.</p>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;

