import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-[#f7f7f7] overflow-hidden">
      {/* Image */}
      <div className="w-full h-[230px] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-[#86b817] uppercase tracking-[2px] text-[12px] font-semibold mb-2">
          {blog.category}
        </p>

        <h3 className="text-[22px] font-bold text-[#222] leading-8 mb-3">
          {blog.title}
        </h3>

        <p className="text-[#777] text-[15px] leading-7 mb-6">
          {blog.description}
        </p>

        <div className="flex items-center justify-between text-[#777] text-[13px]">
          <span>{blog.date}</span>
          <button className="text-[#86b817] uppercase font-semibold underline underline-offset-4 tracking-[2px]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
