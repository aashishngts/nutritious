import React from "react";
import { Link } from "react-router-dom";
const ServicesCTA = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Soft Glow Accents */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[300px] bg-[#86b817]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        
        <p className="text-[#86b817] uppercase tracking-[4px] text-sm font-semibold mb-4">
          Start Your Wellness Journey
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Your Healthier Life <br />
          <span className="text-[#138f44]">Begins Today</span>
        </h2>

        <p className="text-gray-600 text-lg leading-8 mb-10">
          Small daily nutrition changes create powerful long-term results. 
          Let our experts guide you with a plan built just for your body and lifestyle.
        </p>

        {/* Premium Gradient Button */}
        <button className="relative inline-flex items-center justify-center px-12 py-5 rounded-full font-semibold text-white overflow-hidden group">
          <span className="absolute inset-0 bg-gradient-to-r from-[#138f44] via-[#16a34a] to-[#0f766e] transition-transform duration-500 group-hover:scale-105"></span>
          <span className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_1px)] bg-[length:18px_18px]"></span>
          <span className="absolute -left-10 top-0 h-full w-10 bg-white/20 skew-x-12 transform group-hover:translate-x-[250%] transition-transform duration-700"></span>
          <Link to="/contact" className="relative z-10 tracking-wider uppercase">
            Book Appointment
          </Link>
        </button>

      </div>
    </section>
  );
};

export default ServicesCTA;
