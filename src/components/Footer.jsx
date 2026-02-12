import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0f172a] to-[#0b1120] text-white overflow-hidden">
      
      {/* Soft green glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#138f44]/10 rounded-full blur-3xl"></div>

      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-14">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#138f44]/20 flex items-center justify-center text-[#138f44] text-xl">🌿</div>
              <span className="text-2xl font-bold tracking-wide">Nutritius</span>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Helping you build healthy habits through personalized nutrition,
              wellness coaching, and balanced lifestyle programs.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-[#138f44] rounded-lg flex items-center justify-center transition"
              >
                <span className="text-sm">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-[#138f44] rounded-lg flex items-center justify-center transition"
              >
                <span className="text-sm">in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-[#138f44] rounded-lg flex items-center justify-center transition"
              >
                <span className="text-sm">ig</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {["About Us", "Programs", "Testimonials", "Contact"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-[#86efac] transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              {[
                "Personal Nutrition",
                "Weight Loss Programs",
                "Sports Nutrition",
                "Lifestyle Coaching",
              ].map((s, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-[#86efac] transition">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <p className="text-gray-400 mb-3">
              The Queen's Walk, London SE1 7PB, United Kingdom
            </p>
            <p className="text-gray-400 mb-3">📞 1800-001-658</p>
            <p className="text-gray-400">✉️ info@nutritius.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Nutritius. All rights reserved.
      </div>

      {/* Scroll To Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-[#138f44] to-[#0f7638] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition"
      >
        ↑
      </button>
    </footer>
  );
}
