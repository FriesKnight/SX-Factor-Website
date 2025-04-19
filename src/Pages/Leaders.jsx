import React from "react";
import Footer from "../components/Footer";
import Leader1 from "../assets/Faizal_Sample.png"; // Make sure this image exists

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
    image: "https://via.placeholder.com/150",
  },
];

const Leaders = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-28 px-6 lg:px-20">
      <h2 className="text-4xl md:text-5xl text-center mb-12 font-extrabold">
        Our <span className="text-red-600">Leaders</span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {leadersData.map((leader, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl shadow-md hover:shadow-red-600 hover:shadow-lg transition-transform duration-300 transform hover:scale-105 p-8 flex flex-col items-center text-center"
          >
            {/* Profile Image */}
            <img
              src={leader.image}
              alt={leader.name}
              className="w-40 h-40 object-cover rounded-full border-4 border-red-600 mb-6 shadow-md"
            />

            {/* Name & Title */}
            <h2 className="text-2xl font-bold">{leader.name}</h2>
            <p className="text-red-600 text-base font-semibold mt-1 mb-4">
              {leader.title}
            </p>

            {/* Full Bio */}
            <p className="text-gray-700 text-sm leading-relaxed text-justify whitespace-pre-line max-h-[500px] overflow-y-auto px-1">
              {leader.bio}
            </p>
          </div>
        ))}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Leaders;
