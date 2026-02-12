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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-green-500 font-semibold mb-4 uppercase tracking-wide text-sm">
            WHAT WE OFFER
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our Diet & Nutrition Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-8">
            {services.slice(0, 2).map((service, index) => (
              <div
                key={index}
                className="text-right group hover:transform hover:-translate-x-2 transition-all duration-300"
              >
                <div className="flex flex-row md:flex-row items-start gap-4">
  
  {/* Icon Box */}
  <div className="bg-green-50 p-4 rounded-xl group-hover:bg-green-100 transition shrink-0">
    <div className="text-green-500 text-4xl md:text-5xl">
      {service.icon}
    </div>
  </div>

  {/* Text Content */}
  <div className="flex-1 text-left md:text-end">
    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-500 transition-colors">
      {service.title}
    </h3>

    <p className="text-gray-600 text-sm mb-2">
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

          <div>
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80"
              alt="Cooking"
              className="w-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-8">
            {services.slice(2, 4).map((service, index) => (
              <div
                key={index}
                className="group hover:transform hover:translate-x-2 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-50 p-4 rounded-lg group-hover:bg-green-100 transition flex items-center justify-center">
                    <div className="text-green-500 text-5xl">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
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
