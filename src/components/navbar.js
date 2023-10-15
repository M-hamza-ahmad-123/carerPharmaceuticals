import React from "react";

function Navbar() {
  return (
    <div div className="bg-gray-50 dark:bg-gray-700">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
          <div className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm order-last">
            <button className="text-gray-900 dark:text-white hover:underline">
              Home
            </button>
            <button className="text-gray-900 dark:text-white hover:underline">
              Company
            </button>
            <button className="text-gray-900 dark:text-white hover:underline">
              Team
            </button>
            <button className="text-gray-900 dark:text-white hover:underline">
              Features
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
