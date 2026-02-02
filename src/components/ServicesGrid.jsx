import React from "react";

const ServicesGrid = () => {
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
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Heading */}
        <p className="text-[#86b817] uppercase tracking-[3px] text-[13px] font-semibold mb-3 text-center flex justify-center items-center gap-2">
          <span className="w-[2px] h-[16px] bg-[#86b817] inline-block"></span>
          What We Offer
        </p>

        <h2 className="text-[56px] md:text-[64px] font-extrabold text-[#222] text-center leading-[1.1] mb-14">
          Our Nutrition Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f7f7f7] p-10 hover:shadow-md transition"
            >
              <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center mb-7 relative">
                <span className="absolute -left-2 -top-2 w-10 h-10 bg-[#86b817] rounded-full"></span>
                <span className="relative text-[34px]">{item.icon}</span>
              </div>

              <h3 className="text-[22px] font-bold text-[#222] mb-4">
                {item.title}
              </h3>

              <p className="text-[#777] text-[15px] leading-7 mb-7">
                {item.desc}
              </p>

              <button className="text-[#86b817] uppercase tracking-[2px] text-[13px] font-semibold underline underline-offset-4">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
