import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";
import AdminLogin from "./auth/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import BlogDetails from "./pages/BlogDetails";


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Admin Routes */}
        <Route path="/blogs/admin/login" element={<AdminLogin />} />
        <Route path="/blogs/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/blog" element={<BlogDetails />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </>
  );
};

export default App;
