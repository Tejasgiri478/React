import React from "react";
import galary from "../assets/images/about-img-section.png"
const Gallery = () => (
  <section className="py-16 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Gallery</h2>
    <div className="container-fluid" >
      <img src={galary} alt="galary" />
    </div>
  </section>
);

export default Gallery;
