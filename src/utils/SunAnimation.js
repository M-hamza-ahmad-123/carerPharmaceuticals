import React from "react";
import "tailwindcss/tailwind.css"; // Make sure to import Tailwind CSS

const SunAnimation = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Content div */}
      <div className="h-full w-full bg-blue-500 text-white transition-all duration-500">
        {/* Your existing content goes here */}
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold">Your Company Name</h1>
          {/* Other header content */}
        </header>
        {/* Navbar */}
        <nav className="bg-gray-800 p-4 text-white">
          {/* Your navbar content */}
        </nav>
        {/* Remaining content */}
        <div className="p-8">{/* Remaining content of your page */}</div>
      </div>

      {/* Sun animation */}
      <div className="absolute left-0 top-1/4 transform -translate-x-full">
        <div className="animate-fadeInLeft animate-spin duration-3">
          {/* Your sun and shine elements */}
          <div className="w-16 h-16 bg-yellow-500 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-200 rounded-full mt-2 ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export default SunAnimation;
