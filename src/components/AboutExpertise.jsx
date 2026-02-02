import React from "react";

const AboutExpertise = () => {
  const items = [
    {
      title: "Child Nutrition",
      desc: "It is a long established fact that a reader will be distracted the readable content",
      icon: "🍬",
    },
    {
      title: "Personal Coaching",
      desc: "It is a long established fact that a reader will be distracted the readable content",
      icon: "🥕",
    },
    {
      title: "Sports Nutritionist",
      desc: "It is a long established fact that a reader will be distracted the readable content",
      icon: "🏋️",
    },
    {
      title: "Fitness Performance",
      desc: "It is a long established fact that a reader will be distracted the readable content",
      icon: "🥗",
    },
  ];

  return (
    <section className="w-full bg-white py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4">
        <p className="text-[#86b817] uppercase tracking-[3px] text-[13px] font-semibold mb-3 text-center flex justify-center items-center gap-2">
          <span className="w-[2px] h-[16px] bg-[#86b817] inline-block"></span>
          Why Choose Us
        </p>

        <h2 className="text-[58px] md:text-[64px] font-extrabold text-[#222] text-center leading-[1.1] mb-16">
          Our Main Areas Of Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, idx) => (
            <div key={idx} className="bg-[#f7f7f7] p-10">
              <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center mb-8 relative">
                <span className="absolute -left-2 -top-2 w-10 h-10 bg-[#86b817] rounded-full"></span>
                <span className="relative text-[34px]">{item.icon}</span>
              </div>

              <h3 className="text-[22px] font-bold text-[#222] mb-4">
                {item.title}
              </h3>

              <p className="text-[#777] text-[15px] leading-7 mb-6">
                {item.desc}
              </p>

              <a
                href="#"
                className="text-[#86b817] uppercase tracking-[2px] text-[13px] font-semibold underline underline-offset-4"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutExpertise;
