import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    bg: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1800&q=80",
    tag: "Great Experience In Nutrition",
    title: "Smart Nutrition Choices For a Strong Body & Peaceful Soul",
    desc: "Discover how the right food choices can transform your energy, mood, and overall well-being every single day.",
  },
  {
    id: 2,
    bg: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1800&q=80",
    tag: "Healthy Lifestyle Programs",
    title: "Eat Smart, Live Better Every Day",
    desc: "Simple, sustainable nutrition habits tailored to your goals — whether it's weight loss, muscle gain, or more energy.",
  },
  {
    id: 3,
    bg: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1800&q=80",
    tag: "Personal Diet & Fitness Coaching",
    title: "Fuel Your Body Right, Unlock Your True Potential",
    desc: "Balanced nutrition + smart training + proper recovery = stronger body, sharper mind, and lasting results.",
  },
  {
    id: 4,
    bg: "https://parade.com/.image/w_3840,q_auto:good,c_limit/MjEzNTk3NjE3NzAyMDUzMzI3/what-happens-to-your-body-if-you-eat-a-salad-every-day.jpg",
    tag: "Daily Fresh Salads",
    title: "One Salad a Day Keeps the Doctor Away",
    desc: "Add nutrient-packed greens, colorful veggies & lean proteins to your routine for glowing skin and better immunity.",
  },
  {
    id: 5,
    bg: "https://simplegreensmoothies.com/wp-content/uploads/tropical-smoothie-bowl-mango-healthy-plant-based-4.jpg",
    tag: "Superfood Smoothie Bowls",
    title: "Start Your Day with a Tropical Energy Boost",
    desc: "Fresh fruits, nuts, seeds and plant-based goodness — the perfect breakfast for busy mornings and active lifestyles.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrent(index);

  return (
    <section className="lg:bannerhomepage relative h-[75vh] sm:h-[85vh] lg:h-screen w-full overflow-hidden font-poppins">
      {/* Background Image */}
      <div
        key={current}
        className="absolute inset-0 bg-cover bg-center animate-fade"
        style={{ backgroundImage: `url(${slides[current].bg})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10  lg:mt-10 mt-14 flex h-full items-center justify-center lg:justify-start px-6 sm:px-12 lg:px-20 max-w-full mx-auto">
        <div className="captiontext text-center lg:text-left text-white animate-fadeIn max-w-xl lg:max-w-3xl">
          <span className="tagsline inline-block mb-4 rounded-full bg-[#86b817]/20 px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#86b817]">
            {slides[current].tag}
          </span>

          <h1 className="text-xl mt-5 sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            {slides[current].title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8">
            {slides[current].desc}
          </p>

          <div className="flex flex-row gap-4 justify-center lg:justify-start mt-6">
            <Link
              to="/contact"
              className="rounded-lg bg-[#138f44] px-4 py-2 text-sm md:text-base md:px-8 md:py-3 font-semibold uppercase tracking-wide transition"
            >
              Get Started
            </Link>

            <Link
              to="/services"
              className="rounded-lg border border-white/40 bg-white/10 px-4 py-2 text-sm md:text-base md:px-8 md:py-3 font-semibold uppercase tracking-wide backdrop-blur transition"
            >
              Learn More
            </Link>
          </div>

          {/* Dots */}
          <div className="dotsbutton flex justify-center lg:justify-start gap-3 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-3 rounded-full transition-all ${
                  current === i ? "w-8 bg-[#86b817]" : "w-3 bg-white/40"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
