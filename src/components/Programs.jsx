import React from "react";
import { FaDumbbell } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Programs() {
  return (
    <section>
      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Image Card */}
        <div className="relative group overflow-hidden h-80">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80"
            alt="Healthy nutrition"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 p-6 text-white">
            <p className="text-xs font-semibold tracking-widest text-[#138f44] mb-2">NUTRITION</p>
            <h3 className="text-xl font-bold">Weight Loss Program</h3>
            <p className="text-sm mt-2 text-gray-200">Smart meal plans for sustainable fat loss.</p>
          </div>
        </div>

        {/* Green Feature Card */}
        <div className="h-80 bg-gradient-to-br from-[#138f44] to-[#0f7638] flex flex-col items-center justify-center p-8 text-white text-center">
<div className="text-5xl text-[#ffffff] mb-4">
  <FaDumbbell />
</div>          <p className="text-xs font-semibold tracking-widest mb-2">FITNESS</p>
          <h3 className="text-2xl font-bold mb-3">Performance Coaching</h3>
          <p className="text-sm text-white/90">Strength, stamina, and endurance training programs.</p>
        </div>

        {/* Image Card */}
        <div className="relative group overflow-hidden h-80">
          <img
            src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&q=80"
            alt="Family health"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 p-6 text-white">
            <p className="text-xs font-semibold tracking-widest text-[#138f44] mb-2">FAMILY</p>
            <h3 className="text-xl font-bold">Child Nutrition</h3>
            <p className="text-sm mt-2 text-gray-200">Healthy growth through balanced meals.</p>
          </div>
        </div>

        {/* Light Feature Card */}
        <div className="h-80 bg-white flex flex-col items-center justify-center p-8 text-center border border-gray-100">
<div className="text-5xl text-[#138f44] mb-4">
  <FaLeaf />
</div>          <p className="text-xs font-semibold tracking-widest text-[#138f44] mb-2">WELLNESS</p>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Personal Nutrition</h3>
          <p className="text-sm text-gray-600">Custom plans tailored to your body and goals.</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-[#0f172a] to-[#1e293b] py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#138f4420,transparent_60%)]"></div>

        <div className="relative max-w-3xl mx-auto px-6">
          <button className="group relative w-20 h-20 bg-[#138f44] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl transition hover:scale-110">
  
  {/* Pulse Animation Ring */}
  <span className="absolute inset-0 rounded-full bg-[#138f44] opacity-30 animate-ping"></span>

  {/* Play Icon */}
  <FaPlay className="text-white text-xl ml-1 relative z-10" />
</button>


          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted by More Than 650,000 Happy People
          </h2>

          <p className="text-gray-300 mb-10">
            Join thousands who improved their lifestyle with our expert nutrition and fitness guidance.
          </p>

          <Link to="/contact" className="bg-white text-gray-900 px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition shadow-md">
            Make Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
