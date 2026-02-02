import React from 'react';

const Steps = () => {
  const steps = [
    { num: '01', title: 'Weight Loss Program' },
    { num: '02', title: 'Fitness Performance' },
    { num: '03', title: 'Personal Coaching' },
    { num: '04', title: 'Child Nutrition' }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-green-500 font-semibold mb-4 uppercase tracking-wide text-sm">HOW TO START</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">It's Easy To Start Today!</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-4 right-4 text-8xl font-bold text-gray-200 opacity-30">{step.num}</div>
              <div className="relative z-10">
                <svg className="w-12 h-12 text-green-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-500 transition">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-4">There are many variations passages Lorem Isumum</p>
                <button className="text-green-500 font-semibold text-sm hover:underline uppercase">READ MORE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
