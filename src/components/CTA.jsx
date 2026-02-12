import React from "react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left Image */}
        <div className="relative w-full">
          <img
            src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=1200&q=80"
            alt="Healthy lifestyle"
            className="w-full h-[300px] sm:h-[380px] md:h-[460px] lg:h-full object-cover"
          />

          {/* Soft Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden"></div>

          {/* Floating Veggies */}
          
        </div>

        {/* Right Content */}
        <div className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center p-10 sm:p-14 lg:p-20 text-white overflow-hidden">
          
          {/* Soft Green Glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#138f44]/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-xl w-full">
            <p className="uppercase tracking-widest text-sm text-[#86efac] mb-3">
              Free Consultation
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Get Your Free <span className="text-[#86efac]">Health Consulting</span>
            </h2>

            <p className="text-gray-300 mb-8">
              Talk with our nutrition experts and start your journey toward a healthier, more energetic lifestyle today.
            </p>

            {/* Contact Row */}
            <div className="space-y-3 mb-10 text-sm sm:text-base">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-400">Call:</span>
                <a href="tel:9876543221" className="text-[#86efac] font-bold text-lg">
                  987 654 3221
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-400">Email:</span>
                <a
                  href="mailto:Email@gmail.com"
                  className="text-white hover:text-[#86efac] transition"
                >
                  Email@gmail.com
                </a>
              </div>
            </div>

            {/* Modern Gradient Button */}
            <button className="relative inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-[#138f44] via-[#16a34a] to-[#0f766e] transition-transform duration-500 group-hover:scale-105"></span>
              <span className="relative z-10 tracking-wide uppercase">Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
