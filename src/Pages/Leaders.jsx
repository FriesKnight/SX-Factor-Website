import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Leader1 from "../assets/Faizal_RL.jpg";
import Leader2 from "../assets/Nina_RL.jpg";
import Header from "../components/Header"; // Import the Header component
import HeadLeader from "../assets/Head_Leader.jpg";

const leadersData = [
  {
    name: "Faizal Sham Bin Abu Mansor",
    title: "Founder & Managing Director",
    bio: `Faizal is a distinguished corporate leader with a career that spans top-tier roles across finance, aviation, media, and energy. Known for his exceptional financial acumen, sharp strategic vision, and operational leadership, he is the force behind SX Factor’s rise as a trusted business advisory firm.

Faizal served as Chief Financial Officer of Malaysia Airports Holdings Berhad (MAHB) from 2006 to 2015, where he led one of the most significant financial transformations in Malaysia’s GLC landscape. Under his stewardship, MAHB scaled new heights in investor relations, corporate governance, and international expansion — achievements that earned him multiple accolades, including:

• Best CFO for Investor Relations 2012 – Malaysian Investor Relations Association  
• Best CFO in Malaysia 2013 – FinanceAsia Magazine  
• CFO of the Year 2014 – Malaysian Institute of Accountants & Chartered Institute of Management Accountants

He was later appointed CEO of Astro Productions and Astro Awani (2015–2018), where he revitalised operations and returned the business to profitability. From 2021 to 2024, Faizal served as Executive Director and Group CFO of Vantage Energy Group. There, he drove high-impact initiatives in capital restructuring, M&A, and strategic planning.

Earlier, Faizal worked in banking, including roles at Bank of Tokyo-Mitsubishi and AmMerchant Bank. Today, he also serves as Independent Non-Executive Director at YTL Power International Berhad and Solution Group Berhad. He was also with Affin Hwang Asset Management until its acquisition by CVC Capital.

Faizal holds a BSc in Accounting (Rutgers), an MBA (Ohio University), and a Graduate Diploma in Aviation (IATA). He is a Fellow of CA ANZ and a member of MIA. As SX Factor’s founder, he brings clarity, courage, and the commitment to build businesses that last.`,
    image: Leader1,
  },
  {
    name: "Shamina Noor Nordin",
    title: "Director",
    bio: `Shamina Nordin is a dynamic leader and strategic operator, serving as a Director at both SX Factor Sdn Bhd and Airdroitech Sdn Bhd. With a career spanning over a decade, Shamina has been instrumental in driving growth, fostering innovation, and building high-performance teams.

At SX Factor, she plays a pivotal role in business advisory services, shaping the firm's strategic direction and expanding its portfolio. At Airdroitech, she oversees operations and strategy, supporting finance shared services and software solutions.

Shamina is known for her hands-on leadership style, commitment to continuous improvement, and ability to build collaborative, high-performing teams. She champions structured, scalable solutions and fosters a culture of excellence and innovation.`,
    image: Leader2,
  },
];

const Leaders = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Use the Header component */}
      <Header
         imageSrc={HeadLeader} // Pass the header background image for the Leaders page
        title="Meet Our Leaders"             // Title for the Leaders page
        subtitle="Leadership that delivers. Vision that inspires." // Optional subtitle
      />

      <div className="pt-16 px-6 lg:px-20">
        <div className="relative">
          {/* Initial Leader Grid */}
          <AnimatePresence>
            {!selectedLeader && (
              <motion.div
                className="grid gap-10 md:grid-cols-2 border-2 border-black bg-white p-8 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {leadersData.map((leader, index) => (
                  <motion.div
                    key={index}
                    className="cursor-pointer flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:scale-105 transition"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedLeader(leader)}
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-40 h-40 object-cover rounded-xl mb-4 shadow-md"
                    />
                    <h2 className="text-xl font-semibold text-black">
                      {leader.name}
                    </h2>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expanded Leader Detail */}
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
                  className="w-52 h-52 object-cover rounded-xl mb-6 shadow-xl"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                />

                <motion.h2
                  className="text-3xl font-bold text-center"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {selectedLeader.name}
                </motion.h2>

                <motion.p
                  className="text-red-500 text-lg font-semibold mt-2 mb-4 text-center"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {selectedLeader.title}
                </motion.p>

                <motion.p
                  className="max-w-4xl text-sm text-gray-300 text-justify whitespace-pre-line overflow-y-auto max-h-[60vh] px-4 leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {selectedLeader.bio}
                </motion.p>

                <motion.button
                  className="mt-8 px-6 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition rounded"
                  onClick={() => setSelectedLeader(null)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
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
