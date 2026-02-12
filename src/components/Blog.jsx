import React from "react";

export default function Blog() {
  const blogs = [
    {
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
      title: "Tips For Staying Fit And Healthy Body",
    },
    {
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
      title: "Being Happy Is The Best Way To Grow",
    },
    {
      img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&q=80",
      title: "Give Your Body & Mind The Proper Care",
    },
  ];

  return (
    <section id="blog" className="relative py-24 bg-[#f8fbf9] overflow-hidden">
      {/* Soft Background Accent */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-[#138f44]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#138f44] font-semibold mb-3 uppercase tracking-widest text-sm">
            Our News
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured{" "}
            <span className="relative inline-block">
              News & Advice
              <span className="absolute left-0 bottom-1 w-1/2 h-2 bg-[#138f44]/30 rounded"></span>
            </span>
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[#138f44]/10"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-[#138f44] text-white px-4 py-2 rounded-xl text-center shadow-lg">
                  <div className="text-lg font-bold leading-none">30</div>
                  <div className="text-xs uppercase tracking-wide">Aug</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-xs text-gray-500 uppercase tracking-wide">
                  <span>0 Comments</span>
                  <span>•</span>
                  <span>Admin</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#138f44] transition">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  Simple wellness insights and practical tips to help you live a
                  healthier and more balanced life.
                </p>

                <button className="text-[#138f44] font-semibold text-sm tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
