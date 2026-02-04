import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminBlogPanel from "./AdminBlogPanel";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const role = localStorage.getItem("userRole");

    // If not logged in as admin, redirect to login
    if (!token || role !== "admin") {
      navigate("/blog/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("userRole");
    navigate("/blog");
  };

  return <AdminBlogPanel onLogout={handleLogout} />;
};

export default AdminDashboard;