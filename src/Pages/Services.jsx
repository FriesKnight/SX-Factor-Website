import React from "react";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import ImageSlider from "../Components/ImageSlider";

import HeadService from "../assets/services.avif";
import advisory1 from "../assets/Advisory1.avif";
import advisory2 from "../assets/Advisory2.avif";
import advisory3 from "../assets/Advisory3.avif";
import finance1 from "../assets/Finance1.avif";
import finance2 from "../assets/Finance2.avif";
import finance3 from "../assets/Finance3.avif";
import recruit1 from "../assets/Recruitment1.avif";
import recruit2 from "../assets/Recruitment2.jpg";
import recruit3 from "../assets/Recruitment3.webp";

const services = [
    {
        title: "Business Advisory",
        description:
            "We provide strategic insights to help you make better financial and operational decisions. From budgeting and cash flow management to business restructuring, we support your journey at every stage.",
        images: [advisory1, advisory2, advisory3],
    },
    {
        title: "Financial & Accounting Transformation",
        description:
            "We streamline your finance function through automation, real-time reporting, and compliance support — giving you better control, accuracy, and visibility into your numbers.",
        images: [finance1, finance2, finance3],
    },
    {
        title: "Recruitment Services",
        description:
            "Finding the right people can be challenging. We help you source, screen, and select finance and operations talent that aligns with your company culture and growth plans — whether for permanent, contract, or interim roles.",
        images: [recruit1, recruit2, recruit3],
    },
];

const Services = () => {
    return (
        <div className="relative text-white min-h-screen font-serif overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-gray-800 z-0" />
            {/* <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:20px_20px] opacity-10 z-0" /> */}

            {/* Content */}
            <div className="relative z-10">
                <Header
                    imageSrc={HeadService}
                    title="Our Services"
                    subtitle="Smarter operations. Stronger growth."
                />

                <section className="py-24 px-6 lg:px-28 space-y-24">
                    {/* Section Header */}
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h2 className="text-5xl font-bold font-poppins tracking-tight text-red-500">
                            What We Offer
                        </h2>
                        <p className="text-xl text-white leading-relaxed font-lato">
                            At SX, we help businesses operate smarter and grow stronger.
                            With a focus on finance, strategy, and people, we offer practical
                            solutions tailored to your needs.
                        </p>
                    </div>

                    {/* Service Cards */}
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-gray-800 to-black backdrop-blur-sm rounded-xl p-8 shadow-xl transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl font-poppins"
                        >
                            <div
                                className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                    } items-center gap-10`}
                            >
                                {/* Image Slider */}
                                <div className="md:w-1/2 w-full h-[250px] md:h-[300px] rounded-xl overflow-hidden relative group">
                                    <ImageSlider images={service.images} />
                                </div>

                                {/* Text */}
                                <div className="md:w-1/2 w-full space-y-6">
                                    <h3 className="text-3xl font-bold text-white tracking-wide">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default Services;
