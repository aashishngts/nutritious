import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import {API_URL} from "../context/baseApi"

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 6;
  const API_BASE_URL =`${API_URL}/api`;

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Fetch blogs (public - no auth needed)
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/blogs`);
      
 
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const result = await response.json();

      if (result.success && result.data) {
        const formattedBlogs = result.data.map((blog) => ({
          id: blog._id || blog.id,
          title: blog.title,
          description: blog.content.substring(0, 120) + "...",
          category: blog.category || "Health",
          date: blog.formattedDate,
          image: blog.coverImage,
        }));

        setBlogs(formattedBlogs);
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  // Pagination
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

  // Loading state
  if (loading) {
    return (
      <section className="w-full bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-[#86b817] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-[#666] text-lg">Loading blogs...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="w-full bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <p className="text-red-500 text-lg mb-4">Error: {error}</p>
              <button
                onClick={fetchBlogs}
                className="px-6 py-3 bg-[#86b817] text-white font-semibold rounded hover:bg-[#75a015] transition"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Public Blog View (Clean - No Admin Controls)
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
        {currentBlogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-14">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-12 h-12 bg-[#f7f7f7] text-[#222] font-semibold hover:bg-[#86b817] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ←
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-12 h-12 font-semibold transition ${
                        currentPage === page
                          ? "bg-[#86b817] text-white"
                          : "bg-[#f7f7f7] text-[#222] hover:bg-[#86b817] hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-12 h-12 bg-[#f7f7f7] text-[#222] font-semibold hover:bg-[#86b817] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  →
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-[#666] text-xl">No blogs found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;