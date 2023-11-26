// src/components/Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    setAuthenticated(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setAuthenticated(false);
  };

  const handleSignUp = () => {
    // Implement your sign-up logic here
    // This could redirect the user to a sign-up page or show a modal
  };

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Chef Connect</h1>
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>

        <div>
          {isAuthenticated ? (
            <>
              <button onClick={handleLogout} className="bg-white text-blue-500 px-4 py-2 rounded-full focus:outline-none">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button onClick={handleLogin} className="bg-white text-blue-500 px-4 py-2 rounded-full focus:outline-none">
                Sign In
              </button>
              <button onClick={handleSignUp} className="bg-white text-blue-500 px-4 py-2 ml-4 rounded-full focus:outline-none">
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
