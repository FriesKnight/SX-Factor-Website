import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/meeting.avif";

const AboutUsHero = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Image with transition effect */}
      <motion.img
        src={aboutImage}
        alt="Meeting"
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }}
      />

      {/* Overlay text */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-6 bg-black/40"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* SX Factor Sdn Bhd with metallic gradient text */}
        <h1 className="text-5xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-gray-600 to-red-600 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-[2000ms] ease-in-out drop-shadow-lg font-poppins">
          SX Factor Sdn Bhd
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-white max-w-3xl leading-relaxed drop-shadow-md font-lato">
          Your partner in business growth and success — offering hands-on
          support in strategy, finance, and operations.
        </p>

        {/* Smooth scroll button */}
        <a
          href="#about"
          className="mt-10 px-6 py-3 bg-red-600 text-white text-lg rounded-lg hover:bg-red-700 transition"
        >
          Learn More
        </a>
      </motion.div>
    </div>
  );
};

export default AboutUsHero;
