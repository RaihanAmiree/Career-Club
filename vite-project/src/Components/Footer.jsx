// Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-950 text-gray-200 py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-bold mb-4 text-white">Gratech</h3>
            <p className="text-sm leading-relaxed mb-6">
              Providing advanced solutions for business across various
              industries since 2010. Innovate with us.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: IT Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">IT Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-white transition-colors duration-300">AI Management</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors duration-300">SEO Optimization</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors duration-300">Cyber Security</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors duration-300">Data Analytics</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors duration-300">Our Services</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors duration-300">Pricing Plan</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors duration-300">Client Reviews</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors duration-300">Meet Our Team</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Contact Us</h4>
            <div className="space-y-4">
              <p className="flex items-start text-sm">
                <span className="mr-3 mt-1">&#x1F4CD;</span> {/* Location icon */}
                1600 Amphitheatre Parkway, Mountain View, CA 94043
              </p>
              <p className="flex items-start text-sm">
                <span className="mr-3 mt-1">&#x1F551;</span> {/* Clock icon */}
                Working Hours: Mon - Sat: 9:00 AM - 6:00 PM
              </p>
              <p className="flex items-start text-sm">
                <span className="mr-3 mt-1">&#x260E;</span> {/* Phone icon */}
                (+1) 123 456 7890
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal Links */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-sm flex flex-col sm:flex-row justify-between items-center text-gray-400">
          <p>&copy; 2024 Gratech. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-300">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;