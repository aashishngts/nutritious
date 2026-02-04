import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const navigate = useNavigate();

  const API_BASE_URL = "https://sz02nvjz-5000.inc1.devtunnels.ms";

  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const role = localStorage.getItem("userRole");

    if (token && role === "admin") {
      navigate("/blog/admin/dashboard");
    }
  }, [navigate]);

  // Admin Login function
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok && result.success) {
        const token = result.token;
        const role = "admin";

        // Check if user is admin
        if (role === "admin") {
          localStorage.setItem("adminToken", token);
          localStorage.setItem("userRole", role);
          navigate("/blog/admin/dashboard");
        } else {
          setLoginError("Access denied. Admin credentials required.");
        }
      } else {
        setLoginError(result.message || "Invalid credentials");
      }
    } catch (err) {
      setLoginError("Network error. Please try again.");
      console.error("Login error:", err);
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#86b817] to-[#75a015] py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white border-2 border-[#f0f0f0] rounded-xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#86b817] to-[#75a015] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-4xl">🔐</span>
            </div>
            <h2 className="text-4xl font-extrabold text-[#222] mb-2">
              Admin Portal
            </h2>
            <p className="text-[#666]">Enter your credentials to continue</p>
          </div>

          {loginError && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded mb-6">
              <p className="font-semibold">⚠️ {loginError}</p>
            </div>
          )}

          <form onSubmit={handleAdminLogin}>
            <div className="mb-5">
              <label className="block text-[#222] font-semibold mb-2">
                📧 User Name
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="User Name"
                required
                className="w-full px-4 py-3 border-2 border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#86b817] transition"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#222] font-semibold mb-2">
                🔑 Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 border-2 border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#86b817] transition"
              />
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-gradient-to-r from-[#86b817] to-[#75a015] text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-3"
            >
              {loginLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Logging in...
                </span>
              ) : (
                "🚀 Login to Dashboard"
              )}
            </button>

            <button
              type="button"
              onClick={() => navigate("/blog")}
              className="w-full bg-gray-100 text-[#222] font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
            >
              ← Back to Blogs
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              🔒 Secure admin access only
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
