import React from 'react';

const Blog = () => {
  const blogs = [
    { img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80', title: 'Tips For Staying Fit And Healthy Body' },
    { img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', title: 'Being Happy Is The Best Way To Grow' },
    { img: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&q=80', title: 'Give Your Body & Mind The Proper' }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-green-500 font-semibold mb-4 uppercase tracking-wide text-sm">OUR NEWS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Featured News And Advice</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img src={blog.img} alt={blog.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"/>
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-3 rounded text-center shadow-lg">
                  <div className="text-2xl font-bold">30</div>
                  <div className="text-xs font-semibold">AUG</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <span>0 Comments</span>
                  <span>Admin</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-500 transition">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-4">It is a long established fact that a reader will be distracted</p>
                <button className="text-green-500 font-semibold text-sm hover:underline uppercase">READ MORE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

