import React from "react";

const CTA = () => {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative w-full">
          <img
            src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=1200&q=80"
            alt="Woman"
            className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-full object-cover"
          />

          {/* Floating Image */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 md:top-10 md:right-10 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 animate-float-slow">
            <img
              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&q=80"
              alt="veggies"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="bg-gray-900 flex items-center p-8 sm:p-12 lg:p-20">
          <div className="max-w-xl w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6 leading-tight">
              Get Your Free Consulting
            </h2>

            <p className="text-gray-300 mb-7 sm:mb-8 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>

            {/* Contact Row (Responsive) */}
            <div className="space-y-4 mb-8">
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-x-3 text-sm sm:text-base">
                <span className="text-gray-400">Call</span>

                <a
                  href="tel:9876543221"
                  className="text-green-500 text-lg sm:text-xl font-bold"
                >
                  9876543221
                </a>

                <span className="text-gray-400 hidden sm:inline">OR</span>

                <span className="text-gray-400 sm:ml-2">Email:</span>

                <a
                  href="mailto:Email@gmail.com"
                  className="text-white hover:text-green-400 transition break-all"
                >
                  Email@gmail.com
                </a>
              </div>
            </div>

            {/* Button */}
            <button className="w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg font-semibold">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
