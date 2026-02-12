import React from "react";
import { FaAppleAlt, FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function AboutIntro() {
  return (
    <section className="relative bg-[#f9fbf8] py-20 overflow-hidden">
      {/* Subtle Side Accent Background */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[#138f44]/5 -z-10"></div>

      <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-14 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Image Side */}
        <div className="relative flex justify-center lg:justify-start">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"
            alt="Healthy food"
            className="w-full max-w-[520px] h-auto md:h-[520px] object-cover rounded-2xl shadow-lg"
          />

          <img
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80"
            alt="Fresh vegetables"
            className="hidden md:block w-[260px] h-[200px] object-cover rounded-xl absolute -bottom-8 -right-9 border-8 border-white shadow-md"
          />
        </div>

        {/* Content Side */}
        <div>
          <p className="text-[#138f44] uppercase tracking-[3px] text-sm font-semibold mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#138f44] inline-block"></span>
            About Nutritius
          </p>

          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Improving Life Through{" "}
            <span className="relative inline-block">
              Healthy Living
              <span className="absolute left-0 bottom-1 w-1/2 h-2 bg-[#138f44]/30 rounded"></span>
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
            We focus on building healthy routines with personalized nutrition
            and lifestyle plans that help you feel energized, confident, and balanced.
          </p>

          {/* Feature Points */}
          <div className="space-y-5 mb-10">
            <div className="flex items-start gap-4">
             <div className="text-[#138f44] text-2xl mt-1">
  <FaAppleAlt />
</div>

              <h4 className="text-lg font-semibold text-gray-800">
                Smart Nutrition Programs
              </h4>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#138f44] text-2xl mt-1">
  <FaDumbbell />
</div>
              <h4 className="text-lg font-semibold text-gray-800">
                Fitness & Lifestyle Coaching
              </h4>
            </div>
          </div>

          <Link to="/services" className="bg-[#138f44] hover:bg-[#0f7638] text-white px-10 py-4 font-semibold tracking-wide uppercase rounded-lg transition shadow-md hover:shadow-lg">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
