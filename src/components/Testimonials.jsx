import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "David Matthews",
      role: "Nutrition Client",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
      text: "The personalized nutrition plan completely changed my energy levels and helped me build a sustainable healthy lifestyle.",
    },
    {
      name: "Danial Frankie",
      role: "Fitness Client",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
      text: "I finally found a routine that works for me. The coaching and food guidance were simple and effective.",
    },
    {
      name: "Micheal Baker",
      role: "Wellness Client",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
      text: "Professional, supportive, and motivating. I feel healthier and more confident than ever before.",
    },
  ];

  return (
    <section id="testimonials" className="relative py-18 bg-gradient-to-b from-[#f8fbf9] to-white overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#138f44]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-14">        {/* Heading */}
        <div className="text-center md:mb-20 mb-10">
          <p className="text-[#138f44] font-semibold mb-3 uppercase tracking-widest text-sm">
            Testimonials
          </p>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900">
            What Our{" "}
            <span className="relative inline-block">
              Happy Clients Say
              <span className="absolute left-0 bottom-1 w-1/2 h-2 bg-[#138f44]/30 rounded"></span>
            </span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group relative bg-white/70 backdrop-blur-xl border border-[#138f44]/10 rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 text-7xl text-[#138f44]/10 group-hover:text-[#138f44]/20 transition">
                “
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed mb-10 relative z-10">
                {t.text}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition"
                  />
                  <span className="absolute inset-0 rounded-full ring-2 ring-[#138f44]/30 group-hover:ring-[#138f44]/60 transition"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-[#138f44] font-medium">{t.role}</p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#138f44]/0 via-[#138f44]/0 to-[#138f44]/10 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
