import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import loaderimg from "../src/download.gif";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import HowItsMade from "./pages/HowItsMade";
import HowItWork from "./components/HowItWork";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Locations from "./components/Locations";

function App() {
  const [loader, setLoader] = useState(true);
  // create a function or hooks of useEffect to load promises for loader
  useEffect(() => {
    //call a function for loader to load for a time
    setTimeout(() => {
      setLoader(false);
    }, 5500);
  });
  return loader ? (
    <>
      <div className="loader-app">
        <img src={loaderimg} alt="loader-photo " className="w-full img-fluid"/>
      </div>
    </>
  ) : (
    <Router>
      <Navbar />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HowItsMade" element={<HowItsMade />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ProductSection />
      <HowItWork />
      <Gallery />
      <Testimonials />
      <Locations />
      <Footer />
    </Router>
  );
}

export default App;
