// ChefConnectApp.js

import React from 'react';

const DownloadApp = () => {
  return (
    <section className="py-16">
    <div className='container mx-auto flex items-center max-w-[1100px]'>
      {/* Left Section with Image */}
      <div className="w-1/2 pr-8">
        <img
          src="/src/assets/DownloadApp.png" // Replace with the actual image path
          alt="Chef Connect App"
          className="w-full h-auto"
        />
      </div>

      {/* Right Section with Text Content */}
      <div className="w-1/2 pl-8">
        <p className="text-orange-500 mb-4">Get to easily find the best chefs</p>
        
        <h2 className="text-4xl font-bold mb-4 text-white">Download the Chef Connect App</h2>
        
        <p className="text-gray-300 mb-14">
          Download the Chef Connect app to get chefs easily. Explore a world of culinary talent right at your fingertips.
        </p>
        
        {/* Buttons Aligned Horizontally */}
        <div className="flex space-x-4">
          <button><img src='/src/assets/app-store-badge.svg' alt="App Play" /></button>
          <button ><img src='/src/assets/google-play-badge.svg' alt="Google Play" /></button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default DownloadApp;
