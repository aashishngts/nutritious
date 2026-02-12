import React from "react";

export default function AboutBanner() {
  return (
    <section
      className="relative w-full h-[280px] md:h-[340px] bg-[length:120%] md:bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1800&q=80)",
      }}
    >
      {/* Left → Right Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      <div className="relative max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-14 text-white w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-center md:text-left">
          About Us
        </h1>

        
      </div>
    </section>
  );
}
