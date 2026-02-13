import React from "react";

import {
  FaUtensils,
  FaPersonCircleMinus,
  FaDumbbell,
  FaPersonRunning,
  FaLeaf,
  FaHeartPulse,
} from "react-icons/fa6";

export default function ServicesGrid() {
  const services = [
    {
      title: "Personal Nutrition Plan",
      desc: "Customized meal plans based on your goals, lifestyle and body needs.",
      icon: <FaUtensils />,
    },
    {
      title: "Weight Loss Program",
      desc: "Healthy & sustainable fat loss journey with weekly progress tracking.",
      icon: <FaPersonCircleMinus />,
    },
    {
      title: "Muscle Gain Nutrition",
      desc: "High-protein structured diet + performance-focused routine support.",
      icon: <FaDumbbell />,
    },
    {
      title: "Diabetes Diet Guidance",
      desc: "Balanced meals for sugar control with smart carb management tips.",
      icon: <FaHeartPulse />,
    },
    {
      title: "Sports Nutrition Support",
      desc: "Pre-workout & post-workout nutrition strategies to boost stamina.",
      icon: <FaPersonRunning />,
    },
    {
      title: "Healthy Lifestyle Coaching",
      desc: "Habits + food + mindset coaching to build a consistent routine.",
      icon: <FaLeaf />,
    },
  ];

  return (
    <section className="relative pt-14 bg-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#138f44]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#86b817]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-14">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <p className="text-[#138f44] uppercase tracking-[4px] text-sm font-semibold mb-4">
            OUR SERVICES
          </p>

          <h2 className="md:text-5xl text-2xl  font-extrabold text-gray-900 leading-tight">
            Personalized Nutrition <br />
            <span className="text-[#138f44]">That Fits Your Life</span>
          </h2>

          <p className="text-gray-500 text-lg mt-6 max-w-2xl mx-auto">
            Every body is different. Our nutrition solutions are tailored to
            your goals, lifestyle, and health needs for sustainable results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="group bg-[#f8fbf9] p-6 rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-md text-3xl text-[#138f44] mb-6 group-hover:scale-110 group-hover:bg-[#138f44] group-hover:text-white transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>

              {/* <button className="text-[#138f44] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More →
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
