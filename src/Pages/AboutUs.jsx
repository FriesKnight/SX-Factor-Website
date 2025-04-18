import React from "react";
import { motion } from "framer-motion";
import AboutUsHero from "../Components/AboutUsHero";
import Discuss from "../assets/discuss.avif";
import buildingImg from "../assets/building.avif";
import { Eye, Target } from "lucide-react";
import Swirl from "../assets/swirl.avif";

const AboutUs = () => {
  return (
    <div className="pt-16">
      <AboutUsHero />

      {/* === ABOUT US SECTION === */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={Discuss}
              alt="About Us"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
              About <span className="text-red-600">SX Factor</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              SX Factor Sdn Bhd is a strategic venture builder and execution partner dedicated to bringing transformative ideas to life.
              <br /><br />
              We work closely with visionary teams, organizations, and institutions to develop bold, purposeful initiatives that shape the future.
              Our hands-on approach, business acumen, and commitment to excellence make us a catalyst for meaningful change.
            </p>

            <div className="mt-8">
              <a
                href="#vision"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Learn More About Our Vision
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === OUR HISTORY SECTION === */}
      <section id="history" className="relative bg-black text-white py-20 overflow-hidden z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Our <span className="text-red-600">History</span>
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
              A journey marked by purpose, growth, and bold ventures.
            </p>
          </div>

          {/* Flex container for timeline and image */}
          <div className="flex flex-col md:flex-row items-center md:space-x-16 space-y-12 md:space-y-0">

            {/* Timeline on the left */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="border-l-4 border-red-600 pl-8 space-y-12">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Founded in 2018</h3>
                  <p className="text-gray-400 mt-2 leading-relaxed">
                    SX Factor began with a vision to challenge traditional business models by focusing on execution-first strategy.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">Strategic Growth (2019–2021)</h3>
                  <p className="text-gray-400 mt-2 leading-relaxed">
                    During this phase, we established strategic partnerships, expanded our operational capacity, and launched key ventures.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">Future-Driven (2022 & Beyond)</h3>
                  <p className="text-gray-400 mt-2 leading-relaxed">
                    With a focus on innovation and impact, we continue to co-create transformative projects across various industries.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image on the right */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src={buildingImg}
                alt="History Image"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* === VISION & MISSION SECTION === */}
      <section className="relative bg-black text-white py-20 mt-16 overflow-hidden z-0">
        {/* Background image with blur */}
        <div className="absolute inset-0 bg-cover bg-center backdrop-blur-lg" style={{ backgroundImage: `url(${Swirl})`,backgroundColor: 'rgba(0, 0, 0, 0.8)' }}></div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
            Our <span className="text-red-600">Vision</span> & <span className="text-red-600">Mission</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Vision Card */}
            <motion.div
              className="bg-white text-black rounded-2xl shadow-xl p-8 flex flex-col justify-between hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                    V
                  </div>
                  <h3 className="text-2xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-gray-800 text-justify leading-relaxed">
                  To be a driving force behind innovative and high-impact initiatives that shape industries and improve lives. We envision a future where strategic thinking, purposeful collaboration, and bold execution come together to create lasting impact through smart execution and strategic alignment.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="bg-red-600 text-white rounded-2xl shadow-xl p-8 flex flex-col justify-between hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 font-bold">
                    M
                  </div>
                  <h3 className="text-2xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-white text-justify leading-relaxed">
                  SX Factor exists to enable and empower strategic ventures by acting as a hands-on partner in ideation, development, and execution. We collaborate with like-minded organizations and institutions to co-create businesses, infrastructure, and solutions that address real-world needs and unlock new opportunities.
                  <br /><br />
                  Through a blend of strategic foresight, operational excellence, and a deep understanding of market dynamics, we bring together people, capital, and ideas to build what’s up next.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
