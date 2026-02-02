import React from 'react';

const Services = () => {
  const services = [
    { title: 'Exercise Daily', icon: 'M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z' },
    { title: 'Healthy Dirts', icon: 'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' },
    { title: 'Individual Support', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
    { title: 'Workout Routins', icon: 'M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3z' }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-green-500 font-semibold mb-4 uppercase tracking-wide text-sm">WHAT WE OFFER</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Diet & Nutrition Services</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-8">
            {services.slice(0, 2).map((service, index) => (
              <div key={index} className="text-right group hover:transform hover:-translate-x-2 transition-all duration-300">
                <div className="flex items-start justify-end space-x-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-500 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">There are many variations of passages available</p>
                    <button className="text-green-500 font-semibold text-sm hover:underline uppercase">READ MORE</button>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg group-hover:bg-green-100 transition">
                    <svg className="w-14 h-14 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d={service.icon}/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80" alt="Cooking" className="w-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"/>
          </div>

          <div className="space-y-8">
            {services.slice(2, 4).map((service, index) => (
              <div key={index} className="group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-50 p-4 rounded-lg group-hover:bg-green-100 transition">
                    <svg className="w-14 h-14 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d={service.icon}/></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-500 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">There are many variations of passages available</p>
                    <button className="text-green-500 font-semibold text-sm hover:underline uppercase">READ MORE</button>
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
