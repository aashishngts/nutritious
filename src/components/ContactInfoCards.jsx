import React from "react";
import { FiMapPin, FiHeadphones, FiMail } from "react-icons/fi";


const ContactInfoCards = () => {
  const cards = [
  {
    title: "Our Location",
    icon: <FiMapPin />,
    lines: ["The Queen's Walk, Bishop's, London SE1", "7PB, UK"],
  },
  {
    title: "Our Contact",
    icon: <FiHeadphones />,
    lines: ["+ (567) 1234-567-8900", "+ (567) 1234-567-8901"],
  },
  {
    title: "Mail Us",
    icon: <FiMail />,
    lines: ["info@peacefulthemes.com", "info2@peacefulthemes.com"],
  },
];


  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f6fbf7]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {cards.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-5"
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#86b817] to-[#138f44] text-white text-2xl shadow-md group-hover:scale-110 transition">
  <span className="text-[22px]">{item.icon}</span>
</div>


            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#138f44] transition-colors">
                {item.title}
              </h3>

              <div className="text-gray-600 text-sm leading-6 space-y-1">
                {item.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfoCards;
