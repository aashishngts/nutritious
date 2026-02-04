import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const AdminBlogPanel = ({ onLogout }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [blogForm, setBlogForm] = useState({
    title: "",
    content: "",
    coverImage: "",
    category: "",
  });
  const [formLoading, setFormLoading] = useState(false);

  const blogsPerPage = 6;
  const API_BASE_URL = "https://sz02nvjz-5000.inc1.devtunnels.ms/api";

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("adminToken");

      const response = await fetch(`${API_BASE_URL}/blogs`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 401) {
        onLogout();
        throw new Error("Session expired. Please login again.");
      }

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
          fullContent: blog.content,
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

  // Add new blog
  const handleAddBlog = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(`${API_BASE_URL}/blogs`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogForm),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert("✅ Blog added successfully!");
        setBlogForm({ title: "", content: "", coverImage: "", category: "" });
        fetchBlogs();
        setShowAdminPanel(false);
      } else {
        alert("❌ " + (result.message || "Failed to add blog"));
      }
    } catch (err) {
      alert("❌ Error adding blog: " + err.message);
    } finally {
      setFormLoading(false);
    }
  };

  // Update blog
  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(`${API_BASE_URL}/blogs/${editingBlog.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogForm),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert("✅ Blog updated successfully!");
        setBlogForm({ title: "", content: "", coverImage: "", category: "" });
        setEditingBlog(null);
        fetchBlogs();
        setShowAdminPanel(false);
      } else {
        alert("❌ " + (result.message || "Failed to update blog"));
      }
    } catch (err) {
      alert("❌ Error updating blog: " + err.message);
    } finally {
      setFormLoading(false);
    }
  };

  // Delete blog
  const handleDeleteBlog = async (blogId) => {
    if (!window.confirm("⚠️ Are you sure you want to delete this blog?")) {
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(`${API_BASE_URL}/blogs/${blogId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert("✅ Blog deleted successfully!");
        fetchBlogs();
      } else {
        alert("❌ " + (result.message || "Failed to delete blog"));
      }
    } catch (err) {
      alert("❌ Error deleting blog: " + err.message);
    }
  };

  // Edit blog handler
  const handleEditClick = (blog) => {
    setEditingBlog(blog);
    setBlogForm({
      title: blog.title,
      content: blog.fullContent,
      coverImage: blog.image,
      category: blog.category,
    });
    setShowAdminPanel(true);
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditingBlog(null);
    setBlogForm({ title: "", content: "", coverImage: "", category: "" });
    setShowAdminPanel(false);
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

  // Admin Panel Modal
  if (showAdminPanel) {
    return (
      <section className="w-full bg-white py-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border-2 border-[#f0f0f0] rounded-lg p-8 shadow-lg">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-extrabold text-[#222]">
                {editingBlog ? "✏️ Edit Blog" : "➕ Add New Blog"}
              </h2>
              <button
                onClick={handleCancelEdit}
                className="px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-gray-600 transition"
              >
                ✕ Close
              </button>
            </div>

            <form onSubmit={editingBlog ? handleUpdateBlog : handleAddBlog}>
              <div className="mb-5">
                <label className="block text-[#222] font-semibold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={blogForm.title}
                  onChange={(e) =>
                    setBlogForm({ ...blogForm, title: e.target.value })
                  }
                  placeholder="Enter blog title"
                  required
                  className="w-full px-4 py-3 border-2 border-[#e0e0e0] rounded focus:outline-none focus:border-[#86b817] transition"
                />
              </div>

              <div className="mb-5">
                <label className="block text-[#222] font-semibold mb-2">
                  Category
                </label>
                <input
                  type="text"
                  value={blogForm.category}
                  onChange={(e) =>
                    setBlogForm({ ...blogForm, category: e.target.value })
                  }
                  placeholder="e.g. Health, Fitness, Nutrition"
                  className="w-full px-4 py-3 border-2 border-[#e0e0e0] rounded focus:outline-none focus:border-[#86b817] transition"
                />
              </div>

              <div className="mb-5">
                <label className="block text-[#222] font-semibold mb-2">
                  Cover Image URL
                </label>
                <input
                  type="url"
                  value={blogForm.coverImage}
                  onChange={(e) =>
                    setBlogForm({ ...blogForm, coverImage: e.target.value })
                  }
                  placeholder="https://example.com/image.jpg"
                  required
                  className="w-full px-4 py-3 border-2 border-[#e0e0e0] rounded focus:outline-none focus:border-[#86b817] transition"
                />
                {blogForm.coverImage && (
                  <img
                    src={blogForm.coverImage}
                    alt="Preview"
                    className="mt-3 w-full h-48 object-cover rounded"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                )}
              </div>

              <div className="mb-6">
                <label className="block text-[#222] font-semibold mb-2">
                  Content
                </label>
                <textarea
                  value={blogForm.content}
                  onChange={(e) =>
                    setBlogForm({ ...blogForm, content: e.target.value })
                  }
                  placeholder="Write your blog content here..."
                  required
                  rows="10"
                  className="w-full px-4 py-3 border-2 border-[#e0e0e0] rounded focus:outline-none focus:border-[#86b817] transition resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={formLoading}
                  className="flex-1 bg-[#86b817] text-white font-bold py-3 rounded hover:bg-[#75a015] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formLoading
                    ? "Saving..."
                    : editingBlog
                    ? "Update Blog"
                    : "Add Blog"}
                </button>
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-6 py-3 bg-gray-500 text-white font-semibold rounded hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  // Loading
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

  // Error
  if (error) {
    return (
      <section className="w-full bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <p className="text-red-500 text-lg mb-4">Error: {error}</p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={fetchBlogs}
                  className="px-6 py-3 bg-[#86b817] text-white font-semibold rounded hover:bg-[#75a015] transition"
                >
                  Retry
                </button>
                <button
                  onClick={onLogout}
                  className="px-6 py-3 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Admin Header */}
        <div className="flex justify-between items-center mb-8 mt-8 bg-gradient-to-r from-[#86b817] to-[#75a015] p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-4">
            
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                Admin Dashboard
              </h3>
              <p className="text-white/80 text-sm">
                Manage all your blogs here
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowAdminPanel(true)}
              className="md:px-4 md:py-2 px-3 py-1 bg-white text-[#86b817] font-normal rounded hover:bg-gray-100 transition shadow-md"
            >
              Add New Blog
            </button>
            <button
              onClick={onLogout}
              className="md:px-4 md:py-2 px-3 py-1 bg-red-500 text-white font-normal rounded hover:bg-red-600 transition shadow-md"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border-2 border-[#f0f0f0] rounded-lg p-6 text-center">
            <h4 className="text-4xl font-extrabold text-[#86b817] mb-2">
              {blogs.length}
            </h4>
            <p className="text-[#666]">Total Blogs</p>
          </div>
          <div className="bg-white border-2 border-[#f0f0f0] rounded-lg p-6 text-center">
            <h4 className="text-4xl font-extrabold text-blue-500 mb-2">
              {new Set(blogs.map((b) => b.category)).size}
            </h4>
            <p className="text-[#666]">Categories</p>
          </div>
          <div className="bg-white border-2 border-[#f0f0f0] rounded-lg p-6 text-center">
            <h4 className="text-4xl font-extrabold text-purple-500 mb-2">
              {totalPages}
            </h4>
            <p className="text-[#666]">Pages</p>
          </div>
        </div>

        {/* Heading */}
        <p className="text-[#86b817] uppercase tracking-[3px] text-[13px] font-semibold mb-3 text-center flex justify-center items-center gap-2">
          <span className="w-[2px] h-[16px] bg-[#86b817] inline-block"></span>
          Manage Articles
        </p>

        <h2 className="text-[56px] md:text-[64px] font-extrabold text-[#222] text-center leading-[1.1] mb-14">
          All Blogs
        </h2>

        {/* Blog Cards */}
        {currentBlogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentBlogs.map((blog) => (
                <div key={blog.id} className="relative group">
                  <BlogCard blog={blog} />

                  {/* Admin Controls */}
                  <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleEditClick(blog)}
                      className="bg-blue-500 text-white px-3 py-2 rounded text-sm font-semibold hover:bg-blue-600 transition shadow-lg"
                    >
                        Edit
                    </button>
                    <button
                      onClick={() => handleDeleteBlog(blog.id)}
                      className="bg-red-500 text-white px-3 py-2 rounded text-sm font-semibold hover:bg-red-600 transition shadow-lg"
                    >
                     Delete
                    </button>
                  </div>
                </div>
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
            <p className="text-[#666] text-xl mb-4">No blogs found</p>
            <button
              onClick={() => setShowAdminPanel(true)}
              className="px-6 py-3 bg-[#86b817] text-white font-semibold rounded hover:bg-[#75a015] transition"
            >
              Add First Blog
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminBlogPanel;