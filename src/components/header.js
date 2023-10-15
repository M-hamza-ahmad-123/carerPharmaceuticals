import React from "react";

export function Header() {
  return (
    <div>
      <div className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Drug Dealer
            </span>
          </div>

          <div className="flex items-center mt-5">
            <a className="mr-6 text-sm text-gray-500 dark:text-white hover:underline">
              Location
            </a>
            <a className="mr-6 text-sm text-gray-500 dark:text-white hover:underline">
              03024444338
            </a>
            <a className="mr-6 text-sm text-gray-500 dark:text-white hover:underline">
              hamzathegreat1234@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
