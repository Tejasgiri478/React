import React from "react";

const Locations = () => (
  <div className="bg-white py-16 text-gray-900 text-center">
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
    {[1, 2, 3].map((_, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-lg p-6 relative"
      >
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-300 px-4 py-1 rounded-lg text-sm font-semibold">
          CAFE
        </div>
        <h3 className="mt-6 text-xl font-bold">Chicago</h3>
        <p className="text-gray-600 mt-2">
          Fusce ut velit laoreet, tempus arcu molestie vulputate
        </p>
        <hr className="my-4" />
        <p className="font-semibold">Monday - Friday</p>
        <p className="text-pink-500">06:00 AM - 10:00 PM</p>
        <p className="font-semibold mt-2">Saturday - Sunday</p>
        <p className="text-pink-500">08:00 AM - 08:00 PM</p>
        <hr className="my-4" />
        <p className="text-gray-600">+61(0) 383 766 284</p>
        <p className="text-gray-600">noreply@envato.com</p>
      </div>
    ))}
  </div>
  <div className="mt-10 flex justify-center gap-6">
    <button className="bg-red-500 text-white px-6 py-2 rounded-full flex items-center gap-2">
      Our locations ➝
    </button>
    <button className="bg-red-500 text-white px-6 py-2 rounded-full flex items-center gap-2">
      Franchise ➝
    </button>
  </div>
</div>
);

export default Locations;
