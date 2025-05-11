import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import Leader1 from "../assets/Faizal_RL.jpg";
import Leader2 from "../assets/Nina_RL.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadLeader from "../assets/leader1.jpg";

const leadersData = [
  {
    name: "Faizal Sham Bin Abu Mansor",
    title: "Founder & Managing Director",
    image: Leader1,
    overview:
      "Faizal is a distinguished corporate leader with a career that spans top-tier roles across finance, aviation, media, and energy...",
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
        contributions:
          "Led one of the most significant financial transformations in Malaysia’s GLC landscape."
      },
      {
        role: "CEO",
        company: "Astro Productions and Astro Awani",
        duration: "2015–2018",
        contributions:
          "Revitalised operations and returned the business to profitability."
      }
    ],
    otherDetails:
      "Faizal brings clarity, courage, and the commitment to build businesses that last."
  },
  {
    name: "Shamina Noor Nordin",
    title: "Director",
    image: Leader2,
    overview:
      "Shamina Nordin is a dynamic leader and strategic operator, serving as a Director at both SX Factor Sdn Bhd and Airdroitech Sdn Bhd...",
    achievements: [
      "At SX Factor, instrumental in shaping the firm’s strategic direction and expanding its business advisory services.",
      "At Airdroitech, oversees operations and strategy with a focus on finance shared services and software solutions."
    ],
    timeline: [
      {
        role: "Director",
        company: "SX Factor Sdn Bhd",
        duration: "Current",
        contributions:
          "Contributes to business advisory services and helps shape the strategic direction of the firm."
      },
      {
        role: "Director",
        company: "Airdroitech Sdn Bhd",
        duration: "Current",
        contributions:
          "Oversees operations and strategy, focusing on finance shared services and software solutions."
      }
    ],
    otherDetails:
      "Shamina is known for her hands-on leadership style, her commitment to continuous improvement, and her ability to build collaborative, high-performing teams."
  }
];

const Leaders = () => {
  const [quoteVisible, setQuoteVisible] = useState(false); // State to control visibility of the quote

  // Fade-in effect for the quote
  useEffect(() => {
    const timeout = setTimeout(() => {
      setQuoteVisible(true); // Trigger quote fade-in after a delay
    }, 500); // Delay in milliseconds
    return () => clearTimeout(timeout);
  }, []);

  const handleCardClick = () => {
    // You can add an action on card click, if necessary
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <Header
        imageSrc={HeadLeader}
        title="Meet Our Leaders"
        subtitle="Leadership that delivers. Vision that inspires."
      />

      <div className="py-16 px-6 lg:px-20 space-y-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Fade-in animation for the quote */}
          <motion.p
            className="text-xl text-black italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: quoteVisible ? 1 : 0 }}
            transition={{ duration: 2 }}
          >
            Strong leadership is the foundation of sustainable growth. At SX Factor, our leaders don't just guide — they empower, inspire, and drive transformation.
          </motion.p>
        </div>

        {leadersData.map((leader, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row gap-10 bg-gradient-to-r from-gray-800 to-black backdrop-blur-sm rounded-xl p-8 shadow-xl transition-transform duration-500 hover:scale-[1.05] hover:shadow-2xl"
            onClick={handleCardClick}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -150 : 150, // Reduce the initial distance
            }}
            animate={{ opacity: 1, x: 0 }} // Center the card with opacity transition
            transition={{
              duration: 1,
              ease: "easeInOut",
            }} // Smoother transition with easeInOut
            whileHover={{
              scale: 1.05, // Slight zoom effect on hover
              transition: { duration: 0.3 },
            }}
          >
            {/* Image and Title */}
            <div className="pt-12 flex flex-col items-center lg:w-1/3 text-center">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-52 h-72 object-cover rounded-md border-4 border-gray-400 shadow-lg"
              />
              <h2 className="text-2xl font-bold text-white mt-4">{leader.name}</h2>
              <p className="text-red-400 text-md italic">{leader.title}</p>
            </div>

            {/* Bio Content */}
            <div className="lg:w-2/3 space-y-6">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-semibold text-red-500 mb-2">Overview</h3>
                <p className="text-gray-300 leading-relaxed">{leader.overview}</p>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xl font-semibold text-red-500 mb-2">Achievements</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {leader.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-xl font-semibold text-red-500 mb-2">Career Timeline</h3>
                <div className="space-y-4">
                  {leader.timeline.map((item, i) => (
                    <div key={i} className="border-l-4 border-red-600 pl-4">
                      <p className="text-white font-bold">{item.role}</p>
                      <p className="text-gray-300">{item.company} ({item.duration})</p>
                      <p className="text-gray-400 text-sm italic">{item.contributions}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Details */}
              <div>
                <h3 className="text-xl font-semibold text-red-500 mb-2">Other Details</h3>
                <p className="text-gray-300">{leader.otherDetails}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Leaders;
