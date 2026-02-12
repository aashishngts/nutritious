import React from "react";

export default function Projects() {
  const projects = [
    { img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80" },
    { img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80" },
    { img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80" },
    { img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80" },
    { img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&q=80" },
  ];

  return (
    <section className="py-24 bg-[#f8fbf9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3 auto-rows-[260px]">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              style={{ perspective: "1000px" }}
            >
              {/* Image */}
              <img
                src={project.img}
                alt={`Project ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Floating Content */}
              <div className="absolute bottom-6 left-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs tracking-widest text-[#86efac] mb-1">NUTRITION PROJECT</p>
                <h3 className="text-white text-lg font-semibold">Healthy Lifestyle Plan</h3>
              </div>

              {/* Soft Inner Border Glow */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-[#138f44]/40 transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
