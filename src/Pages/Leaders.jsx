import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Leader1 from "../assets/Faizal_RL.jpg";
import Leader2 from "../assets/Nina_RL.jpg";
import Header from "../components/Header";
import HeadLeader from "../assets/leader1.jpg";

const leadersData = [
  {
    name: "Faizal Sham Bin Abu Mansor",
    title: "Founder & Managing Director",
    quote: "Leadership is not about being in charge, it’s about taking care of those in your charge.",
    bio: {
      overview: `Faizal is a distinguished corporate leader with a career that spans top-tier roles across finance, aviation, media, and energy. Known for his exceptional financial acumen, sharp strategic vision, and operational leadership, he is the force behind SX Factor’s rise as a trusted business advisory firm.`,
      achievements: [
        "Best CFO for Investor Relations 2012 – Malaysian Investor Relations Association",
        "Best CFO in Malaysia 2013 – FinanceAsia Magazine",
        "CFO of the Year 2014 – Malaysian Institute of Accountants & Chartered Institute of Management Accountants"
      ],
      timeline: [
        {
          role: "Chief Financial Officer",
          company: "Malaysia Airports Holdings Berhad (MAHB)",
          duration: "2006 to 2015",
          contributions: `Led one of the most significant financial transformations in Malaysia’s GLC landscape.`
        },
        {
          role: "CEO",
          company: "Astro Productions and Astro Awani",
          duration: "2015–2018",
          contributions: `Revitalised operations and returned the business to profitability.`
        },
      ],
      otherDetails: `Faizal brings clarity, courage, and the commitment to build businesses that last.`,
    },
    image: Leader1,
  },
  {
    name: "Shamina Noor Nordin",
    title: "Director",
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    bio: {
      overview: `Shamina Nordin is a dynamic leader and strategic operator, serving as a Director at both SX Factor Sdn Bhd and Airdroitech Sdn Bhd. With a career spanning over a decade, Shamina has been instrumental in driving growth, fostering innovation, and building high-performance teams.`,
      achievements: [
        "At SX Factor, instrumental in shaping the firm’s strategic direction and expanding its business advisory services.",
        "At Airdroitech, oversees operations and strategy with a focus on finance shared services and software solutions."
      ],
      timeline: [
        {
          role: "Director",
          company: "SX Factor Sdn Bhd",
          duration: "Current",
          contributions: `Contributes to business advisory services and helps shape the strategic direction of the firm.`
        },
        {
          role: "Director",
          company: "Airdroitech Sdn Bhd",
          duration: "Current",
          contributions: `Oversees operations and strategy, focusing on finance shared services and software solutions.`
        },
      ],
      otherDetails: `Shamina is known for her hands-on leadership style, her commitment to continuous improvement, and her ability to build collaborative, high-performing teams.`,
    },
    image: Leader2,
  },
];

const Leaders = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [currentDetail, setCurrentDetail] = useState("overview");

  const renderDetails = () => {
    switch (currentDetail) {
      case "overview":
        return <p className="text-gray-300">{selectedLeader.bio.overview}</p>;
      case "achievements":
        return (
          <div>
            <ul className="list-disc pl-5 text-gray-300">
              {selectedLeader.bio.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        );
      case "timeline":
        return (
          <div>
            {selectedLeader.bio.timeline.map((item, index) => (
              <div key={index} className="border-l-4 border-red-600 pl-4 mb-4">
                <p className="font-semibold text-white">{item.role}</p>
                <p className="text-gray-300">{item.company} ({item.duration})</p>
                <p className="text-gray-300">{item.contributions}</p>
              </div>
            ))}
          </div>
        );
      case "otherDetails":
        return <p className="text-gray-300">{selectedLeader.bio.otherDetails}</p>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-black text-white">
      <Header
        imageSrc={HeadLeader}
        title="Meet Our Leaders"
        subtitle="Leadership that delivers. Vision that inspires."
      />

      {/* Leader's Quote Section */}
      <div className="pt-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-white italic mb-4">
          "Leadership is not about being in charge, it’s about taking care of those in your charge."
        </h2>
        <p className="text-xl text-gray-300">- Faizal Sham Bin Abu Mansor</p>
      </div>

      <div className="pt-16 px-6 lg:px-20 bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/abstract-bg.png')" }}>
        <div className="relative z-10">
          <AnimatePresence>
            {!selectedLeader && (
              <motion.div
                className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 border-2 border-black p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {leadersData.map((leader, index) => (
                  <motion.div
                    key={index}
                    className="cursor-pointer flex flex-col items-center justify-between p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    onClick={() => setSelectedLeader(leader)}
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-40 h-40 object-cover rounded-full shadow-lg"
                    />
                    <div className="text-center mt-4">
                      <h2 className="text-2xl font-semibold text-black">{leader.name}</h2>
                      <p className="text-md text-gray-600">{leader.title}</p>
                      <button className="mt-6 px-8 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300">
                        View More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {selectedLeader && (
              <motion.div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 z-50 overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.img
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  className="w-52 h-52 object-cover rounded-full mb-6 shadow-xl"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                />

                <motion.h2
                  className="text-4xl font-bold text-center text-white"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {selectedLeader.name}
                </motion.h2>

                <motion.p
                  className="text-lg text-red-600 text-center mt-2"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {selectedLeader.title}
                </motion.p>

                <motion.div
                  className="max-w-4xl text-lg text-gray-300 text-justify whitespace-pre-line overflow-y-auto max-h-[60vh] px-4 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {renderDetails()}
                </motion.div>

                <motion.div className="flex space-x-6 mt-6">
                  <motion.button
                    className="mt-4 px-8 py-2 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition duration-300"
                    onClick={() => setCurrentDetail("overview")}
                  >
                    Overview
                  </motion.button>
                  <motion.button
                    className="mt-4 px-8 py-2 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition duration-300"
                    onClick={() => setCurrentDetail("achievements")}
                  >
                    Achievements
                  </motion.button>
                  <motion.button
                    className="mt-4 px-8 py-2 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition duration-300"
                    onClick={() => setCurrentDetail("timeline")}
                  >
                    Timeline
                  </motion.button>
                  <motion.button
                    className="mt-4 px-8 py-2 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition duration-300"
                    onClick={() => setCurrentDetail("otherDetails")}
                  >
                    Other Details
                  </motion.button>
                </motion.div>

                <motion.button
                  className="mt-8 px-8 py-2 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition duration-300"
                  onClick={() => setSelectedLeader(null)}
                >
                  Back
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Leaders;
