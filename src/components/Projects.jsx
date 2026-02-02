
import React, { useState } from 'react';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projects = [
    { img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80' },
    { img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80' },
    { img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80' },
    { img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80' },
    { img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80' }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-green-500 font-semibold mb-4 uppercase tracking-wide text-sm">EXPLORE OUR PROJECTS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Recently Completed Projects Done</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(0,5).map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={project.img} alt={`Project ${idx+1}`} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"/>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {[0, 1].map((idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-green-500 w-8' : 'bg-gray-300'}`}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


