import React from "react";

const ContactBanner = () => {
  return (
    <section
      className="w-full h-[320px] md:h-[380px] bg-cover bg-center relative mt-20"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1800&q=80)",
      }}
    >
      {/* white overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative max-w-[1200px] mx-auto px-4 h-full flex items-center">
        <div>
          <h1 className="text-[52px] md:text-[64px] font-bold text-[#222] leading-tight">
            Contact Us
          </h1>

          
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
