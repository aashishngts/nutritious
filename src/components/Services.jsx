import React from "react";
import {
  FaDumbbell,
  FaAppleAlt,
  FaUserFriends,
  FaClipboardCheck,
} from "react-icons/fa";

const Services = () => {
  const services = [
    { title: "Exercise Daily", icon: <FaDumbbell /> },
    { title: "Healthy Diets", icon: <FaAppleAlt /> },
    { title: "Individual Support", icon: <FaUserFriends /> },
    { title: "Workout Routines", icon: <FaClipboardCheck /> },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-14">
        <div className="text-center mb-16">
          <p className="text-green-500 font-semibold mb-4 uppercase tracking-wide text-sm">
            WHAT WE OFFER
          </p>
          <h2 className="text-2xl lg:text-5xl font-bold text-gray-900">
            Our Diet & Nutrition Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Left */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80"
              alt="Cooking"
              className="w-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Services List */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group hover:transform hover:translate-x-2 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-4 rounded-lg group-hover:bg-green-100 transition flex items-center justify-center shrink-0">
                    <div className="text-green-500 text-4xl">
                      {service.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-500 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-3">
                      There are many variations of passages available
                    </p>

                    <button className="text-green-500 font-semibold text-sm hover:underline uppercase">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
