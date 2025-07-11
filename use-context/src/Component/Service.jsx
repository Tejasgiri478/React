import React from "react";
import Navbar from "./Navbar";
const Service = () => {
  return (
    <>
      <Navbar />

      {/* Service Page Jsx */}
      <div className="service w-50 mx-auto text-center p-2">
        <h1>Our Services</h1>
        <p>We offer a wide range of services to meet your needs.</p>
        <ul>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>UI/UX Design</li>
          <li>Digital Marketing</li>
        </ul>

      </div>
    </>
  );
};

export default Service;
