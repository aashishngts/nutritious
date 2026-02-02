import React from "react";

const GetInTouch = () => {
  return (
    <section className="w-full bg-white pb-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Image */}
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80"
              alt="get in touch"
              className="w-full h-[520px] object-cover"
            />
          </div>

          {/* Right Form */}
          <div className="w-full">
            <p className="text-[#86b817] uppercase tracking-[3px] text-[13px] font-semibold mb-2 flex items-center gap-2">
              <span className="w-[2px] h-[16px] bg-[#86b817] inline-block"></span>
              Let's Talk
            </p>

            <h2 className="text-[52px] font-extrabold text-[#222] leading-[1.1] mb-4">
              Get In Touch
            </h2>

            <p className="text-[#777] text-[16px] leading-7 mb-8 max-w-[520px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#f7f7f7] px-6 py-4 outline-none text-[#666]"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-[#f7f7f7] px-6 py-4 outline-none text-[#666]"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#f7f7f7] px-6 py-4 outline-none text-[#666]"
              />

              <input
                type="text"
                placeholder="subject"
                className="w-full bg-[#f7f7f7] px-6 py-4 outline-none text-[#666]"
              />

              <textarea
                rows="6"
                placeholder="Write Your Message"
                className="w-full bg-[#f7f7f7] px-6 py-4 outline-none text-[#666] resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-[#86b817] hover:bg-[#77a713] text-white px-10 py-4 font-semibold tracking-[2px] uppercase transition"
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
