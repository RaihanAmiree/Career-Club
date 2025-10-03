import React from 'react';
import { Link } from "react-router-dom";


// This component represents the prominent "Build Your CV" box on the homepage.
const PDFEntry = () => {
  return (
    <div className="flex items-center justify-center p-4 mb-20">
      
      {/* CV Builder Entry Box (Responsive Card) */}
      {/* The <a> tag is the core entry point for the user */}
      <Link 
  to="/library"
  className="
    flex flex-col items-center justify-center
    w-full max-w-sm sm:max-w-md lg:max-w-lg
    p-8 sm:p-12
    bg-white
    rounded-3xl
    shadow-2xl
    text-center
    transform
    transition duration-300 ease-in-out
    hover:shadow-indigo-500/50
    hover:scale-[1.02]
    cursor-pointer
    border-4 border-transparent hover:border-indigo-400
  "
>
  {/* Icon/Visual Element */}
  <svg className="w-16 h-16 sm:w-20 sm:h-20 text-indigo-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
  </svg>

  {/* Main Title */}
  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1a2f] mb-2">
    See Career Books
  </h2>

  {/* Subtitle/Description */}
  <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xs">
    Start achieving knowledge about the careers of others
  </p>

  {/* Call to Action Button */}
  <span className="
    inline-block
    px-6 py-3
    text-lg font-bold
    rounded-full
    bg-indigo-600 text-white
    shadow-md shadow-indigo-600/30
    hover:bg-indigo-700
    transition duration-150
  ">
    Go to Library
  </span>
</Link>
    </div>
  );
};

export default PDFEntry;
