import React, { useEffect, useState } from "react";

const Hero = () => {
  const slides = [
    {
      id: 1,
      bg: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1800&q=80",
      tag: "Great Experience In Nutrition",
      title: (
        <>
          Smart Nutrition Choices <br /> For a Strong Body & Peaceful Soul
        </>
      ),
      desc: "Discover how the right food choices can transform your energy, mood, and overall well-being every single day.",
    },
    {
      id: 2,
      bg: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1800&q=80",
      tag: "Healthy Lifestyle Programs",
      title: (
        <>
          Eat Smart <br /> Live Better Every Day
        </>
      ),
      desc: "Simple, sustainable nutrition habits tailored to your goals — whether it's weight loss, muscle gain, or more energy.",
    },
    {
      id: 3,
      bg: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1800&q=80",
      tag: "Personal Diet & Fitness Coaching",
      title: (
        <>
          Fuel Your Body Right <br /> Unlock Your True Potential
        </>
      ),
      desc: "Balanced nutrition + smart training + proper recovery = stronger body, sharper mind, and lasting results.",
    },
    {
      id: 4,
      bg: "https://parade.com/.image/w_3840,q_auto:good,c_limit/MjEzNTk3NjE3NzAyMDUzMzI3/what-happens-to-your-body-if-you-eat-a-salad-every-day.jpg",
      tag: "Daily Fresh Salads",
      title: (
        <>
          One Salad a Day <br /> Keeps the Doctor Away
        </>
      ),
      desc: "Add nutrient-packed greens, colorful veggies & lean proteins to your routine for glowing skin and better immunity.",
    },
    {
      id: 5,
      bg: "https://simplegreensmoothies.com/wp-content/uploads/tropical-smoothie-bowl-mango-healthy-plant-based-4.jpg",
      tag: "Superfood Smoothie Bowls",
      title: (
        <>
          Start Your Day with <br /> Tropical Energy Boost
        </>
      ),
      desc: "Fresh fruits, nuts, seeds and plant-based goodness — the perfect breakfast for busy mornings and active lifestyles.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="mt-20 relative w-full h-[70vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] xl:h-screen overflow-hidden">
      {/* Multiple backgrounds with crossfade */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.bg})` }}
        />
      ))}

      {/* Strong overlay – makes text readable on ALL images */}
      <div className="absolute inset-0 bg-black/55" />

        {/* Main content */}
      <div className="relative z-10 flex h-full items-center px-5 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div
          key={current} // remount → animation restarts on slide change
          className="w-full max-w-3xl text-center lg:text-left animate-fade-up opacity-0"
        >
          <div className="inline-block mb-4 md:mb-5 rounded-full bg-[#86b817]/25 px-5 py-2 text-sm md:text-base font-semibold uppercase tracking-wider text-[#86b817] backdrop-blur-sm">
            {slides[current].tag}
          </div>

          <h1 className="mb-5 md:mb-6 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            {slides[current].title}
          </h1>

          <p className="mb-8 md:mb-10 text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] max-w-2xl mx-auto lg:mx-0">
            {slides[current].desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
            <button className="min-w-[160px] rounded-lg bg-[#86b817] px-8 py-3.5 md:py-4 font-semibold uppercase tracking-wider text-white hover:bg-[#77a713] transition shadow-lg hover:shadow-xl">
              Get Started
            </button>

            <button className="min-w-[160px] rounded-lg bg-white/15 backdrop-blur-md px-8 py-3.5 md:py-4 font-semibold uppercase tracking-wider text-white border border-white/40 hover:bg-white/25 transition shadow-lg">
              Learn More
            </button>
          </div>

          {/* Dots */}
          <div className="mt-10 flex justify-center lg:justify-start gap-3 md:gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-3.5 rounded-full transition-all duration-300 ${
                  current === i
                    ? "w-10 bg-[#86b817] shadow-md"
                    : "w-3.5 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;