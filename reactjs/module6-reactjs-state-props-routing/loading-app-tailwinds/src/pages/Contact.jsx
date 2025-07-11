import React from "react";

const Contact = () => {
  return (
    <section className="bg-white text-center py-20">
      <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
      <p className="text-gray-600 max-w-lg mx-auto mt-4">
        Feel free to reach out to us with any questions or inquiries.
      </p>

      <form className="max-w-lg mx-auto mt-8 space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-yellow-300" 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-yellow-300" 
        />
        <textarea 
          rows="4" 
          placeholder="Your Message" 
          className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-yellow-300"
        ></textarea>
        <button className="bg-yellow-400 px-6 py-3 rounded-full text-white font-bold hover:bg-yellow-500">
          Send Message
        </button>
      </form>

      <div className="mt-10">
        <h2 className="text-2xl font-bold">Our Locations</h2>
        <p className="text-gray-600 mt-2">📍 Chicago, New York, Los Angeles</p>
        <p className="text-red-500 font-bold mt-4">📞 +1 (800) 383-766-284</p>
      </div>
    </section>
  );
};

export default Contact;
