import React from "react";

const features = [
  {
    title: "Personalized Nutrition",
    desc: "Smart meal plans tailored to your body type, lifestyle, and wellness goals for lasting results.",
    icon: "../healthydietplate.png",
  },
  {
    title: "Healthy Diet Programs",
    desc: "Sustainable eating habits designed to boost energy, improve digestion, and support overall health.",
    icon: "../healthydietimg.png",
  },
  {
    title: "Weight Loss Program",
    desc: "Science-backed strategies that help you burn fat, build confidence, and maintain a healthy weight.",
    icon: "../weightlossimg.png",
  },
];

export default function HeroFeatures() {
  return (
    <section className="pt-14 pb-6 md:px-6">
      <div className="max-w-full mx-auto md:px-10 px-4">
        
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
        <div className="grid md:gap-8 gap-4 md:grid-cols-3">
  {features.map((item, index) => (
    <div
      key={index}
      className="group relative bg-white border border-gray-100 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
    >
      {/* Gradient Hover Border Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#138f44]/0 via-[#138f44]/0 to-[#138f44]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* Icon */}
      <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#138f44]/10 to-[#138f44]/5 text-2xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-inner">
        <img src={item.icon} alt="" className="w-8 h-8 object-contain" />
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#138f44] transition-colors duration-300">
        {item.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-gray-500 text-sm leading-relaxed">
        {item.desc}
      </p>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#138f44]/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
    </div>
  ))}
</div>


      </div>
    </section>
  );
}
