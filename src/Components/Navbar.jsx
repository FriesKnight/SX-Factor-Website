import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/'); // Default to home as active

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Function to set the active link
    const handleLinkClick = (path) => {
        setActiveLink(path); // Set active link to the clicked link
        closeMenu(); // Close the menu when a link is clicked
    };

    return (
        <div className="navbar bg-white w-full shadow-md px-6 fixed top-0 left-0 z-50 h-16 flex items-center justify-between">
            {/* Left Logo */}
            <div className="flex-none">
                <Link
                    to="/"
                    className="text-2xl font-bold text-black hover:text-red-600"
                    onClick={() => handleLinkClick('/')}
                >
                    SX Company
                </Link>
            </div>

            {/* Center Nav Links (desktop only) */}
            <div className="hidden lg:flex flex-grow justify-center space-x-6">
                <ul className="menu menu-horizontal p-0 text-base font-semibold">
                    <li>
                        <Link
                            to="/"
                            className={`text-black transition duration-200 ${activeLink === '/' ? 'text-red-600 underline' : 'hover:text-red-600 hover:underline'}`}
                            onClick={() => handleLinkClick('/')}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about-us"
                            className={`text-black transition duration-200 ${activeLink === '/about-us' ? 'text-red-600 underline' : 'hover:text-red-600 hover:underline'}`}
                            onClick={() => handleLinkClick('/about-us')}
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/leaders"
                            className={`text-black transition duration-200 ${activeLink === '/leaders' ? 'text-red-600 underline' : 'hover:text-red-600 hover:underline'}`}
                            onClick={() => handleLinkClick('/leaders')}
                        >
                            Our Leaders
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Contact Button (desktop only) */}
            <div className="flex-none hidden lg:block">
                <Link
                    to="/contact"
                    className="text-black hover:bg-red-500 hover:text-black border border-black text-bold"
                    onClick={() => handleLinkClick('/contact')}
                >
                    Contact Us
                </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden ml-auto">
                <button onClick={handleMenuToggle} className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md z-40 px-6 py-4 rounded-b-md lg:hidden">
                    <ul className="space-y-4 text-base font-medium">
                        <li>
                            <Link
                                to="/"
                                className={`block text-black px-3 py-2 rounded transition ${activeLink === '/' ? 'text-red-600 underline' : 'hover:text-black hover:underline'}`}
                                onClick={() => handleLinkClick('/')}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about-us"
                                className={`block text-black px-3 py-2 rounded transition ${activeLink === '/about-us' ? 'text-red-600 underline' : 'hover:text-black hover:underline'}`}
                                onClick={() => handleLinkClick('/about-us')}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/leaders"
                                className={`block text-black px-3 py-2 rounded transition ${activeLink === '/leaders' ? 'text-red-600 underline' : 'hover:text-black hover:underline'}`}
                                onClick={() => handleLinkClick('/leaders')}
                            >
                                Our Leaders
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={`block text-white bg-black px-3 py-2 rounded transition ${activeLink === '/contact' ? 'text-red-600' : 'hover:bg-white hover:text-black'}`}
                                onClick={() => handleLinkClick('/contact')}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
