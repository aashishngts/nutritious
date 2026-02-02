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
            Personalized Nutrition
          </h3>
          <p className="text-[#777777] text-[13px] leading-6">
            how all this mistaken idea of it is a long established fact will be
            distracted by the readable of denoun established.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-8 border-r border-[#eeeeee]">
          <div className="mb-4">
            <span className="text-[#86b817] text-[34px]">⟡</span>
          </div>
          <h3 className="text-[16px] font-bold text-[#111111] mb-2">
            Health Diet Programs
          </h3>
          <p className="text-[#777777] text-[13px] leading-6">
            how all this mistaken idea of it is a long established fact will be
            distracted by the readable of denoun established.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8">
          <div className="mb-4">
            <span className="text-[#86b817] text-[34px]">⟡</span>
          </div>
          <h3 className="text-[16px] font-bold text-[#111111] mb-2">
            Weight Loss Program
          </h3>
          <p className="text-[#777777] text-[13px] leading-6">
            how all this mistaken idea of it is a long established fact will be
            distracted by the readable of denoun established.
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
