import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { API_URL } from "../context/baseApi";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 6;
  const API_BASE_URL = `${API_URL}/api`;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/blogs`);
      if (!response.ok) throw new Error("Failed to fetch blogs");

      const result = await response.json();

      if (result.success) {
        setBlogs(
          result.data?.map((blog) => ({
            id: blog._id || blog.id,
            title: blog.title,
            description: blog.content?.substring(0, 120) + "...",
            category: blog.category || "Health",
            date: blog.formattedDate,
            image: blog.coverImage,
            fullContent: blog.content,
          })) || []
        );
      } else {
        setError(result.message || "Failed to fetch blogs");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // 🌿 Loading State
  if (loading) {
    return (
      <section className="relative py-28 bg-gradient-to-b from-white to-[#f6fbf7]">
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-14 h-14 border-4 border-[#138f44] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 text-lg">Loading healthy reads...</p>
        </div>
      </section>
    );
  }

  // ❌ Error State
  if (error) {
    return (
      <section className="py-28 text-center">
        <p className="text-red-500 text-lg mb-4">Error: {error}</p>
        <button
          onClick={fetchBlogs}
          className="px-6 py-3 bg-[#138f44] text-white rounded-lg hover:bg-[#0f7a37] transition"
        >
          Retry
        </button>
      </section>
    );
  }

  return (
    <section className="relative py-12 bg-gradient-to-b from-white to-[#f6fbf7] overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute -top-32 right-0 w-[400px] h-[400px] bg-[#86b817]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center md:mb-20 mb-10">
          <p className="text-[#138f44] uppercase tracking-[4px] text-sm font-semibold mb-4">
            Latest Articles
          </p>

          <h2 className="md:text-5xl text-2xl   font-extrabold text-gray-900 leading-tight">
            Health & Nutrition <br className="hidden md:block"/>
            <span className="text-[#138f44]"> Insights</span>
          </h2>
        </div>

        {/* Blog Grid */}
        {currentBlogs.length > 0 ? (
          <>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {currentBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-16">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-12 h-12 rounded-full bg-white shadow hover:bg-[#138f44] hover:text-white transition disabled:opacity-40"
                >
                  ←
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-12 h-12 rounded-full font-semibold transition ${
                        currentPage === page
                          ? "bg-[#138f44] text-white shadow-lg"
                          : "bg-white shadow hover:bg-[#138f44] hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-12 h-12 rounded-full bg-white shadow hover:bg-[#138f44] hover:text-white transition disabled:opacity-40"
                >
                  →
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 text-xl">No blogs found yet</p>
          </div>
        )}
      </div>
    </section>
  );
}; 

export default BlogList;
