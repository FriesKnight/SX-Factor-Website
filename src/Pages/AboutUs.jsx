import React from "react";
import { motion } from "framer-motion";
import AboutUsHero from "../Components/AboutUsHero.jsx";
import Footer from "../Components/Footer.jsx";
import Discuss from "../assets/discuss.avif";
import buildingImg from "../assets/building.avif";
import { Eye, Target } from "lucide-react";
import White from "../assets/whitey.avif";

const AboutUs = () => {
  return (
    <div className="pt-16">
      <AboutUsHero />

      {/* === ABOUT US SECTION === */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-3 grid md:grid-cols-2 gap-12 items-center">
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 font-poppins">
              About <span className="text-red-600">SX Factor</span>
            </h2>
            <p className="text-black text-lg leading-relaxed text-justify font-semibold">
              SX Factor Sdn Bhd is a business advisory and consultancy firm that
              helps companies grow, solve problems, and reach their goals. We
              support businesses at every stage — from setting up operations to
              managing finances, securing funding, and improving performance.
              <br />
              <br />
              We don’t just give advice — we work closely with our clients as
              partners. Our team brings real-world experience in finance,
              strategy, and operations to deliver practical solutions that make
              a difference. Over the years, we’ve worked with startups, SMEs,
              and large companies across different industries. Whether it's
              handling accounting and tax, raising capital, or advising on big
              decisions, we’re known for being hands-on, reliable, and
              results-driven.
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
      <section
        id="history"
        className="relative bg-black text-white py-20 overflow-hidden z-10"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white font-poppins">
              Our <span className="text-red-600 font-poppins">History</span>
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto font-lato">
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
                  <h3 className="text-2xl font-semibold text-white">
                    Founded in 2017
                  </h3>
                  <p className="text-gray-400 mt-2 leading-relaxed text-justify">
                    Originally operating in the Food & Beverage (F&B) industry.
                    With a passion for entrepreneurship and a knack for building
                    sustainable business models, our founders soon recognized a
                    broader opportunity — to help other businesses grow with the
                    same level of structure, strategy, and operational
                    excellence. In 2019, we pivoted into business advisory and
                    consultancy, marking the beginning of a new chapter. Since
                    then, SX Factor has grown into a trusted partner for
                    companies seeking not just guidance, but hands-on support in
                    navigating their financial and strategic journeys.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Key Milestones ( 2019 - 2022 )
                  </h3>
                  <p className="text-gray-400 mt-2 leading-relaxed text-justify">
                    <strong>2021 –</strong> Airdroitech Sdn Bhd (ADT): SX Factor
                    played a critical role in the setup of Airdroitech Sdn Bhd,
                    a finance shared services and software provider supporting
                    Polyaire, one of Australia’s largest air-conditioning
                    manufacturers. Our involvement went beyond incorporation —
                    we continue to provide accounting, tax, audit, budgeting,
                    and business advisory services that support ADT’s ongoing
                    operations and strategic alignment with Polyaire’s growth.{" "}
                    <br />
                    <br />
                    <strong>2022 –</strong> Vantage Energy Group: Appointed to
                    provide CFO services for Vantage, SX Factor led initiatives
                    in fundraising, loan restructuring, project financing, and
                    overall strategic business advisory. Acting as group CFO, we
                    were instrumental in helping the business navigate complex
                    transactions and secure critical infrastructure projects.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Future-Driven (2022 & Beyond)
                  </h3>
                  <p className="text-gray-400 mt-2 leading-relaxed text-justify">
                    Today, our journey from F&B roots to full-scale business
                    advisory reflects our adaptive mindset and entrepreneurial
                    DNA. We continue to evolve alongside our clients — building,
                    transforming, and scaling businesses that are built to last.
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
      <section
        id="vision"
        className="relative py-24 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${White}` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 backdrop-blur-sm z-0" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-20 font-poppins">
            Our <span className="text-red-600">Vision</span> & <span className="text-red-600">Mission</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Vision */}
            <motion.div
              className="h-full group bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col border-black"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-100 text-red-600 p-3 rounded-xl">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-black">Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                To lead bold and transformative initiatives that shape industries and elevate lives, powered by strategy, innovation, and impactful collaboration.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="h-full group bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col border-black"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-100 text-red-600 p-3 rounded-xl">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-black">Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                To empower strategic ventures with execution-first partnership — collaborating with like-minded organizations to co-create real-world impact through bold ideas, market intelligence, and operational excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
