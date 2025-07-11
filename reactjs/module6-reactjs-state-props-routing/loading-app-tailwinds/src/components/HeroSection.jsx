import React from "react";
import banner1 from "../assets/images/banner-pink-cone.png";
import banner2 from "../assets/images/banner-big-cone.png";

const HeroSection = () => (
  <div className="h-screen bg-white text-gray-900 flex items-center justify-center px-4">
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
      {/* Left Section - Text and Small Ice Cream Image */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold text-yellow-500">
          ICE CREAM <br /> MADE WITH
        </h1>
        <h2 className="text-6xl font-extrabold text-red-600 mt-2">PASSION</h2>
        <div className="mt-6 flex space-x-4">
          <button className="bg-yellow-300 text-black px-6 py-3 rounded-4xl text-lg">
            Products &gt;
          </button>
          <button className="bg-yellow-300 text-black px-6 py-3 rounded-4xl text-lg">
            How it’s made? &gt;
          </button>
        </div>
        <div className="mt-6 flex justify-center md:justify-start">
          <img src={banner1} alt="Pink Cone Ice Cream" className="w-48" />
          <p>
            Lorem ipsum dolor sit <br /> amet enim.Etiam malesuada <br /> elit lectus felis, 
            malesuada <br />dolor ultricies. Curabitur ligula.
          </p>
        </div>
      </div>

      {/* Center Section - Big Ice Cream Image */}
      <div className="md:w-1/3 flex justify-center">
        <img src={banner2} alt="Big Cone Ice Cream" className="w-60 h-110" />
      </div>

      {/* Right Section - Cafe and Food Truck Numbers */}
      <div className="md:w-1/6 text-center md:text-right">
        <div>
          <p className="text-6xl font-bold text-red-600">16</p>
          <p className="text-xl">cafes</p>
        </div>
        <div className="mt-4">
          <p className="text-6xl font-bold text-red-600">23</p>
          <p className="text-xl">food trucks</p>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
