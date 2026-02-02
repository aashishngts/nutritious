import React from "react";

const ContactInfoCards = () => {
  const cards = [
    {
      title: "Our Location",
      icon: "📍",
      lines: ["The Queen's Walk, Bishop's, London SE1", "7PB, UK"],
    },
    {
      title: "Our Contact",
      icon: "🎧",
      lines: ["+ (567) 1234-567-8900", "+ (567) 1234-567-8901"],
    },
    {
      title: "Mail Us",
      icon: "✉️",
      lines: ["info@peacefulthemes.com", "info2@peacefulthemes.com"],
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, idx) => (
            <div key={idx} className="bg-[#f7f7f7] py-16 px-10 text-center">
              <div className="w-[80px] h-[80px] mx-auto rounded-full bg-[#86b817] flex items-center justify-center text-white text-3xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-[28px] font-bold text-[#222] mb-4">
                {item.title}
              </h3>

              <div className="text-[#777] text-[16px] leading-8">
                {item.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
