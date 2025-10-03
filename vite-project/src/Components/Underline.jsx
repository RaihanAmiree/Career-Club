import React from 'react';

const Underline = ({ title, className = '' }) => {
  return (
    <div className={`inline-block group mx-auto w-full ${className}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#0a1a2f] mb-3 text-center">
        {title}
      </h2>
      <div className="h-1 w-24 bg-[#0a1a2f] mx-auto rounded-full transition-all duration-300 group-hover:w-36"></div>
    </div>
  );
};

export default Underline;
