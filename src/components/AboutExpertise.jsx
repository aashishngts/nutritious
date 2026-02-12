import React from "react";
import { FiSmile, FiUser, FiActivity, FiHeart } from "react-icons/fi";

const AboutExpertise = () => {
  const items = [
    {
      title: "Child Nutrition",
      desc: "It is a long established fact that a reader will be distracted the readable content",
      icon: <FiSmile />,
    },
    {
      title: "Personal Coaching",
      desc: "It is a long established fact that a reader will be distracted the readable content",
      icon: <FiUser />,
    },
    {
      title: "Sports Nutritionist",
      desc: "It is a long established fact that a reader will be distracted the readable content",
      icon: <FiActivity />,
    },
    {
      title: "Fitness Performance",
      desc: "It is a long established fact that a reader will be distracted the readable content",
      icon: <FiHeart />,
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20 relative">
      <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-14">
        <p className="text-[#138f44] uppercase tracking-[3px] text-[13px] font-semibold mb-3 text-center flex justify-center items-center gap-2">
          <span className="w-[2px] h-[16px] bg-[#138f44] inline-block"></span>
          Why Choose Us
        </p>

        <h2 className="md:text-5xl text-2xl font-extrabold text-[#222] text-center leading-[1.1] mb-8 md:mb-16">
          Our Main Areas Of Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-100 rounded-2xl p-5 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-[#86b817]/10 flex items-center justify-center mb-6 transition group-hover:bg-[#138f44] group-hover:text-white">
                <div className="text-3xl text-[#138f44] group-hover:text-white transition">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#138f44] transition">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#138f44] font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutExpertise;
