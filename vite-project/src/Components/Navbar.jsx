import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo-nav.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Career    Explorer", path: "/explorer" },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-[#030b37] via-[#040e47] to-[#071567] shadow-md sticky  top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo + Company Name */}
        <div className="flex items-center space-x-3">
          <div className="w-[clamp(45px,6vw,65px)] h-[clamp(45px,6vw,65px)]">
            <img
              src={Logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-white text-[clamp(20px,2.5vw,32px)] tracking-wide">
            ASCLC
          </span>
        </div>

        {/* Middle: Links */}
        <div className="hidden md:flex space-x-8 text-white font-semibold text-[clamp(14px,1.1vw,18px)]">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-blue-300 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Button + Hamburger */}
        <div className="flex items-center space-x-4">
          <Link to='/registration'>
           <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-400 transition duration-200">
            Sign In
          </button>
          </Link>
         

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-[clamp(200px,60%,300px)] bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 shadow-lg p-6 flex flex-col space-y-6 text-white font-medium text-lg z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="hover:text-blue-300 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
