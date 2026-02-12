import React from "react";

const features = [
  {
    title: "Personalized Nutrition",
    desc: "Smart meal plans tailored to your body type, lifestyle, and wellness goals for lasting results.",
    icon: "🥗",
  },
  {
    title: "Healthy Diet Programs",
    desc: "Sustainable eating habits designed to boost energy, improve digestion, and support overall health.",
    icon: "💚",
  },
  {
    title: "Weight Loss Program",
    desc: "Science-backed strategies that help you burn fat, build confidence, and maintain a healthy weight.",
    icon: "⚖️",
  },
];

export default function HeroFeatures() {
  return (
    <section className="pt-14 px-6">
      <div className="max-w-full mx-auto px-10">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Why Choose{" "}
            <span className="relative inline-block">
              Healthy Living
              <span className="absolute left-0 bottom-1 w-1/2 h-2 bg-[#138f44]/30 rounded"></span>
            </span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Simple habits, smart nutrition, and expert guidance to help you feel your best every day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Soft Gradient Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#138f44]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-xl bg-[#138f44]/10 text-2xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
