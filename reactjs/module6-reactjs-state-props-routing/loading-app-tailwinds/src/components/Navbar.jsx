import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/main-logo.png'
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className=""><img src={logo} alt="" /></div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-gray-600 hover:text-red-500">Home</Link>
        </li>
        <li>
        <Link to="/HowItsMade" className="text-gray-600 hover:text-red-500">How it's made?</Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-600 hover:text-red-500">About us</Link>
        </li>
        <li>
          <Link to="/products" className="text-gray-600 hover:text-red-500">Our products</Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-600 hover:text-red-500">Contact</Link>
        </li>
      </ul>
      <button className="bg-yellow-400 px-4 py-2 rounded-full text-white font-bold hover:bg-yellow-500">Buy now →</button>
    </nav>
  );
};

export default Navbar;
