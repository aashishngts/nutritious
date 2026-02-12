import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../context/baseApi";

const AdminLogin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  

   const API_BASE_URL =`${API_URL}`;

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
          navigate("/blogs/admin/dashboard");
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
  <section className="min-h-screen pt-20 w-full flex items-center justify-center bg-gradient-to-br from-[#4c9f70] via-[#55aa7e] to-[#63b987] relative overflow-hidden px-4">

    {/* Soft background glow shapes */}
    <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl top-10 left-10"></div>
    <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl bottom-10 right-10"></div>

    <div className="w-full max-w-md relative z-10">
      <div className="bg-white/90 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-[0_25px_70px_rgba(0,0,0,0.15)]">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Admin Portal
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Enter your credentials to continue
          </p>
        </div>

        {/* Error */}
        {loginError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
            {loginError}
          </div>
        )}

        <form onSubmit={handleAdminLogin} className="space-y-6">

          {/* Username */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your username"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#86b817] focus:border-[#86b817] outline-none transition shadow-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#86b817] focus:border-[#86b817] outline-none transition shadow-sm"
              />

              {/* Professional Eye Icon */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-[#86b817] transition"
              >
                {showPassword ? (
                  // Eye Off Icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-7-9-7a17.92 17.92 0 014.223-4.905M9.88 9.88a3 3 0 104.24 4.24M6.1 6.1l11.8 11.8" />
                  </svg>
                ) : (
                  // Eye Icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loginLoading}
            className="w-full bg-gradient-to-r from-[#86b817] to-[#75a015] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loginLoading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Logging in...
              </span>
            ) : (
              "Login to Dashboard"
            )}
          </button>

          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate("/blog")}
            className="w-full bg-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 hover:shadow-md transition"
          >
            Back to Blogs
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Secure admin access only
          </p>
        </div>

      </div>
    </div>
  </section>
);

};

export default AdminLogin;
