import React from 'react';

const Programs = () => {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="relative group overflow-hidden h-80">
          <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80" alt="Couple" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-xs font-semibold tracking-wider mb-2">NUTRITION</p>
            <h3 className="text-xl font-bold">Weight Loss Program</h3>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="h-80 bg-green-500 flex flex-col items-center justify-center p-6 text-white">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
          </svg>
          <p className="text-xs font-semibold tracking-wider mt-4 mb-2">NUTRITION</p>
          <h3 className="text-2xl font-bold text-center mb-3">Fitness Performance</h3>
          <p className="text-sm text-center">Lorem ipsum dolor sit amet elit.</p>
        </div>

        <div className="relative group overflow-hidden h-80">
          <img src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&q=80" alt="Family" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-xs font-semibold tracking-wider mb-2">NUTRITION</p>
            <h3 className="text-xl font-bold">Weight Loss Program</h3>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="h-80 bg-white border border-gray-200 flex flex-col items-center justify-center p-6">
          <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
          </svg>
          <p className="text-xs font-semibold tracking-wider mt-4 mb-2 text-green-500">NUTRITION</p>
          <h3 className="text-2xl font-bold text-center mb-3 text-gray-900">Fitness Performance</h3>
          <p className="text-sm text-center text-gray-600">Lorem ipsum dolor sit amet elit.</p>
        </div>
      </div>

      <div className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <button className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 hover:bg-green-600 transition-all duration-300 transform hover:scale-110 shadow-2xl">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Trusted By More Then 650,000 Happy People</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">There are many variations of passages of Lorem Ipsum available</p>
          <button className="bg-white text-gray-900 px-8 py-3.5 rounded hover:bg-gray-100 transition font-semibold">MAKE APPOINTMENT</button>
        </div>
      </div>
    </section>
  );
};

export default Programs;

