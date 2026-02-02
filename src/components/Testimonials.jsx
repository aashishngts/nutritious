import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'David Matthews', role: 'NUTRITION', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
    { name: 'Danial Frankie', role: 'NUTRITION', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
    { name: 'Micheal Baker', role: 'NUTRITION', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-green-500 font-semibold mb-4 uppercase tracking-wide text-sm">TESTIMONIALS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">What Our Customer Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <img src={t.img} alt={t.name} className="w-24 h-24 rounded-full object-cover border-4 border-green-100"/>
                  <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{t.name}</h3>
                <p className="text-green-500 text-sm font-semibold">{t.role}</p>
              </div>
              <p className="text-gray-600 text-center mb-6">There are many variations of passages of Lorem Ipsum available</p>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;