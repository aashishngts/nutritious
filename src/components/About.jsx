import React from "react";

export default function About() {
  const stats = [
    { number: "12+", label: "Years Experience" },
    { number: "687+", label: "Project Done" },
    { number: "368+", label: "Happy Customers" },
    { number: "25+", label: "Awards Won" },
  ];

  const offers = [
    { title: "Balance Body & Mind" },
    { title: "Personal Coaching" },
    { title: "Personalized Nutrition" },
    { title: "Sports Nutritionist" },
    { title: "Child Nutrition" },
    { title: "Support & Motivation" },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-[#f7faf8]">
      {/* 🌿 Soft Theme Background Accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#138f44]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#138f44]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#138f44] font-semibold mb-4 uppercase tracking-widest text-sm">
              About Nutritius
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Improving Life Through{" "}
              <span className="relative inline-block">
                Healthy Living
                <span className="absolute left-0 bottom-1 w-1/2 h-2 bg-[#138f44]/30 rounded"></span>
              </span>
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We create personalized wellness programs that help you build
              lasting healthy habits with the right balance of nutrition,
              movement, and motivation.
            </p>

            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Nutrition Special Offers
              </h3>

              <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                {offers.map((offer, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-[#138f44] font-bold">✓</span>
                    <span className="text-gray-700 text-sm">{offer.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="relative inline-flex items-center justify-center px-9 py-3.5 rounded-4xl font-semibold text-white overflow-hidden group">
              {/* Gradient Background */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#138f44] via-[#16a34a] to-[#0f766e] transition-transform duration-500 group-hover:scale-105"></span>

              {/* Subtle Pattern Overlay */}
              <span className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_1px)] bg-[length:18px_18px]"></span>

              {/* Hover Shine Effect */}
              <span className="absolute -left-10 top-0 h-full w-10 bg-white/20 skew-x-12 transform group-hover:translate-x-[250%] transition-transform duration-700"></span>

              {/* Button Text */}
              <span className="relative z-10 tracking-wide    uppercase">
                Read More
              </span>
            </button>
          </div>

          {/* Center Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80"
              alt="Healthy food lifestyle"
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Stats */}
          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-[#138f44]/10"
              >
                <h3 className="text-4xl font-bold text-[#138f44] mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-sm font-semibold tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
