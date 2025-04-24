import React from "react";
import { motion } from "framer-motion";

const Header = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      {/* Background image */}
      <motion.img
        src={imageSrc}
        alt="Header Background"
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }}
      />

      {/* Text Overlay with blur and animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-6 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-gray-600 to-red-600 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-[2000ms] ease-in-out drop-shadow-lg font-merriweather">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 text-xl md:text-2xl text-white max-w-3xl leading-relaxed drop-shadow-md font-lato">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default Header;
