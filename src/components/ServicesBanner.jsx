import React from "react";

const ServicesBanner = () => {
  return (
    <section
      className="w-full h-[300px] md:h-[360px] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1800&q=80)",
      }}
    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative max-w-[1200px] mx-auto px-4 h-full flex items-center">
        <div>
          <h1 className="text-[58px] md:text-[72px] font-extrabold text-[#222] leading-tight">
            Services
          </h1>

          
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
