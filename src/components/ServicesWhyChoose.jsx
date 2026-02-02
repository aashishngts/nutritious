import React from "react";

const ServicesWhyChoose = () => {
  const points = [
    "Certified dieticians & nutrition experts",
    "Personalized meal plans for every body type",
    "Realistic weekly goals with progress check-ins",
    "Balanced approach — no extreme diet pressure",
  ];

  return (
    <section className="w-full bg-white pb-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80"
              alt="why choose"
              className="w-full h-[520px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-[#86b817] uppercase tracking-[3px] text-[13px] font-semibold mb-2 flex items-center gap-2">
              <span className="w-[2px] h-[16px] bg-[#86b817] inline-block"></span>
              Why Choose Us
            </p>

            <h2 className="text-[52px] font-extrabold text-[#222] leading-[1.1] mb-5">
              Healthy Results With <br /> Smart Nutrition
            </h2>

            <p className="text-[#777] text-[16px] leading-7 mb-8 max-w-[620px]">
              We focus on long-term health improvements, not short-term quick fixes.
              Our programs are simple, practical, and easy to follow for daily life.
            </p>

            <div className="space-y-4 mb-10">
              {points.map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-[#777]">
                  <span className="text-[#86b817] text-[18px] font-bold">✓</span>
                  <span className="text-[16px] leading-7">{p}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#86b817] hover:bg-[#77a713] text-white px-10 py-4 font-semibold tracking-[2px] uppercase transition flex items-center gap-2">
              <span className="text-[18px]">🍃</span> Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWhyChoose;
