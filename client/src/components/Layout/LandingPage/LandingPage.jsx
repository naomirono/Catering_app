// src/components/LandingPage.js
import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center ">
      <div className=" bg-white p-8 rounded shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Chef App</h2>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for a cuisine or chef"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4 mb-6">
          <select
            className="border px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Cuisine</option>
            {/* Add your cuisine options here */}
          </select>

          <select
            className="border px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Rating</option>
            {/* Add your rating options here */}
          </select>

          <select
            className="border px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Availability</option>
            {/* Add your availability options here */}
          </select>

          <input
            type="text"
            placeholder="Enter Location"
            className="border px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Get Started Button */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
