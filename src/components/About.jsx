import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
export default function About() {
  const stats = [
    { number: "12+", label: "Years Experience" },
    { number: "287+", label: "Projects Done" },
    { number: "268+", label: "Happy Customers" },
    { number: "25+", label: "Awards Won" },
  ];

  const offers = [
    "Balance Body & Mind",
    "Personal Coaching",
    "Personalized Nutrition",
    "Sports Nutritionist",
    "Child Nutrition",
    "Support & Motivation",
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-[#f6fbf7] overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#138f44]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE SIDE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900&q=80"
              alt="Healthy lifestyle"
              className="rounded-3xl shadow-2xl"
            />
            {/* Soft Decorative Shape */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#86b817]/10 rounded-3xl -z-10"></div>
          </div>

          {/* TEXT SIDE */}
          {/* === Replace your current text-column div with this === */}
<div className="max-w-xl">
  {/* Eyebrow */}
  <p className="text-[#138f44] font-semibold uppercase tracking-widest text-sm mb-3">
    About Nutritius
  </p>

  {/* Heading */}
  <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
    Improving Life Through{" "}
    <span className="text-[#138f44]">Healthy Living</span>
  </h2>

  {/* Description */}
  <p className="text-gray-600 leading-relaxed mb-8">
    We create personalized wellness programs that help you build lasting
    healthy habits with the right balance of nutrition, movement, and motivation.
  </p>

  {/* Offers — compact grid */}
  <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
    {offers.map((offer, index) => (
      <div key={index} className="flex items-center gap-3">
        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#138f44]/10 text-[#138f44] text-[12px] font-semibold">✓</span>
        <span className="text-gray-700 text-sm">{offer}</span>
      </div>
    ))}
  </div>

  {/* CTA — compact, left-aligned on large screens, full-width on small */}
  <div className="flex lg:w-auto w-40 justify-start">
    <button
      aria-label="Read more about Nutritius"
      className="relative inline-flex items-center justify-center  py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-semibold text-white overflow-hidden group shadow-md hover:shadow-lg transition w-full sm:w-auto max-w-[220px]"
    >
      {/* subtle gradient background */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#138f44] via-[#16a34a] to-[#0f766e] transform-gpu transition-transform duration-500 group-hover:scale-105" />
      {/* faint pattern / sheen, very subtle */}
      <span className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_1px)] bg-[length:14px_14px]" />
      {/* label */}
      <span className="relative z-10 flex items-center gap-3">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M5 12h14" stroke="rgba(255,255,255,0.95)" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 5l7 7-7 7" stroke="rgba(255,255,255,0.95)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <Link to="/about">Read More</Link>
      </span>
    </button>
  </div>
</div>

        </div>

        {/* STATS SECTION — integrated, not a separate bar */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-10">
  {stats.map((stat, index) => {
    const numericValue = parseInt(stat.number);

    return (
      <div
        key={index}
        className="bg-white p-8 rounded-2xl shadow-md border border-[#138f44]/10 text-center hover:shadow-xl transition"
      >
        <h3 className="text-4xl font-bold text-[#138f44] mb-2">
          <CountUp
            end={numericValue}
            duration={2.5}
            enableScrollSpy
            scrollSpyDelay={200}
          />
          +
        </h3>

        <p className="text-gray-600 text-sm font-medium uppercase tracking-wide">
          {stat.label}
        </p>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
}
