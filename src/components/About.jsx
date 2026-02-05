import React from 'react';

const About = () => {
  const stats = [
    { number: '546+', label: 'YEARS EXPERIENCE' },
    { number: '687+', label: 'PROJECT DONE' },
    { number: '368+', label: 'HAPPY CUSTOMERS' },
    { number: '856+', label: 'AWARD WIN' }
  ];

  const offers = [
    { title: 'Consulting Nutritionist and certified clinical researcher' },
    { title: 'Attended and presented research papers in various national and international conferences.' },
    { title: 'Published research papers in national and international journals indexed in Pubmed, Research gate etc.' },
    { title: 'Nutrition experts to various Government and non government organizations.' },
    { title: 'Represented nutritionists on various media platforms including TV channel, Radio channels, magazine and news papers.' },
    { title: 'Conducted many path breaking events and educational programs including workshops CME’s and conferences with reference to nutrition, dietary habits and other burning health issues for the community.' }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <p className="text-green-500 font-semibold mb-4 uppercase tracking-wide text-sm">
              ABOUT NUTRITIUS
            </p>
            <h2 className="md:text-4xl text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Raksha Goyal
            </h2>
            <h4 className='mb-2'>M.Sc. Foods and Nutrition</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With an M.Sc. in Foods and Nutrition, Raksha Goyal is a dedicated Consulting Nutritionist committed to improving lives through evidence-based dietary guidance and clinical research.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nutration Special Offers</h3>
              <div className="grid grid-cols-1 gap-3">
                {offers.map((offer, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-500 font-bold text-xl">✓</span>
                    <span className="text-gray-700 text-sm">{offer.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="bg-green-500 text-white px-8 py-3.5 rounded hover:bg-green-600 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="font-semibold">READ MORE</span>
            </button>
          </div>

          <div className="lg:col-span-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80" 
                alt="Woman eating healthy food" 
                className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg border-l-4 border-green-500 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-x-2"
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 text-sm font-semibold tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;