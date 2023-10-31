import React from 'react';

const Footer = () => {
  const footerStyle = {
    borderRadius: '20px 20px 0 0', // Adjust the values to control the roundness of the top corners
    // boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };
  return (
   
    <footer className="rounded-md shadow bg-inherit" style={footerStyle} >
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="" class="flex items-center mb-4 sm:mb-0">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-700">Carer Pharmaceuticals</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium dark:text-gray-700 sm:mb-0 dark:text-gray-700">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-600">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>


  );
};

export default Footer;
