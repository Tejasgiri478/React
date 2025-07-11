import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/main-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // New state for vertical expansion

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    setIsExpanded(!isExpanded); // Toggle vertical expansion
  };

  return (
    <nav className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="" className="h-8 sm:h-10" />
        <button
          onClick={toggleNavbar} // Updated to use the new toggle function
          className="ml-auto md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      <ul className={`${isOpen ? 'block' : 'hidden'} ${isExpanded ? 'h-auto' : 'h-0'} w-full md:flex md:w-auto md:space-x-6 mt-4 md:mt-0 transition-all duration-300`}>
        <li className="py-2 md:py-0">
          <Link to="/" className="block text-gray-600 hover:text-red-500">
            Home
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link to="/HowItsMade" className="block text-gray-600 hover:text-red-500">
            How it&apos;s made?
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link to="/about" className="block text-gray-600 hover:text-red-500">
            About us
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link to="/products" className="block text-gray-600 hover:text-red-500">
            Our products
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link to="/contact" className="block text-gray-600 hover:text-red-500">
            Contact
          </Link>
        </li>
      </ul>

      <a
        href="#_"
        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-yellow-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group hidden md:inline-flex"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-yellow-500-500 transition-all duration-300 transform group-hover:translate-x-full ease">
          Buy now
        </span>
        <span className="relative invisible">Buy now</span>
      </a>
    </nav>
  );
};

export default Navbar;
