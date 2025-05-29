import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = (path) =>
    `relative inline-block text-base transition-colors duration-300 font-medium
     ${currentPath === path
      ? "text-dark-red font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-dark-red after:transition-transform after:duration-300 after:scale-x-100 after:origin-left"
      : "text-dark-red hover:text-darker-red after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-darker-red after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left"
    }`;

  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-white h-20 flex items-center justify-between px-6 shadow-neu rounded-b-xl">
      {/* Logo */}
      <div className="flex-none">
        <Link
          to="/"
          onClick={closeMenu}
          className={`text-3xl transition font-bold ${currentPath === "/" ? "text-red-600" : "text-red-600 hover:text-red-950"
            }`}
        >
          SX Factor
        </Link>
      </div>

      {/* Center Nav Links (desktop) */}
      <div className="hidden lg:flex flex-grow justify-center space-x-10">
        <ul className="flex space-x-8 items-center text-red-600">
          {[
            { to: "/about-us", label: "About Us" },
            { to: "/leaders", label: "Our Leaders" },
            { to: "/services", label: "Services" },
          ].map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={closeMenu}
                className={navLinkClass(link.to)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Button */}
      <div className="hidden lg:flex items-center">
        <Link
          to="/contact"
          onClick={closeMenu}
          className={`
    px-6 py-2 rounded-2xl font-semibold text-red-600
    hover:shadow-inner hover:text-red-800
    active:shadow-neu-inset active:text-red-950
    transition-all duration-300 ease-in-out
  `}
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden ml-auto">
        <button onClick={handleMenuToggle} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-dark-red"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-neu-bg shadow-neu px-6 py-4 rounded-b-xl lg:hidden">
          <ul className="space-y-4 text-base font-medium">
            {[
              { to: "/about-us", label: "About Us" },
              { to: "/leaders", label: "Our Leaders" },
              { to: "/contact", label: "Contact Us" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={closeMenu}
                  className={`block px-3 py-2 rounded-xl text-center transition font-medium ${currentPath === link.to
                    ? "text-dark-red font-bold underline"
                    : "text-dark-red hover:text-darker-red"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
