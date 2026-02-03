import React from "react";

const HeroFeatures = () => {
  return (
    <div className="mt-14 lg:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white shadow-sm">
        {/* Card 1 */}
        <div className="p-8 border-r border-[#eeeeee]">
          <div className="mb-4">
            <span className="text-[#86b817] text-[34px]">⟡</span>
          </div>
          <h3 className="text-[16px] font-bold text-[#111111] mb-2">
            Our Values
          </h3>
          <p className="text-[#777777] text-[13px] leading-6">
           Since a healthy diet and physical fitness go hand-in-hand and are an integral part of one another,
            <span className="font-semibold text-green-600"> DIET WINDOW </span> has made 
           it a priority to offer all a wealth of diverse information,
            to fight diseases and stay healthy via effective diet.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-8 border-r border-[#eeeeee]">
          <div className="mb-4">
            <span className="text-[#86b817] text-[34px]">⟡</span>
          </div>
          <h3 className="text-[16px] font-bold text-[#111111] mb-2">
            Expert Team
          </h3>
          <p className="text-[#777777] text-[13px] leading-6">
            We are very proud to have established professionals in the diet, 
            health, safety and fitness profession to share best information with 
            you via their practice and aid to suffice your knowledge on all healthy diet; 
            disease related paradigms wherever we can.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8">
          <div className="mb-4">
            <span className="text-[#86b817] text-[34px]">⟡</span>
          </div>
          <h3 className="text-[16px] font-bold text-[#111111] mb-2">
            Our Mission
          </h3>
          <p className="text-[#777777] text-[13px] leading-6">
            <span className="font-semibold text-green-600"> DIET WINDOW </span> with the mission to save lives by disseminating vital health and diet information, 
            in homes and communities, 
            and on the road through leadership, research, education and advocacy.
          </p>
        </div>
      </div>

      {/* Bottom Small Text */}
      <p className="text-center text-[12px] text-[#999999] mt-6">
        Challenges Are Just Opportunities In Disguise{" "}
        <span className="text-[#86b817] cursor-pointer">Take the challenge</span>
      </p>
    </div>
  );
};

export default HeroFeatures;
