import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Nina_Sample.png"; // replace with your actual logo path

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 lg:px-20 py-10 mt-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm md:text-base">
        {/* Left: About + Logo */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-3 text-red-600">About Us</h3>
          <p className="text-gray-400 mb-4 text-justify leading-relaxed">
            SX Factor is a strategic business advisory firm built by experienced
            industry leaders to drive clarity, confidence, and commercial growth.
          </p>
          <div className="flex justify-center md:justify-start">
            <img src={Logo} alt="SX Factor Logo" className="h-10 w-auto" />
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="text-center md:text-left pl-14">
          <h3 className="text-xl font-bold mb-3 text-red-600">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline hover:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:underline hover:text-red-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/leaders" className="hover:underline hover:text-red-500">
                Our Leaders
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline hover:text-red-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold mb-3 text-red-600">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              Email:{" "}
              <a
                href="mailto:info@sxfactor.com"
                className="hover:underline text-white"
              >
                info@sxfactor.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+60312345678" className="hover:underline text-white">
                +60 3-1234 5678
              </a>
            </li>
            <li>Location: Kuala Lumpur, Malaysia</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SX Factor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
