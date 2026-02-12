import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  // ✅ DUMMY DATA (backend se baad me replace kar dena)
  const dummyBlogs = [
    {
      id: 1,
      title: "5 Healthy Breakfast Ideas For Busy People",
      description:
        "Start your day with energy. These quick breakfast ideas are healthy, simple and tasty.",
      category: "Nutrition",
      date: "Feb 02, 2026",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      title: "Weight Loss Tips That Actually Work",
      description:
        "No crash diets. Learn sustainable habits that help you lose weight without stress.",
      category: "Fitness",
      date: "Feb 01, 2026",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      title: "Best Foods For Glowing Skin & Strong Immunity",
      description:
        "Your skin reflects your diet. Here are the best foods for clear skin and immunity boost.",
      category: "Lifestyle",
      date: "Jan 30, 2026",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      title: "Healthy Dinner Plans You Can Follow Daily",
      description:
        "Simple dinner routine that helps you stay fit, light, and active throughout the week.",
      category: "Diet Plan",
      date: "Jan 28, 2026",
      image:
        "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      title: "What To Eat Pre & Post Workout",
      description:
        "Best pre/post workout food choices to improve energy, strength and muscle recovery.",
      category: "Workout",
      date: "Jan 25, 2026",
      image:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07a?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 6,
      title: "Hydration Guide: How Much Water You Need",
      description:
        "Water is the key. Learn how hydration helps your body function better and faster.",
      category: "Health",
      date: "Jan 22, 2026",
      image:
        "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?auto=format&fit=crop&w=900&q=80",
    },
  ];

  useEffect(() => {
    setBlogs(dummyBlogs);
  }, []);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Heading */}
        <p className="text-[#86b817] uppercase tracking-[3px] text-[13px] font-semibold mb-3 text-center flex justify-center items-center gap-2">
          <span className="w-[2px] h-[16px] bg-[#86b817] inline-block"></span>
          Latest Articles
        </p>

        <h2 className="text-[56px] md:text-[64px] font-extrabold text-[#222] text-center leading-[1.1] mb-14">
          Health & Nutrition Blog
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Pagination Dummy UI */}
        <div className="flex justify-center items-center gap-3 mt-14">
          <button className="w-12 h-12 bg-[#f7f7f7] text-[#222] font-semibold hover:bg-[#86b817] hover:text-white transition">
            1
          </button>
          <button className="w-12 h-12 bg-[#f7f7f7] text-[#222] font-semibold hover:bg-[#86b817] hover:text-white transition">
            2
          </button>
          <button className="w-12 h-12 bg-[#f7f7f7] text-[#222] font-semibold hover:bg-[#86b817] hover:text-white transition">
            3
          </button>
          <button className="w-12 h-12 bg-[#f7f7f7] text-[#222] font-semibold hover:bg-[#86b817] hover:text-white transition">
            →
          </button>
        </div>
      </div>

    
    </section>
  );
}; 

export default BlogList;
