import React from "react";
import { Link } from "react-router-dom";
import Home1 from "../assets/home1.jpg"

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={Home1}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center text-center text-white">
        <div className="px-4">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-gray-600 to-red-600 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-[2000ms] ease-in-out drop-shadow-lg">
            Welcome to SX Factor
          </h1>
          <p className="mt-4 text-2xl">
            "Advisors You Trust. Solutions That Work."
          </p>

          {/* Button to About Us */}
          <div className="mt-14">
            <Link
              to="/about-us"
              className="inline-block bg-white text-black py-3 px-6 rounded-lg text-xl font-semibold hover:bg-red-600 hover:text-white transition duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
