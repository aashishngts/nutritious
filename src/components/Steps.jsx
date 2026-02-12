import React from "react";
import { FaWeight, FaRunning, FaUserTie, FaAppleAlt } from "react-icons/fa";

export default function Steps() {
  const steps = [
  { num: "01", title: "Weight Loss Program", icon: <FaWeight /> },
  { num: "02", title: "Fitness Performance", icon: <FaRunning /> },
  { num: "03", title: "Personal Coaching", icon: <FaUserTie /> },
  { num: "04", title: "Child Nutrition", icon: <FaAppleAlt /> },
];


  return (
    <section className="relative py-24 bg-[#f8fbf9] overflow-hidden">
      {/* Soft Theme Background Accent */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-[#138f44]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-full mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#138f44] font-semibold mb-3 uppercase tracking-widest text-sm">
            How To Start
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            It's Easy To{" "}
            <span className="relative inline-block">
              Start Today
              <span className="absolute left-0 bottom-1 w-1/2 h-2 bg-[#138f44]/30 rounded"></span>
            </span>
            !
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Big Step Number */}
              <span className="absolute top-2 right-4 text-7xl font-bold text-[#138f44]/10 select-none">
                {step.num}
              </span>

              <div className="w-14 h-14 flex items-center justify-center bg-[#138f44]/10 text-[#138f44] rounded-xl mb-5 transition group-hover:scale-110 text-2xl">
  {step.icon}
</div>


              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#138f44] transition">
                {step.title}
              </h3>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Simple guided steps to begin your transformation journey with expert support.
              </p>

              {/* Link */}
              <button className="text-[#138f44] font-semibold text-sm tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More →
              </button>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#138f44]/0 via-[#138f44]/0 to-[#138f44]/10 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
