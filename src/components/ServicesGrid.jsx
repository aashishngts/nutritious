import React from "react";

export default function ServicesGrid() {
  const services = [
    {
      title: "Personal Nutrition Plan",
      desc: "Customized meal plans based on your goals, lifestyle and body needs.",
      icon: "🥗",
    },
    {
      title: "Weight Loss Program",
      desc: "Healthy & sustainable fat loss journey with weekly progress tracking.",
      icon: "⚖️",
    },
    {
      title: "Muscle Gain Nutrition",
      desc: "High-protein structured diet + performance-focused routine support.",
      icon: "💪",
    },
    {
      title: "Diabetes Diet Guidance",
      desc: "Balanced meals for sugar control with smart carb management tips.",
      icon: "🩺",
    },
    {
      title: "Sports Nutrition Support",
      desc: "Pre-workout & post-workout nutrition strategies to boost stamina.",
      icon: "🏋️",
    },
    {
      title: "Healthy Lifestyle Coaching",
      desc: "Habits + food + mindset coaching to build a consistent routine.",
      icon: "🌿",
    },
  ];

  return (
    <section className="relative py-24 bg-[#f8fbf9] overflow-hidden">
      {/* Soft Background Accent */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#138f44]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#138f44] uppercase tracking-widest text-sm font-semibold mb-3 flex justify-center items-center gap-2">
            <span className="w-1 h-5 bg-[#138f44] inline-block"></span>
            What We Offer
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our{" "}
            <span className="relative inline-block">
              Nutrition Services
              <span className="absolute left-0 bottom-1 w-1/2 h-2 bg-[#138f44]/30 rounded"></span>
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#138f44]/20"
            >
              {/* Icon */}
              <div className="relative w-16 h-16 flex items-center justify-center mb-6">
                <div className="absolute inset-0 bg-[#138f44]/10 rounded-xl group-hover:scale-110 transition"></div>
                <span className="relative text-2xl">{item.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Link Button */}
              <button className="text-[#138f44] font-semibold text-sm tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More →
              </button>
            </div> 
          ))}
        </div>
      </div>
    </section>
  );
}
