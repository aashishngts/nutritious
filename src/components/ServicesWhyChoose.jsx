import React from "react";
import { Link } from "react-router-dom";

const ServicesWhyChoose = () => {
  const points = [
    "Certified dieticians & nutrition experts",
    "Personalized meal plans for every body type",
    "Realistic weekly goals with progress check-ins",
    "Balanced approach — no extreme diet pressure",
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white to-[#f6fbf7] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 w-[450px] h-[450px] bg-[#86b817]/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#138f44]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left Image */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[#86b817]/20 rounded-3xl"></div>
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80"
            alt="Healthy food"
            className="relative w-full h-[260px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-[#138f44] uppercase tracking-[4px] text-sm font-semibold mb-4 flex items-center gap-3">
            <span className="w-[3px] h-[18px] bg-[#138f44] inline-block"></span>
            Why Choose Us
          </p>

          <h2 className="md:text-5xl text-2xl  font-extrabold text-gray-900 leading-tight mb-6">
            Healthy Results With <br />
            <span className="text-[#138f44]">Smart Nutrition</span>
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-10 max-w-xl">
            We focus on long-term health improvements, not short-term quick fixes.
            Our programs are simple, practical, and designed to fit naturally into
            your daily lifestyle.
          </p>

          <div className="space-y-5 mb-12">
            {points.map((p, i) => (
              <div key={i} className="flex items-start gap-4 text-gray-700">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#86b817]/15 text-[#86b817] font-bold">
                  ✓
                </span>
                <span className="text-lg leading-7">{p}</span>
              </div>
            ))}
          </div>

          {/* Premium Button */}
          {/* <button className="relative inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold text-white overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-[#138f44] via-[#16a34a] to-[#0f766e] transition-transform duration-500 group-hover:scale-105"></span>
            <span className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_1px)] bg-[length:18px_18px]"></span>
            <span className="absolute -left-10 top-0 h-full w-10 bg-white/20 skew-x-12 transform group-hover:translate-x-[250%] transition-transform duration-700"></span>
            <Link to="/contact" className="relative z-10 tracking-wider uppercase">
              Book Consultation
            </Link>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesWhyChoose;
