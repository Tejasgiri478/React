import React from "react";

const Products = () => {
  return (
    <section className="py-16 text-center bg-white">
      <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Ice Cream</h3>
          <p className="text-gray-600 mt-2">
            Rich, creamy, and made with natural ingredients.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Ice Coffee</h3>
          <p className="text-gray-600 mt-2">
            A perfect blend of coffee and ice cream flavors.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Milkshakes</h3>
          <p className="text-gray-600 mt-2">
            Smooth, delicious, and available in multiple flavors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
