import React from "react";

const GetInTouch = () => {
  return (
    <section className="relative w-full md:py-28 py-14 bg-gradient-to-b from-white to-[#f6fbf7] overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute -top-32 right-0 w-[400px] h-[400px] bg-[#86b817]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Image */}
          <div className="relative">
            <div className="hidden md:block absolute -top-6 -left-6 w-full h-full border-4 border-[#86b817]/20 rounded-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80"
              alt="Get in touch"
              className="relative w-full md:h-[560px] h-100 object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Right Form */}
          <div>
            <p className="text-[#138f44] uppercase tracking-[4px] text-sm font-semibold mb-4 flex items-center gap-3">
              <span className="w-[3px] h-[18px] bg-[#138f44] inline-block"></span>
              Let's Talk
            </p>

            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Get In Touch
            </h2>

            <p className="text-gray-600 text-base leading-7 mb-8 max-w-md">
              Have questions about nutrition or fitness plans? Our experts are
              here to help.
            </p>

            <form className="space-y-5">
  {/* Row 1 */}
  <div className="grid md:grid-cols-2 gap-5">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[#86b817] focus:ring-2 focus:ring-[#86b817]/20 outline-none transition"
    />

    <input
      type="text"
      placeholder="Phone Number"
      className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[#86b817] focus:ring-2 focus:ring-[#86b817]/20 outline-none transition"
    />
  </div>

  <input
    type="email"
    placeholder="Email Address"
    className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[#86b817] focus:ring-2 focus:ring-[#86b817]/20 outline-none transition"
  />

  <input
    type="text"
    placeholder="Subject"
    className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[#86b817] focus:ring-2 focus:ring-[#86b817]/20 outline-none transition"
  />

  <textarea
    rows="3"
    placeholder="Write your message..."
    className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[#86b817] focus:ring-2 focus:ring-[#86b817]/20 outline-none transition resize-none"
  ></textarea>

  <button
    type="submit"
    className="mt-2 bg-[#138f44] hover:bg-[#0f7a3a] text-white px-10 py-3 rounded-full font-semibold uppercase tracking-wide transition shadow-md hover:shadow-lg"
  >
    Send Message
  </button>
</form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
