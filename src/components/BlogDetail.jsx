import React from "react";
import "animate.css";
import { useLocation } from "react-router-dom";
import { API_URL } from "../context/baseApi";
import DOMPurify from "dompurify";

function BlogDetail() {
  const location = useLocation();
  const data = location.state?.data;

  if (!data) {
    return (
      <div className="mt-32 text-center text-xl font-semibold">
        Blog not found.
      </div>
    );
  }

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/placeholder-image.jpg";
    if (imagePath.startsWith("http")) return imagePath;
    return `${API_URL}${imagePath}`;
  };
console.log(data.fullContent)
  return (
    <div className="mt-20">
      <div className="w-[90%] h-[300px] md:h-[600px] mx-auto overflow-hidden relative animate__animated animate__fadeInUpBig">
        <img
          src={getImageUrl(data.image)}
          alt={data.title}
          className="w-full h-full object-cover object-top rounded-2xl"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

        {/* Desktop */}
        <div className="absolute left-14 bottom-10 right-20 z-40 hidden md:block">
          <div className="flex gap-12 mb-4">
            <div className="text-white text-xl border border-white px-4 py-1 rounded-2xl">
              {data.category}
            </div>
            <div className="text-white text-xl">{data.date}</div>
          </div>

          <h1 className="text-white text-5xl font-bold">
            {data.title}
          </h1>
        </div>

        {/* Mobile */}
        <div className="absolute bottom-5 left-4 right-4 z-40 md:hidden">
          <div className="flex justify-between mb-2">
            <div className="text-white text-sm border border-white px-3 py-1 rounded-2xl">
              {data.category}
            </div>
            <div className="text-white text-sm">{data.date}</div>
          </div>

          <h1 className="text-white text-2xl font-bold">
            {data.title}
          </h1>
        </div>
      </div>

      {/* Blog Body */}
      <div className="mx-auto w-[90%] md:w-[70%] mt-12">
        <h2 className="text-3xl font-semibold mb-6">{data.title}</h2>

        <div
          className="prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.fullContent),
          }}
        />

        
        
      </div>
    </div>
  );
}

export default BlogDetail;
