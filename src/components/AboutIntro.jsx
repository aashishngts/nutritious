import React from "react";

const AboutIntro = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Images */}
          <div className="relative flex justify-center lg:justify-start">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"
              alt="about main"
              className="w-[420px] h-[520px] object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80"
              alt="about small"
              className="w-[280px] h-[220px] object-cover absolute bottom-[-40px] right-[-10px] border-[12px] border-white shadow-md"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-[#86b817] uppercase tracking-[3px] text-[13px] font-semibold mb-2 flex items-center gap-2">
              <span className="w-[2px] h-[16px] bg-[#86b817] inline-block"></span>
              About Nutritius
            </p>

            <h2 className="text-[52px] font-extrabold text-[#222] leading-[1.1] mb-5">
              Improving By The Inspier <br /> Healthy Living
            </h2>

            <p className="text-[#777] text-[16px] leading-7 mb-8 max-w-[650px]">
              There are many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable
            </p>

            {/* Two Icon Titles */}
            <div className="flex flex-col sm:flex-row gap-10 mb-8">
              <div className="flex items-center gap-4">
                <div className="text-[#86b817] text-[40px]">🥗</div>
                <h4 className="text-[20px] font-bold text-[#222] leading-7">
                  Motivation Program <br /> Suffered Alter
                </h4>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-[#86b817] text-[40px]">🏋️‍♀️</div>
                <h4 className="text-[20px] font-bold text-[#222] leading-7">
                  Motivation Comb <br /> Repetition
                </h4>
              </div>
            </div>

            {/* List */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-[#777] text-[16px]">
                <span className="text-[#86b817] text-[18px] font-bold">✓</span>
                There are many variations of passages of Lorem Ipsum available
              </div>

              <div className="flex items-center gap-3 text-[#777] text-[16px]">
                <span className="text-[#86b817] text-[18px] font-bold">✓</span>
                Contrary to popular belief, Lorem Ipsum is not simply random
              </div>

              <div className="flex items-center gap-3 text-[#777] text-[16px]">
                <span className="text-[#86b817] text-[18px] font-bold">✓</span>
                Lorem Ipsum is simply dummy text of the printing
              </div>
            </div>

            <button className="bg-[#86b817] hover:bg-[#77a713] text-white px-10 py-4 font-semibold tracking-[2px] uppercase transition flex items-center gap-2">
              <span className="text-[18px]">🍃</span> READ MORE
            </button>
          </div>
        </div>
      </div>

      {/* Floating Arrow */}
      
    </section>
  );
};

export default AboutIntro;
